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



//temp api call
function apiCallGetInfo(){
    var model = document.getElementById("selected-model");
    var modelValue = model.value;
    var modelChoice = model.options[model.selectedIndex].text

    var temp = document.getElementById("selected-temp").value;
    var length = document.getElementById("selected-length").value;
    var frequency = document.getElementById("selected-frequency").value;
    var presence = document.getElementById("selected-presence").value;
    var prompt = document.getElementById("prompt");

    prompt.value+=modelChoice+temp.toString();
}