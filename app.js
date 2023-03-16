// Используя регулярные выражения необходимо сделать поле для ввода ИНН
// и как на уроке сделать её проверку.

const phoneInput = document.querySelector('#phoneInput'),
    phoneCheck = document.querySelector('#phoneCheck'),
    phoneResult = document.querySelector('.phoneResult')

const regExp = /^\d{1}\d{2}\d{2}\d{4}\d{1}\d{3}\d{1}$/

phoneCheck.onclick = () => {
    console.log(phoneInput.value)
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerHTML = 'Ok'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerHTML = 'Not ok'
        phoneResult.style.color = 'red'
    }
}