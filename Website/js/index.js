console.log("index.js has loaded");

var checkBtns = document.getElementsByClassName('check');
for(var i = 0; i < checkBtns.length; i++){
    checkBtns[i].addEventListener("click", showResults);
}

function showResults(e){
    e.preventDefault();
    var checkIn = document.getElementById('date-from-top').value;
    var checkOut = document.getElementById('date-to-top').value;
    if (checkIn != "" && checkOut !== "") {
        window.location.replace("search_result.html");
        console.log('we are here');
    } else{
        alert("Please choose check-in and check-out dates");
    }
}

var Bookbtns = document.getElementsByClassName('book');
for(var i = 0; i < Bookbtns.length; i++){
    checkBtns[i].addEventListener("click", redirectToBook);
}

function redirectToBook(e){
    e.preventDefault();
    window.location.replace("booking.html");
}
