'use strict';

const style = '@keyframes spin_animation{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.alfa-payment__button{display:inline-block;position:relative;margin:0;padding:0;cursor:pointer;outline:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,Roboto Rouble,sans-serif;text-align:center;white-space:nowrap;transition-duration:.2s;transition-property:background,border-color,color,width;transition-timing-function:ease;border-radius:3px}@media screen and (max-width:47.9375em){.alfa-payment__button{width:100%}}.alfa-payment__button,.alfa-payment__button *,.alfa-payment__button:after,.alfa-payment__button:before{box-sizing:border-box}.alfa-payment__button:disabled{padding-left:40px}.alfa-payment__button:disabled:after{content:"";display:inline-block;position:absolute;top:calc(50% - 10px);left:10px;width:20px;height:20px;background:url(data:image/png;base64,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) no-repeat;background-size:contain;animation:spin_animation .8s infinite linear}.alfa-payment__button::-moz-focus-inner{padding:0;border:0}.alfa-payment__button_size_s{min-height:30px;padding:0 15px;font-size:13px;line-height:28px}.alfa-payment__button_size_m{min-height:40px;padding:0 20px;font-size:16px;line-height:38px}.alfa-payment__button_size_l{min-height:50px;padding:0 25px;font-size:18px;line-height:48px}.alfa-payment__button_size_xl{min-height:60px;padding:0 30px;font-size:22px;line-height:58px}.alfa-payment__message{display:block;padding:15px 0}.alfa-payment__payment-close-button{background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjI1cHgiIGhlaWdodD0iMjVweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNNDA5LjEzMywxMDkuMjAzYy0xOS42MDgtMzMuNTkyLTQ2LjIwNS02MC4xODktNzkuNzk4LTc5Ljc5NkMyOTUuNzM2LDkuODAxLDI1OS4wNTgsMCwyMTkuMjczLDANCgkJYy0zOS43ODEsMC03Ni40Nyw5LjgwMS0xMTAuMDYzLDI5LjQwN2MtMzMuNTk1LDE5LjYwNC02MC4xOTIsNDYuMjAxLTc5LjgsNzkuNzk2QzkuODAxLDE0Mi44LDAsMTc5LjQ4OSwwLDIxOS4yNjcNCgkJYzAsMzkuNzgsOS44MDQsNzYuNDYzLDI5LjQwNywxMTAuMDYyYzE5LjYwNywzMy41OTIsNDYuMjA0LDYwLjE4OSw3OS43OTksNzkuNzk4YzMzLjU5NywxOS42MDUsNzAuMjgzLDI5LjQwNywxMTAuMDYzLDI5LjQwNw0KCQlzNzYuNDctOS44MDIsMTEwLjA2NS0yOS40MDdjMzMuNTkzLTE5LjYwMiw2MC4xODktNDYuMjA2LDc5Ljc5NS03OS43OThjMTkuNjAzLTMzLjU5NiwyOS40MDMtNzAuMjg0LDI5LjQwMy0xMTAuMDYyDQoJCUM0MzguNTMzLDE3OS40ODUsNDI4LjczMiwxNDIuNzk1LDQwOS4xMzMsMTA5LjIwM3ogTTMyMi42MjEsMjcwLjkzOWMzLjYxNywzLjYxMyw1LjQyOCw3LjkwNSw1LjQyOCwxMi44NTQNCgkJYzAsNS4xMzMtMS44MTEsOS41MTQtNS40MjgsMTMuMTI3bC0yNS42OTMsMjUuNzAxYy0zLjYxNCwzLjYxMy03Ljk5NCw1LjQyLTEzLjEzNSw1LjQyYy00Ljk0OCwwLTkuMjM2LTEuODA3LTEyLjg0Ny01LjQyDQoJCWwtNTEuNjc2LTUxLjY4MmwtNTEuNjc4LDUxLjY4MmMtMy42MTYsMy42MTMtNy44OTgsNS40Mi0xMi44NDcsNS40MmMtNS4xNCwwLTkuNTE3LTEuODA3LTEzLjEzNC01LjQybC0yNS42OTctMjUuNzAxDQoJCWMtMy42MTYtMy42MTMtNS40MjQtNy45OTQtNS40MjQtMTMuMTI3YzAtNC45NDgsMS44MDktOS4yNCw1LjQyNC0xMi44NTRsNTEuNjc4LTUxLjY3M2wtNTEuNjc4LTUxLjY3OA0KCQljLTMuNjE2LTMuNjEyLTUuNDI0LTcuODk4LTUuNDI0LTEyLjg0N2MwLTUuMTQsMS44MDktOS41MTcsNS40MjQtMTMuMTM0bDI1LjY5Ny0yNS42OTNjMy42MTctMy42MTYsNy45OTQtNS40MjQsMTMuMTM0LTUuNDI0DQoJCWM0Ljk0OSwwLDkuMjMxLDEuODA5LDEyLjg0Nyw1LjQyNGw1MS42NzgsNTEuNjc0bDUxLjY3Ni01MS42NzRjMy42MS0zLjYxNiw3Ljg5OC01LjQyNCwxMi44NDctNS40MjQNCgkJYzUuMTQxLDAsOS41MjEsMS44MDksMTMuMTM1LDUuNDI0bDI1LjY5MywyNS42OTNjMy42MTcsMy42MTcsNS40MjgsNy45OTQsNS40MjgsMTMuMTM0YzAsNC45NDgtMS44MTEsOS4yMzUtNS40MjgsMTIuODQ3DQoJCWwtNTEuNjc1LDUxLjY3OEwzMjIuNjIxLDI3MC45Mzl6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==) no-repeat;width:25px;height:25px;display:block;cursor:pointer}@media screen and (max-width:47.9375em){.alfa-payment__payment-close-button{margin-top:5px;margin-right:5px}}.alfa-payment__payment-close-button:after{content:"";display:block;position:absolute;top:2px;z-index:-1;width:20px;height:20px;background-color:#fff;border-radius:25px}.alfa-payment__modal{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);z-index:9999}.alfa-payment__modal_hidden{display:none}.alfa-payment__spinner{position:absolute;top:calc(50% - 25px);left:calc(50% - 25px);width:50px;height:50px;background-size:cover;background-image:url(https://sandbox.egopay.ru/media/img/alfa-payment/icon-loading.gif)}.alfa-payment__spinner_hidden{display:none}.alfa-payment__iframe{width:100%;height:100%;border:none}.alfa-payment__iframe_hidden{display:none}.alfa-payment__frame-header{height:25px;position:absolute;right:-15px;top:-15px}@media screen and (max-width:47.9375em){.alfa-payment__frame-header{position:absolute;right:0;top:0;width:100%;background:#fff}}.alfa-payment__frame-body{height:100%}@media screen and (max-width:47.9375em){.alfa-payment__frame-body{padding-top:15px}}@keyframes hide{to{visibility:hidden}}.alfa-payment__frame-modal{width:414px;height:750px;max-height:100%;position:fixed;top:10%;left:calc(50% - 212px);transition:transform .2s ease;background:#fff;z-index:9999}.alfa-payment__frame-modal_hidden{transform:scale(0);animation-name:hide;animation-delay:.5s;animation-fill-mode:forwards}.alfa-payment__frame-modal_show{transform:scale(1)}@media screen and (max-width:47.9375em){.alfa-payment__frame-modal{width:100%;height:100%;top:0;left:0;-webkit-overflow-scrolling:touch;overflow-y:scroll}}.theme_alfa-on-color{background:rgba(240,50,38,.85);border-color:rgba(240,50,38,.85);color:#fff}.theme_alfa-on-color:hover{background:#f03226;border-color:#f03226}'
const pathsMap = {
    'status': '../../api/ab/widget/status',
    'register': '../../api/ab/rest/register.do',
}

