let whatsapp = document.getElementById('whatsapp');
let linkedin = document.getElementById('linkedin');
let coloring = document.getElementById('coloring');
let container = document.getElementById('container')

let colorToggle=true;

function whatsappFun(){
    alert('you are redirecting to Whatsapp')
}
function linkFun(){
    alert('you are redirecting to Linkedin')
}
function colorChange(){
    if(!colorToggle){
        container.style.backgroundColor='red';
        colorToggle = true;
    }else{
        container.style.backgroundColor='white';
        colorToggle=false;
        coloring.innerHTML = 'Changed Now!'
    }
}

