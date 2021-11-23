import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const formData = {};
const LOCALSTORAGE_KEY_FORM_DATA = "feedback-form-state";
initForm()

form.addEventListener('submit', evt => {
    evt.preventDefault();
    if (!form.elements.email.value.trim() || !form.elements.message.value.trim()) {
        return alert(`Please enter the email and message fields!`);
    }
    console.log(formData)
   localStorage.removeItem(LOCALSTORAGE_KEY_FORM_DATA);
    
    evt.currentTarget.reset();
});

form.addEventListener('input', throttle( evt => {
    console.log(form.elements.email.value)
    
    if (form.elements.email.value || form.elements.message.value) {
        formData.email = form.elements.email.value;
        formData.message = form.elements.message.value;
    }
    
    localStorage.setItem(LOCALSTORAGE_KEY_FORM_DATA, JSON.stringify(formData));
 
}, 500))
 
function initForm() {
    if (localStorage.getItem(LOCALSTORAGE_KEY_FORM_DATA)) {
        let pullAutForm = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_FORM_DATA));
        form.elements.email.value = pullAutForm.email;
        form.elements.message.value = pullAutForm.message;
    };
};


