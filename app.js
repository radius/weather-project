function weather() {

  var locationDiv = document.getElementById("location");
  var url = "http://api.openweathermap.org/data/2.5/weather?appid=66b9464186dc63b29a9c52dc1824be83&units=imperial";

  navigator.geolocation.getCurrentPosition(onGetPosition, onPositionError);

  // use the geolocation position coordinates to call the API
  function onGetPosition(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    url = url + "&lat=" + position.coords.latitude;
    url = url + "&lon=" + position.coords.longitude;
    console.log(url);

    /* AJAX Code */
    function whenAjaxIsLoaded () {
      var response = JSON.parse(this.response);

      console.log(this.response, response);
      
      var temp = document.getElementById('temp');
      temp.innerHTML = response.main.temp + "&deg;";

      var description = document.getElementById('description');
      description.innerHTML = response.weather[0].description;

      var loc = document.getElementById('location');
      loc.innerHTML = 'Lattitude is: ' + response.coord.lat + '<br>' + 'Longitude is: ' +response.coord.lon;
    }

    var request = new XMLHttpRequest();
    request.addEventListener("load", whenAjaxIsLoaded);
    request.open("GET", url);
    request.send();
    /* End AJAX Code */

  }

  function onPositionError() {
    locationDiv.innerHTML = "Unable to retrieve your location";
  }

  locationDiv.innerHTML = "Locating...";
}

weather();
