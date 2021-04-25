function setup() {

    console.log('lifecycle :', 'setup splash scene');

    this.$.controllers = this.snippets.common['setup-inputs']('splash');
    this.$.camera = this.snippets.common['setup-camera']('default', 'contain-framed', 480, 320, 1);
    this.$.interface = this.snippets.common['setup-camera']('interface', 'contain-framed', 480, 320, 1);
    this.$.world = this.snippets.common['setup-world']();
}

export {setup};
