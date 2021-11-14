// import throttle from 'lodash.throttle';
// const input = document.querySelector('.feedback-form');
// let inputForm = {};

// // const timeSecondTrottle = throttle(initForm, 8000);
// initForm()


// input.addEventListener('submit', evt => {
//     evt.preventDefault();
//     evt.currentTarget.reset();

//     const formDate = new FormData(input)
//     formDate.forEach((value, name) => console.log(value, name));
    
    
//     localStorage.removeItem("feedback-form-state");
//     console.log(inputForm)
    
// });


// input.addEventListener('change', evt => {
//     // console.log(evt.target.name)
//     // console.log(evt.target.value)
//     inputForm[evt.target.name] = evt.target.value;
//     // console.log(inputForm)
//     localStorage.setItem("feedback-form-state", JSON.stringify(inputForm));
 
// })
 
// function initForm() {
//     let pullAutForm = localStorage.getItem("feedback-form-state")
//     if (pullAutForm) {
//         pullAutForm = JSON.parse(pullAutForm);
//         // console.log(pullAutForm)
//         Object.entries(pullAutForm).forEach(([name, value]) => {
//             inputForm[name] = value;
//             input.elements[name].value = value;
//      })
//     }
    
// }


////////////////////////
import throttle from 'lodash.throttle';
const input = document.querySelector('.feedback-form');
let inputForm = {};

// const timeSecondTrottle = throttle(initForm, 8000);
initForm()
input.addEventListener('submit', evt => {
    evt.preventDefault();
    evt.currentTarget.reset();

    const formDate = new FormData(input)
    formDate.forEach((value, name) => console.log(value, name));
    
    
    localStorage.removeItem("feedback-form-state");
    console.log(inputForm)
    
});
input.addEventListener('change', throttle(evt => {
    // console.log(evt.target.name)
    // console.log(evt.target.value)
    inputForm[evt.target.name] = evt.target.value;
    // console.log(inputForm)
    localStorage.setItem("feedback-form-state", JSON.stringify(inputForm));
 
},500))
 
function initForm() {
    let pullAutForm = localStorage.getItem("feedback-form-state")
    if (pullAutForm) {
        pullAutForm = JSON.parse(pullAutForm);
        // console.log(pullAutForm)
        Object.entries(pullAutForm).forEach(([name, value]) => {
            inputForm[name] = value;
            input.elements[name].value = value;
     })
    }}