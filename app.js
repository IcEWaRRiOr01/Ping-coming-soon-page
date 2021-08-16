document.getElementById('form').addEventListener('submit', validation);

function validation() {
    event.preventDefault();
    let email = document.forms['form']['email'].value;
    let at = email.indexOf('@');
    let point = email.lastIndexOf('.');
    let non = document.getElementById('novalid');
    let empty = document.getElementById('empty');
    let emailBorder = document.getElementById('email');

    // if (at < 1 || point < (at + 2) || (point + 2) >= email.length) {
    //     non.style.display = 'block';
    //     emailBorder.style.borderColor = 'red';
    //     return false;
    // } else if (email == null || email == ) {
    //     empty.style.display = 'block';
    //     emailBorder.style.borderColor = 'red';
    //     return false;

    if (email == null || email == '') {
        non.style.display = 'none';
        empty.style.display = 'block';
        emailBorder.style.borderColor = 'red';
        return false;
    } else if (at < 1 || point < (at + 2) || (point + 2) >= email.length) {
        empty.style.display = 'none';
        non.style.display = 'block';
        emailBorder.style.borderColor = 'red';
        return false;
    } else {
        non.style.display = 'none';
        emailBorder.style.borderColor = '#c2d3ff';
        return false;
    }
}