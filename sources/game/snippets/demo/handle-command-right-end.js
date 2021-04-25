export default function (entity, input) {

    entity.get('images').character = {

        "type": "datasets",
        "scope": "demo",
        "name": "spritesheet-character-idle"
    };

    delete entity.get('forces').run;

    if (typeof this.$.breathe !== 'undefined') {

        this.$.breathe.pause();
        delete this.$.breathe;
    }

    if (typeof this.$.run !== 'undefined') {

        this.$.run.pause();
        delete this.$.run;
    }
};
