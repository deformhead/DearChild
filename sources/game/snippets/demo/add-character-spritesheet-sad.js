export default function (entity, extra) {

    entity.get('images').character = {

        'type': 'datasets',
        'scope': 'demo',
        'name': 'spritesheet-character-sad'
    };

    this.$.fall = this.assets.sounds.demo['fall']();
    this.$.fall.play();
};
