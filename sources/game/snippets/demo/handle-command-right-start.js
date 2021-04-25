export default function (entity, input) {

    entity.get('images').character = {

        "type": "datasets",
        "scope": "demo",
        "name": "spritesheet-character-run"
    };

    entity.get('forces').run = {

        'type': 'datasets',
        'scope': 'demo',
        'name': 'force-character'
    };

    if (typeof this.$.breathe !== 'undefined') {

        this.$.breathe.pause();
        delete this.$.breathe;
    }

    this.$.breathe = this.assets.sounds.demo['breathe']();
    this.$.breathe.loop = true;
    this.$.breathe.play();

    if (typeof this.$.run !== 'undefined') {

        this.$.run.pause();
        delete this.$.run;
    }

    this.$.run = this.assets.sounds.demo['run']();
    this.$.run.loop = true;
    this.$.run.play();

    if (typeof this.$.background === 'undefined') {

        this.$.background = this.assets.sounds.demo['background']();
        this.$.background.loop = true;
        this.$.background.play();
        console.log('plop')
    }
};
