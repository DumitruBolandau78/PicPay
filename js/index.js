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