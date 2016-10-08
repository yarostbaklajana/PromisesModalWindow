'use strict';

import '../styles/modalWindow';

export class ModalWindow {
    private modalWindow: Element;
    private inputField: HTMLInputElement;
    private cancel: Element;
    private submit: Element;
    private handleSubmit: EventListenerOrEventListenerObject;
    private handleCancel: EventListenerOrEventListenerObject;

    constructor() {
        this.modalWindow = document.querySelector('#modal-container');
        this.inputField = <HTMLInputElement>document.querySelector('#input-field');
        this.cancel = <HTMLButtonElement>document.querySelector('#cancel-btn');
        this.submit = <HTMLButtonElement>document.querySelector('#submit-btn');
    }

    show():Promise<string> {
        this.modalWindow.classList.remove('hide');
        this.modalWindow.classList.add('show');

        return new Promise((resolve, reject) => {
            this.handleSubmit = () => {
                if (this.inputField.value != '') {
                    resolve(this.inputField.value);
                }
                reject('Input field is empty');
                this.closeModalWindow();
            }

            this.handleCancel = () => {
                reject('Window was closed');
                this.closeModalWindow();
            }

            this.submit.addEventListener('click', this.handleSubmit);
            this.cancel.addEventListener('click', this.handleCancel);
        });
    }

    closeModalWindow() {
        this.cancel.removeEventListener('click', this.handleCancel);
        this.submit.removeEventListener('click', this.handleSubmit);
        this.modalWindow.classList.remove('show');
        this.modalWindow.classList.add('hide');
    }
}

