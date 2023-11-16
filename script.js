let homePts = document.getElementById('home-pts');
let homeCount = 0;
let guestPts = document.getElementById('guest-pts');
let guestCount = 0;


var maxClicksp2 = 10; 
var maxClicksp1 = 10;
function player1() {
    
    if (maxClicksp1>0) {
        homeCount += Math.floor(Math.random() * 10) + 1;
        homePts.innerText = homeCount;
        console.log(homeCount)
        maxClicksp1--;
    }
    //declareWinner();
    console.log(maxClicksp1);
    if(maxClicksp2==0 && maxClicksp1==0){
        declareWinner();
    }
    
}

function player2() {
    
    if (maxClicksp2>0) {
        guestCount += Math.floor(Math.random() * 10) + 1;
        console.log(guestCount)
        guestPts.innerText = guestCount;
        maxClicksp2--;
    }
    if(maxClicksp2==0 && maxClicksp1==0){
        declareWinner();
    }
    console.log(maxClicksp2);

   
}

function declareWinner() {
   
    
    if (homeCount > guestCount) {
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Player-1 is Winner",
            showConfirmButton: false,
            timer: 2500
        });
    } else if (guestCount > homeCount) {
                Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Player-2 is Winner",
                showConfirmButton: false,
                timer: 2500
                });
    }
    else{
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No Result!",
        
        });

    }

  
    
}
