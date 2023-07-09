const cities = require('cities');
const containerDiv = document.getElementById('container')

class SuperElement {
  constructor(parent, elementType, textContent, className, id) {
    this.element = document.createElement(elementType);
    if (textContent) {
      this.element.textContent = textContent;
    }
    if (className) {
      this.element.classList.add(className);
    }
    if (id) {
      this.element.id = id;
    }
    if (parent) {
      parent.appendChild(this.element);
    }
  }
}
//error div
const errorDiv = new SuperElement(containerDiv, 'div', '', 'errorMsg', 'errorMsg').element

function checkForContent(input, boolean) {
    if (input.value === '' || input.value == null) {
        boolean = false
    } else {
        boolean = true
    }
    input.onfocus = function() {
        checkOnBlur(input)
        
    }
    console.log(boolean)
    return boolean
}
function renderStatusStyle(input, boolean) {
   
    input.addEventListener('input', () => {
        if (!checkForContent(input, boolean)) {
            input.classList.add('redBorder')
        } else {
            input.classList.remove('redBorder')
        }
        
    })
    input.onfocus = function() {
        if (!checkForContent(input, boolean)) {
            input.classList.add('redBorder')
        } else {
            input.classList.remove('redBorder')
        }
        
    }
}
let nameIsValid
function renderName() {

    const nameDiv = new SuperElement(form, 'div', '', 'formDiv', '').element
    const nameLabel = new SuperElement(nameDiv, 'label', 'Name:', 'formLabel', 'nameLabel').element
    nameLabel.htmlFor = 'name'
    const nameInput = new SuperElement(nameDiv, 'input', '', 'formInput', 'nameInput').element
    nameInput.name = 'name'
    nameInput.type = 'text'
    nameInput.setAttribute('required', 'true')
    nameInput.placeholder = 'Full Name'

    //validate input content
    
    nameIsValid = renderStatusStyle(nameInput, nameIsValid)
    return nameIsValid
}
let emailIsValid
function renderEmail() {
    const emailDiv = new SuperElement(form, 'div', '', 'formDiv', '').element
    const emailLabel = new SuperElement(emailDiv, 'label', 'Email:', 'formLabel', 'emailLabel').element
    emailLabel.htmlFor = 'email'
    const emailInput = new SuperElement(emailDiv, 'input', '', 'formInput', 'emailInput').element
    emailInput.name = 'email'
    emailInput.type = 'email'
    emailInput.setAttribute('required', 'true')
    emailInput.placeholder = 'Email'

    //validate input content
    
    
    return emailIsValid
}

function renderAddress() {
    const stAddressDiv = new SuperElement(form, 'div', '', 'formDiv', '').element
    const stAddressLabel = new SuperElement(stAddressDiv, 'label', 'Address: ', 'formLabel', 'stAddressLabel').element
    stAddressLabel.htmlFor = 'stAddress'
    const stAddressInput = new SuperElement(stAddressDiv, 'input', '', 'formInput', 'stAddressInput').element
    stAddressInput.name = 'stAddress'
    stAddressInput.type = 'text'
    stAddressInput.placeholder = '123 Example St.'
    //city
    const cityAddressDiv = new SuperElement(form, 'div', '', 'formDiv', '').element
    const cityLabel = new SuperElement(cityAddressDiv, 'label', 'City:', 'formLabel', 'cityLabel').element
    cityLabel.htmlFor = 'city'
    const cityInput = new SuperElement(cityAddressDiv, 'input', '', 'formInput', 'cityInput').element
    cityInput.name = 'city'
    cityInput.type = 'text'
    cityInput.placeholder = 'Atlantis'
    //state
    const stateAddressDiv = new SuperElement(form, 'div', '', 'formDiv', '').element
    const stateLabel = new SuperElement(stateAddressDiv, 'label', 'State:', 'formLabel', 'stateLabel').element
    stateLabel.htmlFor = 'state'
    const stateInput = new SuperElement(stateAddressDiv, 'input', '', 'formInput', 'stateInput').element
    stateInput.name = 'state'
    stateInput.type = 'text'
    stateInput.placeholder = 'State'
    //zip
    const zipDiv = new SuperElement(form, 'div', '', 'formDiv', '').element
    const zipLabel = new SuperElement(zipDiv, 'label', 'Zip Code:', 'formLabel', 'zipLabel').element
    zipLabel.htmlFor = 'zip'
    const zipInput = new SuperElement(zipDiv, 'input', '', 'formInput', 'zipInput').element
    zipInput.name = 'zip'
    zipInput.type = 'text'
    zipInput.placeholder = '90210'
}

