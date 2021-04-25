export default function (entity, extra) {

    this.$.world.add(this.entities.demo['05-hospital-dear-child']());
    this.$.world.get('demo-05-hospital-ground').add({'name': 'fade'});
    this.$.world.get('demo-character').add({

        'name': 'fade'
    });
};
