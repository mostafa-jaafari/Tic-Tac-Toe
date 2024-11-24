let ResetBtn = document.getElementById("Reset-Btn");
let Title = document.querySelector(".Top-Bar");
let Squares = [];
let Turn = "X";


function GameWinner(num1,num2,num3){
    document.getElementById("item" + num1).style.backgroundColor = "#000";
    document.getElementById("item" + num2).style.backgroundColor = "#000";
    document.getElementById("item" + num3).style.backgroundColor = "#000";
    Title.innerHTML = Squares[num3] + " Is The Winner";
    setInterval(function(){
        Title.innerHTML += '.';
    },1500)
    setTimeout(function(){
        window.location.reload();
    },5500)

}

function winner(){
    for(let i = 1; i < 10 ; i++){
        Squares[i] = document.getElementById("item" + i).innerHTML;
    }
    if(Squares[1] === Squares[2] && Squares[2] === Squares[3] && Squares[2] != ""){
        GameWinner(1,2,3);
    }else if(Squares[4] === Squares[5] && Squares[5] === Squares[6] && Squares[5] != ""){
        GameWinner(4,5,6);
    }else if(Squares[7] === Squares[8] && Squares[8] === Squares[9] && Squares[8] != ""){
        GameWinner(7,8,9);
    }

    // Verticaly ----------------

    if(Squares[1] === Squares[4] && Squares[4] === Squares[7] && Squares[4] != ""){
        GameWinner(1,4,7);
    }else if(Squares[2] === Squares[5] && Squares[5] === Squares[8] && Squares[5] != ""){
        GameWinner(2,5,8);
    }else if(Squares[3] === Squares[6] && Squares[6] === Squares[9] && Squares[6] != ""){
        GameWinner(3,6,9);
    }

    // X --------------------

    if(Squares[1] === Squares[5] && Squares[5] === Squares[9] && Squares[5] != ""){
        GameWinner(1,5,9);
       
    }else if(Squares[3] === Squares[5] && Squares[5] === Squares[7] && Squares[5] != ""){
        GameWinner(3,5,7);
    }
    
}

function Game(id){
    let item = document.getElementById(id);
    if(item.innerHTML !== ""){
        return;
    }
    if(Turn === "X"){
        item.innerHTML = "X";
        Turn = "O";
        Title.innerHTML = "Turn of : O";
        ResetBtn.style.display = "block";
    }else if(Turn === "O"){
        item.innerHTML = "O";
        Turn = "X";
        Title.innerHTML = "Turn of : X";
    }
    winner();
}

function Reset(){
    ResetBtn.style.display = "none";
    window.location.reload();
}
