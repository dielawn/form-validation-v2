
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

//form
const form = new SuperElement(containerDiv, 'form', '', 'form', 'form').element
form.action = '/'
form.method = 'GET'

//name input
const nameDiv = new SuperElement(form, 'div', '', '', '').element
const nameLabel = new SuperElement(nameDiv, 'label', 'Name: ', 'formLabel', 'nameLabel').element
nameLabel.htmlFor = 'name'
const nameInput = new SuperElement(nameDiv, 'input', '', 'formInput', 'nameInput').element
nameInput.name = 'name'
nameInput.type = 'text'
nameInput.setAttribute('required', 'true')
nameInput.placeholder = 'Full Name'

//email
const emailDiv = new SuperElement(form, 'div', '', '', '').element
const emailLabel = new SuperElement(emailDiv, 'label', 'Email: ', 'formLabel', 'emailLabel').element
emailLabel.htmlFor = 'email'
const emailInput = new SuperElement(emailDiv, 'input', '', 'formInput', 'emailInput').element
emailInput.name = 'email'
emailInput.type = 'email'
emailInput.setAttribute('required', 'true')
emailInput.placeholder = 'Email'

//address
const addressDiv = new SuperElement(form, 'div', '', '', '').element
const stAddressLabel = new SuperElement(addressDiv, 'label', 'Street Address', 'formLabel', 'stAddressLabel').element
stAddressLabel.htmlFor = 'stAddress'
const stAddressInput = new SuperElement(addressDiv, 'input', '', 'formInput', 'stAddressInput').element
stAddressInput.name = 'stAddress'
stAddressInput.type = 'text'
stAddressInput.placeholder = '123 Example St.'
//city
const cityLabel = new SuperElement(addressDiv, 'label', 'City: ', 'formLabel', 'cityLabel').element
cityLabel.htmlFor = 'city'
const cityInput = new SuperElement(addressDiv, 'input', '', 'formInput', 'cityInput').element
cityInput.name = 'city'
cityInput.type = 'text'
cityInput.placeholder = 'Atlantis'
//state
const stateLabel = new SuperElement(addressDiv, 'label', 'State: ', 'formLabel', 'stateLabel').element
stateLabel.htmlFor = 'state'
const stateInput = new SuperElement(addressDiv, 'input', '', 'formInput', 'stateInput').element
stateInput.name = 'state'
stateInput.type = 'text'
stateInput.placeholder = 'State'
//zip
const zipLabel = new SuperElement(addressDiv, 'label', 'Zip Code: ', 'formLabel', 'zipLabel').element
zipLabel.htmlFor = 'zip'
const zipInput = new SuperElement(addressDiv, 'input', '', 'formInput', 'zipInput').element
zipInput.name = 'zip'
zipInput.type = 'text'
zipInput.placeholder = '90210'
//password
const passwordDiv = new SuperElement(form, 'div', '', '', '').element
const passwordLabel = new SuperElement(passwordDiv, 'label', 'Password: ', 'formInput', 'passwordInput').element
passwordLabel.htmlFor = 'password'
const passwordInput = new SuperElement(passwordDiv, 'input', '', 'formInput', 'passwordInput').element
passwordInput.name = 'password'
passwordInput.type = 'password'
passwordInput.placeholder = 'Password'
//password confirmation
const confirmPswdLabel = new SuperElement(passwordDiv, 'label', 'Confirm password: ', 'formLabel', 'confirmPswdLabel').element
confirmPswdLabel.htmlFor = 'confirmPswd'
const confirmPswdInput = new SuperElement(passwordDiv, 'input', '', 'formInput', 'confirmPswdInput').element
confirmPswdInput.name = 'confirmPswd'
confirmPswdInput.type = 'password'
confirmPswdInput.placeholder = 'Confirm password'
//submit button
const submitBtn = new SuperElement(form, 'button', 'Submit', 'formBtn', 'submitBtn').element

submitBtn.addEventListener('click', (e) => {
    let message = []
    if (nameInput.value === '' || nameInput.value == null) {
        message.push('Name is required')
    }
    if (message.length > 0 ) {
        e.preventDefault()
        errorDiv.innerText = message.join(', ')
    }
})