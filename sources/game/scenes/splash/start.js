function start() {

    console.log('lifecycle :', 'start splash scene');

    this.$.world.initialize([

        ...this.pools.splash.start()
    ]);

    this.$.camera.look(

        () => 0,
        () => 0
    );

    this.$.interface.look(

        () => 0,
        () => 0
    );
}

export {start};
