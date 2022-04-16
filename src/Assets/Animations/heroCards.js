export function hc (hoverdCard){
    // (A) SELECTING CARDS
    const first  = document.getElementById("firstCard");  // FIRST CARD
    const second = document.getElementById("secondCard"); // SECOND CARD
    const third  = document.getElementById("thirdCard");  // THIRD CARD

    // (B) THE CASES 

        // (B , 1) IF THE MOUSE IS OUT 
   if(hoverdCard === -1){
    first.classList.remove("hovered-card"); 
    second.classList.remove("hovered-card");
    third.classList.remove("hovered-card");
    first.classList.remove("hover-invert"); 
    second.classList.remove("hover-invert");
    third.classList.remove("hover-invert");


    }

    // (B , 2) IF THE MOUSE HOVERD 

   if(hoverdCard === 1){
        first.classList.add("hovered-card"); // FIRST CARD HOVERD
        second.classList.add("hover-invert");
        third.classList.add("hover-invert");
    }
    if(hoverdCard === 2){
        first.classList.add("hover-invert");
        second.classList.add("hovered-card"); // SECOND CARD HOVERD
        third.classList.add("hover-invert");

    }
    if(hoverdCard === 3){
        first.classList.add("hover-invert");
        second.classList.add("hover-invert");
        third.classList.add("hovered-card"); // THIRD CARD HOVERD

    }
    
}