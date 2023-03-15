let position = window.pageYOffset;

window.onscroll = function() {
    let scroll = window.pageYOffset;
    if(position >= scroll) {
        document.getElementById('navbar').style.top = '0';
    }
    else {
        document.getElementById('navbar').style.top = '-100px';
    }
    position = scroll;
}