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