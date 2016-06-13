var vid = document.getElementById("bgvid");
var Convert = document.getElementById("Convert");

Convert.addEventListener("click", function () {
    setup();
});

function setup() {
    if (info.current === 'C') {
        document.getElementById("temp").innerHTML = "Temperature: " + info.temp_F.toFixed(2) + " F";
        document.getElementById("temp_min").innerHTML = "Min: " + info.min_F.toFixed(2) + " F";
        document.getElementById("temp_max").innerHTML = "Max: " + info.max_F.toFixed(2) + " F";
        info.current = 'F';
    } else if (info.current === 'F') {
        document.getElementById("temp").innerHTML = "Temperature: " + info.temp_K.toFixed(2) + " K";
        document.getElementById("temp_min").innerHTML = "Min: " + info.min_K.toFixed(2) + " K";
        document.getElementById("temp_max").innerHTML = "Max: " + info.max_K.toFixed(2) + " K";
        info.current = 'K';
    } else if (info.current === 'K') {
        document.getElementById("temp").innerHTML = "Temperature: " + info.temp_C.toFixed(2) + " C";
        document.getElementById("temp_min").innerHTML = "Min: " + info.min_C.toFixed(2) + " C";
        document.getElementById("temp_max").innerHTML = "Max: " + info.max_C.toFixed(2) + " C";
        info.current = 'C';
    }
}

$(document).ready(function(){

});

window.onload = function () {
    geoFindMe();
};

function geoFindMe() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser");
        return;
    }

    function success(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" +
            latitude +
            "&lon=" +
            longitude +
            "&appid=100dcc1fe4b76a5aa1e44e5d0db0c9b2", function (json) {

            document.getElementById("mainheader").innerHTML = json.name + ", " + json.sys.country;
            document.getElementById("temp").innerHTML = "Temperature: " + json.main.temp + " K";
            document.getElementById("status").innerHTML = "Status: " + json.weather[0].main;
            document.getElementById("statusimage").src = "http://openweathermap.org/img/w/" + json.weather[0].icon + ".png";
            document.getElementById("pressure").innerHTML = "Pressure: " + json.main.pressure + " atm";
            document.getElementById("humidity").innerHTML = "Humidity: " + json.main.humidity + "%";
            document.getElementById("temp_min").innerHTML = "Min: " + json.main.temp_min + " K";
            document.getElementById("temp_max").innerHTML = "Max: " + json.main.temp_max + " K";

            info.temp_K = json.main.temp;
            info.min_K = json.main.temp_min;
            info.max_K = json.main.temp_max;

            info.temp_C = info.temp_K - 273;
            info.min_C = info.min_K - 273;
            info.max_C = info.max_K - 273;

            info.temp_F = info.temp_C * (9 / 5) + 32;
            info.min_F = info.min_C * (9 / 5) + 32;
            info.max_F = info.max_C * (9 / 5) + 32;
        });
    }

    function error() {
        alert("Unable to retrieve your location");
    }

    navigator.geolocation.getCurrentPosition(success, error);
}

var info = {
    current: 'K',
    temp_K: 0,
    min_K: 0,
    max_K: 0,
    temp_C: 0,
    min_C: 0,
    max_C: 0,
    temp_F: 0,
    min_F: 0,
    max_F: 0
};