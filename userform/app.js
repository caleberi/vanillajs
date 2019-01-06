//form blur event listeners
let $ =  document;



validateName = ()=>{
  const name =$.getElementById('name');
  const regex = /^[a-zA-Z]{2,10}$/;
  if (!regex.test(name.value)) {
    name.classList.add('is-invalid');
  }else{
    name.classList.remove('is-invalid');
  }
}


validateZip = ()=>{
  const zip =$.getElementById('zip');
  const regex = /^[0-9]{4}(-[0-9]{4})?$/;
  if (!regex.test(zip.value)) {
    zip.classList.add('is-invalid');
  }else{
    zip.classList.remove('is-invalid');
  }
}

validateEmail = ()=>{
  const email =$.getElementById('email');
  const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  if (!regex.test(email.value)) {
    email.classList.add('is-invalid');
  }else{
    email.classList.remove('is-invalid');
  }
}

validatePhone = ()=>{
  const phone =$.getElementById('phone');
  const regex = /^\(?\d{3}\)?[-]?\d{3}[-]?\d{3}[-]?\d{4}$/;
  if (!regex.test(phone.value)) {
    phone.classList.add('is-invalid');
  }else{
    phone.classList.remove('is-invalid');
  }
}


$.getElementById('name').addEventListener('blur',validateName)
$.getElementById('zip').addEventListener('blur',validateZip)
$.getElementById('email').addEventListener('blur',validateEmail)
$.getElementById('phone').addEventListener('blur',validatePhone)
 
