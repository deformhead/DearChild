function start() {

    console.log('lifecycle :', 'start demo scene');

    this.$.world.initialize([

        ...this.pools.demo.start(),
        ...this.pools.demo.chalet(),
        ...this.pools.demo.forest(),
        ...this.pools.demo.cliff(),
        ...this.pools.demo['04-forest'](),
        ...this.pools.demo['05-hospital']()
    ]);

    this.$.camera.look(

        () => this.$.world.get('demo-character').get('position').x,
        () => this.$.world.get('demo-character').get('position').y - 32
    );

    this.$.interface.look(

        () => 0,
        () => 0
    );
}

export {start};