document.addEventListener('DOMContentLoaded', () => {
    const {
        paymentButton,
        paymentMessage,
        paymentDataWrapper,
        paymentModal,
        frameModal,
        frameModalCloseButton,
        frame
    } = generateElements();

    pathsMap.mainPath = document.getElementById('alfa-payment-script').src.replace('.js', '');

    paymentButton.onclick = widgetScript.bind(
        paymentDataWrapper,
        paymentButton,
        paymentMessage,
        paymentModal,
        frameModal,
        frameModalCloseButton,
        frame
    );
})

function generateElements() {
    // # find widget <button>
    const paymentDataWrapper = document.getElementById('alfa-payment-button');
    const body = document.body;
    const head = document.head;

    const stylesheet = document.createElement('style');
    stylesheet.innerText = style;
    head.append(stylesheet);

    // # generate payment button
    const paymentButton = document.createElement('button');
    paymentButton.id = 'alfa-payment__button';
    paymentButton.classList.add('alfa-payment__button', 'theme_alfa-on-color', 'alfa-payment__button_size_xl');
    paymentButton.innerText = paymentDataWrapper.dataset.buttonText || 'Оплатить картой';
    paymentDataWrapper.append(paymentButton);

    // # generate message span
    const paymentMessage = document.createElement('span');
    paymentMessage.id = 'alfa-payment__message';
    paymentMessage.classList.add('alfa-payment__message');
    paymentDataWrapper.append(paymentMessage);

    // # generate payment modal
    const paymentModal = document.createElement('div');
    paymentModal.classList.add('alfa-payment__modal', 'alfa-payment__modal_hidden');
    body.append(paymentModal);

    // # generate frame modal
    const frameModal = document.createElement('div');
    frameModal.id = 'alfa-payment';
    frameModal.classList.add('alfa-payment__frame-modal', 'alfa-payment__frame-modal_hidden');
    body.append(frameModal);

    // # generate frame modal header
    const frameModalHeader = document.createElement('div');
    frameModalHeader.classList.add('alfa-payment__frame-header');
    frameModal.append(frameModalHeader);

    // # generate close button in frame modal header
    const frameModalCloseButton = document.createElement('span');
    frameModalCloseButton.classList.add('alfa-payment__payment-close-button');
    frameModalHeader.append(frameModalCloseButton);

    // # generate frame modal body
    const frameModalBody = document.createElement('div');
    frameModalBody.classList.add('alfa-payment__frame-body')
    frameModal.append(frameModalBody);

    // # generate frame spinner
    const frameModalSpinner = document.createElement('div');
    frameModalSpinner.classList.add('alfa-payment__spinner');
    frameModalBody.append(frameModalSpinner);

    const frame = document.createElement('iframe');
    frame.allow = 'payment';
    frame.sandbox = 'allow-popups allow-forms allow-same-origin allow-scripts';
    frame.classList.add('alfa-payment__iframe', 'alfa-payment__iframe_hidden');
    frameModalBody.append(frame);

    return {
        paymentButton,
        paymentMessage,
        paymentDataWrapper,
        paymentModal,
        frameModal,
        frameModalCloseButton,
        frame,
    };
}

