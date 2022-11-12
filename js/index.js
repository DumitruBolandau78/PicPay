function asideOpen() {
    document.getElementById("aside").style.left = '0';
    document.getElementById("i1").style.display = 'none';
   document.getElementById("i2").style.display = 'block';
}

function asideClose() {
    document.getElementById("aside").style.left = '-100%';
    document.getElementById("i2").style.display = 'none';
    document.getElementById("i1").style.display = 'block';
}

function modalCreditCardOpen() {
    document.getElementById('modal-credit-card').style.position = 'fixed';
    document.getElementById('body').style.overflowY = 'hidden';
    document.getElementById('modal-credit-card').style.display = 'flex';
    document.getElementById('modal-credit-card').style.justifyContent = 'center';
    document.getElementById('modal-credit-card').style.alignItems = 'center';
    document.getElementById("i3").style.display = 'block';
}

function modalCreditCardClose() {
    document.getElementById("i3").style.display = 'none';
    document.getElementById('body').style.overflowY = 'scroll';
    document.getElementById("modal-credit-card").style.display = 'none';
}

function submit(){
    let fullName = document.getElementById('fullName').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (fullName === '' || number === '' || email === '' || message === ''){
        alert('Please fill out the form!')
    }
    else {
        alert('Thank you for your request')
        document.getElementById('fullName').value = '';
        document.getElementById('number').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        document.getElementById("i3").style.display = 'none';
        document.getElementById('body').style.overflowY = 'scroll';
        document.getElementById("modal-credit-card").style.display = 'none';
        document.getElementById('MasterCard').selected = 'selected';
    }
}