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
    let query = window.matchMedia("(max-width: 600px)");

    let fullName = document.getElementById('fullName').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (!query.matches){
        if (fullName === '' || number === '' || email === '' || message === ''){
            alert('Please fill out the form!')
        }
        else {
            document.getElementById('fullName').value = '';
            document.getElementById('number').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            document.getElementById("i3").style.display = 'none';
            document.getElementById('body').style.overflowY = 'scroll';
            document.getElementById("modal-credit-card").style.display = 'none';
            document.getElementById('MasterCard').selected = 'selected';
            document.getElementById('modal-submit').style.right = '0';
            setTimeout(() => {
                document.getElementById('modal-submit').style.right = '-100%';
            }, 6000);
        }
    }
    else {
        if (fullName === '' || number === '' || email === '' || message === ''){
            alert('Please fill out the form!')
        }
        else {
            alert('Thank you for your request');
            document.getElementById('fullName').value = '';
            document.getElementById('number').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            document.getElementById('MasterCard').selected = 'selected';
        }
    }    
}

function modalSubmitClose(){
    document.getElementById('modal-submit').style.right = '-100%';
}

let mod = true;

function darkMode() {
    if (mod){
        document.getElementById('mod').href = './css/style_darkmode.css';
        mod = false;
    }
    else {
        document.getElementById('mod').href = './css/style.css';
        mod = true;
    }
}