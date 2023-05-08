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

//---------------------------------------------------------------

var menu = 0;

function menuDrop() {
    menuD = document.getElementById('headerDrop');
    if (menu == 0) {
        menuD.style.top = '0';
        menu = 1;
    } 
    else {
        menuD.style.top = '-110vh';
        menu = 0;
    }
}
function amagarMenu(){
    menuD = document.getElementById('headerDrop');
    menuD.style.display = 'none';
}

//---------------------------------------------------------------
