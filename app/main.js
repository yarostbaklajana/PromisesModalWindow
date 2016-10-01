/**
 * Created by yaros on 01.10.2016.
 */
"use strict";
var modalWindow_1 = require('./modalWindow');
var openModalBtn = document.querySelector('.open-modal');
var outputField = document.querySelector('.output-like');
var modal = new modalWindow_1.ModalWindow();
openModalBtn.addEventListener('click', function (e) {
    modal.show().then(function (response) {
        outputField.textContent = 'Hello, ' + response;
    }, function (error) {
        outputField.textContent = error;
    });
});
//# sourceMappingURL=main.js.map