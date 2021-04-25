export default function (entity, collision) {

    const velocityComponent = this.snippets.common['get-velocity'](entity);

    if (collision.from.bottom === true) {

        velocityComponent.top = Math.max(velocityComponent.top, collision.delta.bottom);
    }

    entity.get('forces').gravity = {

        'type': 'datasets',
        'scope': 'demo',
        'name': 'force-gravity'
    };
};
