// Responsive Navigation - Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))



// Form Validation
const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const messageEl = document.querySelector('#message');
const form = document.querySelector('#contact-form');

//check name field
const checkName = () => {

  let valid = false;

  const min = 3,
      max = 25;

  const contactname = nameEl.value.trim();

  if (!isRequired(contactname)) {
      showError(nameEl, 'Name cannot be blank.');
  } else if (!isBetween(contactname.length, min, max)) {
      showError(nameEl, `Name must be between ${min} and ${max} characters.`)
  } else {
      showSuccess(nameEl);
      valid = true;
  }
  return valid;
};

// check email field
const checkEmail = () => {

  let valid = false;
  const email = emailEl.value.trim();

  if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.')
  } else if (!isEmailValid(email)){
    showError(emailEl, 'Email is not valid.')
  } else {
    showSuccess(emailEl);
    valid = true;
  }

  return valid;
};

//check message field
const checkMessageContent = () => {

  let valid = false;
  const messageContent = messageEl.value.trim();

  if (!isRequired(messageContent)) {
    showError(messageEl, 'This field cannot be blank.')
  } else {
    showSuccess(emailEl);
    valid = true;
  }

  return valid;
};

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}

form.addEventListener('submit', function (e) {
  //prevent the form from submitting
  e.preventDefault();

  //validate fields
  let isContactNameValid = checkName(),
      isEmailValid = checkEmail(),
      isMessageContentValid = checkMessageContent();

  let isFormValid = isContactNameValid &&
      isEmailValid &&
      isMessageContentValid;

  // submit to the server if the form is valid
  if (isFormValid) {

  }

});

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
  switch (e.target.id) {
    case 'name':
      checkName();
      break;
    case 'email':
        checkEmail();
        break;
    case 'message':
      checkMessageContent();
      break;
  }
}));




