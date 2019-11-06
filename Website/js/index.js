
// Used in Index.html ////////////////////////////////

$("#check-button-top").click(showResults);
$("#check-button-bottom").click(showResults);

function showResults(e){
    e.preventDefault();
    // Was it the top form or the bottom form button that was clicked?
    let whichForm = (this.id == "check-button-top") ? "top" : "bottom";

    let checkIn = $("#date-from-" + whichForm).val();
    let checkOut = $("#date-to-" + whichForm).val();
    
    if ( checkIn && checkOut ) { // Validation Pass
        window.location.href = "search_result.html"; // go to page
    } else { // Validation Fail
        alert("Please choose check-in and check-out dates");
    }
}


// Used in Booking.html ////////////////////////////////

let Bookbtns = $(".book");
for(let i=0 ; i<Bookbtns.length ; i++){
    Bookbtns[i].addEventListener("click", redirectToBook);
}

function redirectToBook(e){
    e.preventDefault();
    window.location.href = "booking.html";
}