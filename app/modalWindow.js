'use strict';
var es6_promise_1 = require('es6-promise');
var ModalWindow = (function () {
    function ModalWindow() {
        this.modalWindow = document.querySelector('#modal-container');
        this.inputField = document.querySelector('#input-field');
        this.cancel = document.querySelector('#cancel-btn');
        this.submit = document.querySelector('#submit-btn');
    }
    ModalWindow.prototype.show = function () {
        var _this = this;
        this.modalWindow.classList.remove('hidden');
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.handleSubmit = function () {
                if (_this.inputField.value != '') {
                    resolve(_this.inputField.value);
                }
                reject('Input field is empty');
                _this.closeModalWindow();
            };
            _this.handleCancel = function () {
                reject('Window was closed');
                _this.closeModalWindow();
            };
            _this.submit.addEventListener('click', _this.handleSubmit);
            _this.cancel.addEventListener('click', _this.handleCancel);
        });
    };
    ModalWindow.prototype.closeModalWindow = function () {
        this.cancel.removeEventListener('click', this.handleCancel);
        this.submit.removeEventListener('click', this.handleSubmit);
        this.modalWindow.classList.add('hidden');
    };
    return ModalWindow;
}());
exports.ModalWindow = ModalWindow;
//# sourceMappingURL=modalWindow.js.map