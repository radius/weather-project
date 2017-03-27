function weather() {

  var location = document.getElementById("location");
  var url = "http://api.openweathermap.org/data/2.5/weather?appid=66b9464186dc63b29a9c52dc1824be83&units=imperial";

  navigator.geolocation.getCurrentPosition(success, error);

  // use the geolocation position coordinates to call the API
  function success(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

    url = url + "&lat=" + position.coords.latitude;
    url = url + "&lon=" + position.coords.longitude;
    console.log(url);

    /* AJAX Code */
    function reqListener () {
      var response = JSON.parse(this.response);
      console.log(response);
      var temp = document.getElementById('temp');
      temp.innerHTML = response.main.temp + "&deg;";

      var description = document.getElementById('description');
      description.innerHTML = response.weather[0].description;

      var loc = document.getElementById('location');
      loc.innerHTML = 'Lattitude is: ' + response.coord.lat + '<br>' + 'Longitude is: ' +response.coord.lon;
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", url);
    oReq.send();
    /* End AJAX Code */

  }

  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }

  location.innerHTML = "Locating...";
}

weather();
