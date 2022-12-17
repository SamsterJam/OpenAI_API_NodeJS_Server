function toggleShowPass(){
    var inpass = document.getElementById("api-key");
    if (inpass.type === "password") {
        inpass.type = "text";
        document.getElementById("eye-icon").className = "fa-regular fa-eye";
        document.getElementById("view-button").style = "background:rgba(255, 255, 255, 0.01)";
    } else {
        inpass.type = "password";
        document.getElementById("eye-icon").className = "fa-regular fa-eye-slash";
        document.getElementById("view-button").style = "background:rgba(255, 255, 255, 0.05)";
    }
}

//Temerature Slider
var slider1 = document.getElementById("selected-temp");
var output1  = document.getElementById("selected-temp-value");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
    output1.innerHTML = slider1.value;
}

//Length Slider
var slider2 = document.getElementById("selected-length");
var output2  = document.getElementById("selected-length-value");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
    output2.innerHTML = slider2.value;
}

//Freq Slider
var slider3 = document.getElementById("selected-frequency");
var output3  = document.getElementById("selected-frequency-value");
output3.innerHTML = slider3.value;
slider3.oninput = function() {
    output3.innerHTML = slider3.value;
}

//Pres Slider
var slider4 = document.getElementById("selected-presence");
var output4  = document.getElementById("selected-presence-value");
output4.innerHTML = slider4.value;
slider4.oninput = function() {
    output4.innerHTML = slider4.value;
}


function apiCallTestSubmit(){
    document.getElementById("prompt").disabled = true;
    document.getElementById("prompt").style="background:rgba(100, 100, 100, 0.1);";
    document.getElementsByClassName("lds-facebook")[0].style="visibility: visible";

    // Get the values of the input fields
    var model = document.getElementById("selected-model");
    var modelValue = model.value;
    var modelChoice = model.options[model.selectedIndex].text

    var temp = document.getElementById("selected-temp").value;
    var length = document.getElementById("selected-length").value;
    var frequency = document.getElementById("selected-frequency").value;
    var presence = document.getElementById("selected-presence").value;
    var prompt = document.getElementById("prompt").value.toString();
    var apiKey = document.getElementById("api-key").value.toString();
    // Get the values of the other input fields

    fetch('/apiCall', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "model": modelChoice, "prompt": prompt, "temperature": parseFloat(temp), "length": parseInt(length), "frequency": parseFloat(frequency), "presence": parseFloat(presence), "apiKey": apiKey})
    })
    .then(response => response.json())
    .then(response => updateWithData(response))

};

function updateWithData(response){
    if(response.choices[0].text == ''){
        document.getElementById("prompt").value += '[NO COMPLEATION]';
        document.getElementById("prompt").style="background:rgba(255, 100, 100, 0.1);";

    }else{
        document.getElementById("prompt").value += response.choices[0].text;
        document.getElementById("prompt").style="background:rgba(255, 255, 255, 0.1);";
    }

    document.getElementById("prompt").disabled = false;
    document.getElementsByClassName("lds-facebook")[0].style="visibility: hidden";
}









//keep API key
function parseQuery(str) {
    //Remove '?' from beginning.
    str = str.substring(1) 
    //split the string into key value pairs
    var pairs = str.split("&")
    //convert them into an object
    return pairs.reduce(function(map, pair) {
        console.log(pair)
        var kv = pair.split("=")
        var key = kv[0]
        var value = kv[1]
        map[key] = value
        return map
    },{})
}


var query = window.location.search
var keyInfo = parseQuery(query);

document.getElementById('api-key').value = keyInfo.APIkeyid;