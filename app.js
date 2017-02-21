function weather() {

  var location = document.getElementById("location");
  var url = "http://api.openweathermap.org/data/2.5/weather?appid=APP_ID&units=imperial";

  navigator.geolocation.getCurrentPosition(success, error);

  // use the geolocation position coordinates to call the API
  function success(position) {}

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

weather();

