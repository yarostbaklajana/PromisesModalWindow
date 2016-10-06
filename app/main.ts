/**
 * Created by yaros on 01.10.2016.
 */

import 'bootstrap/dist/css/bootstrap';
import '../styles/main';
import {ModalWindow} from './modalWindow';

let openModalBtn = document.querySelector('.open-modal');
let outputField = document.querySelector('.output-like');

const modal = new ModalWindow();
openModalBtn.addEventListener('click', function (e) {

    modal.show().then((response) => {
            outputField.textContent = 'Hello, ' + response;
        },
        (error) => {
            outputField.textContent = error;
        });
});