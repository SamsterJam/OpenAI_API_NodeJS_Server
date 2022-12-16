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
var firstSlider = document.getElementById("selected-temp");
var output  = document.getElementById("selected-temp-value");
output.innerHTML = firstSlider.value;
firstSlider.oninput = function() {
    output.innerHTML = firstSlider.value;
}