async function widgetScript(paymentButton, paymentMessage, paymentModal, frameModal, frameModalCloseButton, frame) {
    // # convert DOMStringMap to object
    const { ...alfaPaymentData } = this.dataset;

    // # generate add- params object
    additionalParams(alfaPaymentData);

    // # find keys ob object, if value start with '.'
    findDataFromElements(alfaPaymentData);

    // # hard currency
    alfaPaymentData['currency'] = 810;

    // # rename keys
    // # только в том случае, если у полей есть префикс -selector
    // # без него указывается не селектор, а 'захардкорженные' данные
    renameKeys(alfaPaymentData);

    if(!alfaPaymentData.returnUrl) {
        alfaPaymentData.returnUrl = location.origin;
    }

    // # transform amount
    if(alfaPaymentData.amount) transformAmount(alfaPaymentData);

    // # generate orderNumber
    if(!alfaPaymentData.orderNumber) generateOrderNumber(alfaPaymentData)

    const { valid, errorMessages } = validation(alfaPaymentData);
    // # array of modal elements
    const modalElements = [paymentButton, paymentMessage, paymentModal, frameModal, frame];
    // # orderID for get status request
    let orderID;

    try {
        if(!valid) {
            const firstErrorKey = Object.keys(errorMessages)[0];
            throw new Error(errorMessages[firstErrorKey]);
        }
        // # register request
        const response = await backendRequest(pathsMap.mainPath + '/' + pathsMap.register, alfaPaymentData);
        if(Number(response.errorCode) === 0) {
            openModal([...modalElements]);
            frame.src = response.formUrl;
            orderID = response.orderId;
            frame.addEventListener("load", frameIsLoaded)
        } else {
            throw new Error(response.errorMessage);
        }
    } catch(error) {
        paymentMessage.style.color = 'red';
        paymentMessage.innerText = error.message;
    }

    frameModalCloseButton.addEventListener('click', () => getStatus(alfaPaymentData.language, orderID, modalElements));
}

