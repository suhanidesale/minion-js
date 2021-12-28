var txtInput = document.querySelector("#txt-Input");
var btnConvert = document.querySelector("#btn-Convert");
var txtOutput = document.querySelector("#txt-Output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(inputText){
    return serverURL + "?text=" + inputText
}

function errorHandler(error) {
    console.log("error, bad request", error)
    alert("No response from server, try again")
}

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var convertedText = json.contents.translated;
        txtOutput.innerText = convertedText;
    })
    .catch(errorHandler)
};

btnConvert.addEventListener("click", clickHandler);