/**
 * Created by yaros on 23.09.2016.
 */
'use strict';
let openModalBtn = document.querySelector('.open-modal');
let outputField = document.querySelector('.output-like');

class ModalWindow {

    constructor() {
        this.modalWindow = document.querySelector('#modal-container');
        this.inputField = document.querySelector('#input-field');
        this.cancel = document.querySelector('#cancel-btn');
        this.submit = document.querySelector('#submit-btn');
    }

    show() {
        this.modalWindow.classList.remove('hidden');

        return new Promise((resolve, reject) => {
            this.handleSubmit =  () => {
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

        this.modalWindow.classList.add('hidden');
    }

}

const modal = new ModalWindow();
openModalBtn.addEventListener('click', function (e) {

    modal.show().then((response) => {
            outputField.textContent = 'Hello, ' + response;
        },
        (error) => {
            outputField.textContent = error;
        });
});



