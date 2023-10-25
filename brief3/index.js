const menu = document.getElementById('menu')
const icone = document.getElementById('icone')

function showMenu() {
    menu.setAttribute('class','showMenu')
    icone.setAttribute('onclick','hideMenu()')
}
function hideMenu(){
    menu.setAttribute('class','')
    icone.setAttribute('onclick','showMenu()')
}