function validation(data) {
    let valid = true;
    const errorMessages = {};

    // # пустой номер заказа
    if(!data.orderNumber) {
        valid = false;
        errorMessages.orderNumber = '[orderNumber] не задан';
    }

    // # сумма не введена,
    // # сумма должна быть больше и не равна нулю
    // # ERROR_REQUIRE_AMOUNT
    if(!(Number(data.amount) && Number(data.amount) > 0 && Number(data.amount) !== 0)) {
        valid = false;
        errorMessages.amountError = 'Поле сумма не заполнено';
    }

    // # не пустые урл, сумма и токен
    // # ERROR_REQUIRE
    if(!data.amount || !data.token) {
        valid = false;
        errorMessages.requireFiled = 'Необходимо заполнить обязательные поля';
    }

    return {
        valid,
        errorMessages
    };
}

function frameIsLoaded() {
    document.querySelector('.alfa-payment__spinner').classList.add('alfa-payment__spinner_hidden')
}

function findDataFromElements(data) {
    for (const element in data) {
        if (data[element].indexOf('.') === 0) {
            const foundSelector = document.querySelector(data[element]);
            if(foundSelector) {
                data[element] = foundSelector.value || foundSelector.innerText;
            } else if(element === 'orderNumberSelector' && !foundSelector) {
                data[element] = ""
            }
        }
    }
}

function additionalParams(alfaPaymentData) {
    const params = {}
    for(const key in alfaPaymentData) {
        const isAdditional = key.slice(0,3) === 'add';
        if(isAdditional) {
            const _key = key.slice(3).toLowerCase();
            params[_key] = alfaPaymentData[key];
            delete alfaPaymentData[key];
        }
    }
    alfaPaymentData.additionalParameters = params;
}

function renameKeys(data) {
    const selectorKeys = Object.keys(data).filter(data_item => data_item.includes('Selector'));

    selectorKeys.forEach(key => {
        const stringWithSelectorRemoved = key.slice(0, -8);
        if(data[key]) {
            data[stringWithSelectorRemoved] = data[key]
            delete data[key];
        }
    })
}

function generateOrderNumber(data) {
    data['orderNumber'] = String(parseInt(new Date() / 1000));
}

function transformAmount(data) {
    data.amount = data.amount.replace(/ /g, '');
    data.amount = data.amount.replace(/,/g, '.');

    if (data.amount.includes('руб')) {
        const regExp = new RegExp(/(\d+)+руб(лей|ля|ль|\.|\d)((\d+)+коп(еек|ейки|йка|\.|\s)|)?/g);
        data.amount = data.amount.replace(regExp, (match, rubles, rub_ending, copecks_match, copecks) => {
            const copecks_end = copecks || '';
            return rubles + '.' + copecks_end;
        })
    }
    data.amount = Number(data.amount).toFixed(2) * 100;
}

function openModal([paymentButton, paymentMessage, paymentModal, frameModal, frame]) {
    paymentButton.setAttribute('disabled', 'disabled');
    paymentMessage.innerText = '';
    paymentModal.classList.remove('alfa-payment__modal_hidden');
    frameModal.classList.remove('alfa-payment__frame-modal_hidden');
    frame.classList.remove('alfa-payment__iframe_hidden');
}

async function getStatus(language, orderID, modalElements) {
    // # generate request data (orderNumber, language, ...)
    const statusRequestData = {};
    statusRequestData.orderId = orderID;
    statusRequestData.language = language || 'ru';
    // # status data
    let statusMessage;
    let statusMessageTextColor;

    try {
        // # get status request
        const response = await backendRequest(pathsMap.mainPath + '/' + pathsMap.status, statusRequestData);
        if(Number(response.orderStatus) === 0) {
            throw new Error('Заказ не оплачен');
        } else if(Number(response.orderStatus) === 2) {
            statusMessage = response.message;
            statusMessageTextColor = 'green';
        } else {
            throw new Error(response.message)
        }
    } catch(error) {
        statusMessageTextColor = 'red';
        statusMessage = error.message;
    } finally {
        // # closeModal запускаем только после получаения статуса
        closeModal([...modalElements], statusMessage, statusMessageTextColor)
    }
}

function closeModal([paymentButton, paymentMessage, paymentModal, frameModal, frame], statusMessage, statusMessageTextColor) {
    paymentMessage.style.color = statusMessageTextColor;
    paymentMessage.innerText = statusMessage;
    paymentButton.removeAttribute('disabled');
    paymentModal.classList.add('alfa-payment__modal_hidden');
    frameModal.classList.add('alfa-payment__frame-modal_hidden');
    frame.classList.add('alfa-payment__iframe_hidden');
    frame.src = '';
}

async function backendRequest(url, data) {
    const request = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return await request.json();
}
