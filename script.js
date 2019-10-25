function whoWinner(){
    let box1 = document.getElementById("box1"),
     box2 = document.getElementById("box2"),
     box3 = document.getElementById("box3"),
     box4 = document.getElementById("box4"),
     box5 = document.getElementById("box5"),
     box6 = document.getElementById("box6"),
     box7 = document.getElementById("box7"),
     box8 = document.getElementById("box8"),
     box9 = document.getElementById("box9");
    if(box1.innerHTML !=="" && box1.innerHTML === box2.innerHTML && box1.innerHTML=== box3.innerHTML);
    else if(box4.innerHTML !=="" && box4.innerHTML === box5.innerHTML && box4.innerHTML=== box6.innerHTML);
    else if(box7.innerHTML !=="" && box7.innerHTML === box8.innerHTML && box1.innerHTML=== box9.innerHTML);
    else if(box1.innerHTML !=="" && box1.innerHTML === box4.innerHTML && box4.innerHTML=== box7.innerHTML);
    else if(box2.innerHTML !=="" && box2.innerHTML === box5.innerHTML && box2.innerHTML=== box8.innerHTML);
    else if(box3.innerHTML !=="" && box3.innerHTML === box6.innerHTML && box3.innerHTML=== box9.innerHTML);
    else if(box1.innerHTML !=="" && box1.innerHTML === box5.innerHTML && box1.innerHTML=== box9.innerHTML);
    else if(box3.innerHTML !=="" && box3.innerHTML === box5.innerHTML && box3.innerHTML=== box7.innerHTML);
}
let boxes = document.querySelectorAll("#main div"), X_or_O = 0;
for(let i = 0; i < boxes.length; i++){
    boxes[i].onclick = function(){
        if(X_or_O%2 === 0){
            this.innerHTML = "X";
            whoWinner();
        X_or_O += 1;
    }else{
        this.innerHTML = "O";
        whoWinner();
        X_or_O+=1;
    }

}
}