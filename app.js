var inputtext = document.querySelector("#input");
var outputtext = document.querySelector("#output");
var submitbtn = document.querySelector("#submit");


function errorHandler(error){
    console.log("Error", error);
    alert("Server not responding");
}

function submitbuttonHandler() {
    
    var minionurl = "https://api.funtranslations.com/translate/.json";
    var final_url = minionurl + "?text=" + inputtext.value;

    fetch(final_url)
    .then(response => response.json())
    .then(json => {
        var translation = json.contents.translated;
        outputtext.innerText = translation;

    })

    .catch(errorHandler);
}

submitbtn.addEventListener("click", submitbuttonHandler);

//var outputText = document.querySelector("#output-txt");