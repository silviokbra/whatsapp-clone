class WhatsAppController {

    constructor() {

        console.log('Ok');

        this.loadElements();
    }

    loadElements() {

        this.el = {};

        document.querySelectorAll('[id]').forEach(element => {

            this.el[Format.getCamelCase(element.id)] = element;

        });
    }

}