export default function (entityA, collision, entityB) {

    console.log(entityB.name);

    if (entityB.name === 'demo-02-forest-trigger-text') {

        this.$.world.add(this.entities.demo['02-forest-text-told-you']());
    }

    if (entityB.name === 'demo-03-cliff-trigger-text') {

        this.$.world.add(this.entities.demo['03-cliff-text-problem-baby']());

        this.$.cliff = this.assets.sounds.demo['cliff']();
        this.$.cliff.play();
    }

    if (entityB.name === 'demo-04-forest-trigger-text') {

        this.$.world.add(this.entities.demo['04-forest-text']());
    }

    if (entityB.name === 'demo-05-hospital-trigger-text') {

        this.$.world.add(this.entities.demo['05-hospital-text']());
        entityA.remove('inputs');
        entityA.remove('forces');

        if (typeof this.$.breathe !== 'undefined') {

            this.$.breathe.pause();
            delete this.$.breathe;
        }

        if (typeof this.$.run !== 'undefined') {

            this.$.run.pause();
            delete this.$.run;
        }

        entityA.get('images').character = {

            'type': 'datasets',
            'scope': 'demo',
            'name': 'spritesheet-character-idle'
        };
        entityA.add({

            'name': 'timeout',
            'parameters': {

                "duration": 2000,
                "elapsed": 0,
                "$ending": {

                    "type": "snippets",
                    "scope": "demo",
                    "name": "add-character-spritesheet-sad"
                }
            }
        });
    }

    this.$.world.remove(entityB.name);
};
