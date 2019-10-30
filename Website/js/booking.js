var btnDate = document.getElementById("submitDate");
btnDate.addEventListener("click", setDate);

function setDate(e){
    e.preventDefault();
    var checkIn = document.getElementById('checkin').value;
    var checkOut = document.getElementById('checkout').value;
    if (checkIn != "" && checkOut !== "") {
        var hidden = document.getElementsByClassName('hide')[0];
        var shown = document.getElementsByClassName('show')[0];
        console.log(hidden);
        hidden.className = 'show';
        shown.className = 'hide';
        var welcomeText = document.createElement('p');
        welcomeText.innerText = "Available hotels for the dates " + checkIn + " - " + checkOut + ":";
        document.getElementById('WelcomeText').append(welcomeText);
    } else{
        alert("Please choose check-in and check-out dates");
    }
    

}