function renderPassword() {
    //password
const passwordDiv = new SuperElement(form, 'div', '', 'formDiv', '').element
const passwordLabel = new SuperElement(passwordDiv, 'label', 'Password:', 'formLabel', 'passwordLabel').element
passwordLabel.htmlFor = 'password'
const passwordInput = new SuperElement(passwordDiv, 'input', '', 'formInput', 'passwordInput').element
passwordInput.name = 'password'
passwordInput.type = 'password'
passwordInput.placeholder = 'Password'
passwordInput.setAttribute('required', 'true')
 //password requiements

 const passwordRequirements = ['lowercase', 'uppercase', 'number', 'specialCh', 'minLength',]
 const errorDiv = new SuperElement(passwordDiv, 'div', 'Required:', 'pwdErrorDiv', 'pwdErrorDiv').element
 errorDiv.classList.add('hide')

 //event listeners
passwordInput.onfocus = function() {
    if (!checkRequired(passwordInput)) {
        errorDiv.classList.remove('hide')
    }
    passwordRequirements.map(item => {
    
    console.log(item)
    let content = item
    if (item === 'minLength') {
        content = '8 character min' 
    }
    if (item === 'specialCh') {
        content = '!@#$%^&*'
    }
    const requiredElem = new SuperElement(errorDiv, 'p', content, 'passwordMsg', item).element
    requiredElem.classList.add('colorRed')
    checkRequired(passwordInput)
})
}

    passwordInput.addEventListener('input', function() {
        let requiredTxt = document.querySelectorAll('.passwordMsg');
        for (let i = 0; i < requiredTxt.length; i++) {
            checkRequired(passwordInput)
            if (checkRequired(passwordInput)) {
                errorDiv.classList.add('hide')
            } else {
                errorDiv.classList.remove('hide')
            }
        }
    })

    passwordInput.onblur = function() {
        errorDiv.classList.add('hide')
        if (!checkRequired(passwordInput)) {
            passwordInput.classList.add('redBorder')
            } else {
            passwordInput.classList.remove('redBorder')
        }
    let passwordMsgs = document.querySelectorAll('.passwordMsg')
    for (let i = 0; i < passwordMsgs.length; i++) {
        passwordMsgs[i].remove()
    }
  }
  renderPswdConfirm(passwordInput)
}
function renderPswdConfirm(password) {
    //password confirmation
const confirmPswdDiv = new SuperElement(form, 'div', '', 'formDiv', '').element
const confirmPswdLabel = new SuperElement(confirmPswdDiv, 'label', 'Confirm: ', 'formLabel', 'confirmPswdLabel').element
confirmPswdLabel.htmlFor = 'confirmPswd'
const confirmPswdInput = new SuperElement(confirmPswdDiv, 'input', '', 'formInput', 'confirmPswdInput').element
confirmPswdInput.name = 'confirmPswd'
confirmPswdInput.type = 'password'
confirmPswdInput.placeholder = 'Confirm password'
confirmPswdInput.setAttribute('required', 'true')
const errorConfirmPswd = new SuperElement(confirmPswdDiv, 'div', 'Passwords not a match', 'pwdErrorDiv', 'pwdErrorDiv').element
errorConfirmPswd.classList.add('hide')
errorConfirmPswd.classList.add('colorRed')

confirmPswdInput.onfocus = function() {
    if (!matchPassword(password, confirmPswdInput)) {
        errorConfirmPswd.classList.remove('hide')
    } else {
        errorConfirmPswd.classList.add('hide')
    }
}
confirmPswdInput.addEventListener('input', function() {
    if (matchPassword(password, confirmPswdInput)) {
        errorConfirmPswd.classList.add('hide')
    } else {
        errorConfirmPswd.classList.remove('hide')
    }
})
confirmPswdInput.onblur = function() {
    if (!matchPassword(password, confirmPswdInput)) {
        confirmPswdInput.classList.add('redBorder')
    } else {
        confirmPswdInput.classList.remove('redBorder')
    }
    errorConfirmPswd.classList.add('hide')
}
}

