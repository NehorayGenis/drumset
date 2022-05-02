var allBtn =document.querySelectorAll(".drum");
document.addEventListener('keydown', keyboardClick);

for(var i =0 ; i< allBtn.length; i++){
    allBtn[i].addEventListener("click",mouseClick);
}
// detecting keyboard press and sending to function
function keyboardClick(e){
    var pressedChr=e.key;
    console.log(pressedChr);
    makeSound(pressedChr);
    changeStyle(pressedChr);
}
// detecting button press and sending to function

function mouseClick() {
    var buttomInnerHtml =this.innerHTML;
    changeStyle(buttomInnerHtml);
    makeSound(buttomInnerHtml);
    
}

function makeSound(chr){
    switch(chr){
        case "w":
        let audioW=new Audio('sounds/tom-1.mp3');
        audioW.play();
        break;
        case "a":
        let audioA=new Audio('sounds/tom-2.mp3');
        audioA.play();
        break;
        case "s":
        let audioS=new Audio('sounds/tom-3.mp3');
        audioS.play();
        break;
        case "d":
        let audioD=new Audio('sounds/tom-4.mp3');
        audioD.play();
        break;
        case "j":
        let audioJ=new Audio('sounds/snare.mp3');
        audioJ.play();
        break;
        case "k":
        let audioK=new Audio('sounds/crash.mp3'); 
        audioK.play();
        break;
        case "l":
        let audioL=new Audio('sounds/kick-bass.mp3');
        audioL.play();
        break;
        default:
        console.log(chr);    
    }
}

function changeStyle(stl){
    var currentKey = document.querySelector("." + stl);
    console.log(currentKey);
    currentKey.classList.add("pressed");
    setTimeout(function(){
        currentKey.classList.remove("pressed");
    },100)



}




