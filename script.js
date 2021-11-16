
var change_username = document.querySelector("#username")

function edit_profile(){
    change_username.innerText = "Melody Angus Hamilton";
    console.log("melody");
}



var removeTodd = document.querySelector("#Todd")
var removePhil = document.querySelector("#Phil")
var connections = document.querySelector("#connections")
var currentConnections = 418;
var connectionRequests = document.querySelector("#connectionRequests")
var currentRequests = 2;

function accept_Todd(){
    removeTodd.remove("#Todd");
    currentRequests--;
    console.log(currentRequests);
    connectionRequests.innerText = currentRequests;
    currentConnections++;
    connections.innerText = currentConnections;

}

function deny_Todd(){
    removeTodd.remove("#Todd");
    currentRequests--;
    console.log(currentRequests);
    connectionRequests.innerText = currentRequests;

}

function accept_Phil(){
    removePhil.remove("#Phil")
    currentRequests--;
    console.log(currentRequests);
    connectionRequests.innerText = currentRequests;
    currentConnections++;
    connections.innerText = currentConnections;
}

function deny_Phil(){
    removePhil.remove("#Phil")
    currentRequests--;
    console.log(currentRequests);
    connectionRequests.innerText = currentRequests;
}