const renderForm = () => {
    let messages = []
    //form
    const form = new SuperElement(containerDiv, 'form', '', 'form', 'form').element
    form.action = '/'
    form.method = 'GET'

    //render inputs and labels

    renderName()
    renderEmail()
    renderAddress()
    renderPassword()
    let pswdValid 
    let nameIsValid  
    let emailIsValid 
    //submit button
    const submitBtn = new SuperElement(form, 'button', 'Submit', 'formBtn', 'submitBtn').element
    if (messages.length > 0) {
    checkForContent(nameInput, nameIsValid)
    }
    submitBtn.addEventListener('click', (e) => {
        messages.length = 0
        const prevError = document.getElementById('sbmtError')
        if (prevError) {
            prevError.remove()
        }

        const errorDiv = new SuperElement(form, 'div', '', 'errorDiv', 'sbmtError').element
        nameIsValid = checkForContent(nameInput, nameIsValid)
        emailIsValid = checkForContent(emailInput, emailIsValid)
        const passwordInput = document.getElementById('passwordInput')
        pswdValid = checkRequired(passwordInput)
        console.log(checkRequired(passwordInput))
        //check name
      console.log(nameIsValid, emailIsValid, pswdValid)
        if (!nameIsValid) {
            messages.push('Name field empty')
        }
        if (!emailIsValid) {
            messages.push('Email field empty')
        }    
        if (!pswdValid) {
            messages.push('Password or confirm is not valid')
        }
        //check email
        if (messages.length > 0 ) {
            e.preventDefault()
            errorDiv.innerText = messages.join(', ')
        }
        console.log(messages);
    })
}

function hideTxt(el, requiredChar) {
    if (el) {
        if (requiredChar) {
            el.classList.add('hide')
        } else {
            el.classList.remove('hide')
        }        
    }    
}

const checkOnBlur = (input) => {
    if (input.value == '') {
        input.classList.add('redBorder')
    } else {
        input.classList.remove('redBorder')
    }
    
}

function checkRequired(password) {   

    let minLengthTxt = document.getElementById('minLength')
    let minNumberTxt = document.getElementById('number')
    let capTxt = document.getElementById('uppercase')
    let lowerTxt = document.getElementById('lowercase')
    let spclCharTxt = document.getElementById('specialCh')

    let minLength 
    let minNumber
    let uppercase
    let lowercase
    let specialCh

    if(password.value.length >= 8){
        minLength = true
    } else {
        minLength = false       
    }
    const numbers = /[0-9]/g;    
    if (password.value.match(numbers)){
        minNumber = true
    } else {
        minNumber = false
    } 
    const capitalLetters = /[A-Z]/g;    
    if(password.value.match(capitalLetters)) {
        uppercase = true
    } else {
        uppercase = false
    }
    const letters = /[a-z]/g;    
    if (password.value.match(letters)){
        lowercase = true
    } else {
        lowercase = false
    }
    const characters = /[!@#$%^&*]/    
    if (password.value.match(characters)) {
        specialCh = true    
    } else {
        specialCh = false
    }
    
    hideTxt(minLengthTxt, minLength)
    hideTxt(minNumberTxt, minNumber)
    hideTxt(capTxt, uppercase)
    hideTxt(lowerTxt, lowercase)
    hideTxt(spclCharTxt, specialCh)
    
    if (minLength && minNumber && uppercase && lowercase && specialCh) {
        pswdValid = true
    } else {
        pswdValid = false
    }
    console.log(minLength, minNumber, uppercase, lowercase, specialCh, 'All Req ', pswdValid)
    return pswdValid
 
}



function matchPassword(password, confirmPwd) {    
    let isMatch
    if(password.value == confirmPwd.value && password.value != ''){
        isMatch = true        
    }
    if(password.value != confirmPwd.value){
        isMatch = false
    }
    return isMatch
}



renderForm()

