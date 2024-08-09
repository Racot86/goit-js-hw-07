let form = document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
    let email = form.elements['email'].value;
    let password = form.elements['password'].value;
    if (email.length > 0 && password.length > 0) {
        form.submit();
        form.reset();
    } else {
        e.preventDefault();
        alert('All form fields must be filled in');
    }
});
