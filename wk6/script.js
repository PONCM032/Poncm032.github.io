var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Lima,Peru&appid=bff8718b79d012a39d01da5c56be93c0";
var location = document.getElementById("inputText").value;          
var forecastURL = "http://api.weatherunlocked.com/api/forecast/?app_id=bffff0a3&app_key=6b3361b442ac0fde78019a4271871f6e";
//Current Weather
$.ajax({
  url: queryURL,
  method: "GET" 
})
  .then(function(response) {

    console.log(queryURL);
    console.log(response);

    $(".cityName").html("<h1>" + response.name + ", " + response.sys.country + "</h1>");
    //
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    $(".temperature").text("Temperature: " + tempF.toFixed(2));
    //
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".windspeed").text("Wind Speed: " + response.wind.speed);
    $(".uvIndex").text("Uv Index: " + uvurl);
    
    var uvurl = "http://api.openweathermap.org/data/2.5/uvi?appid=&lat=" + response.coord.lat + "&lon=" + response.coord.lon; 
    var iconurl ="http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png";  
    var iconimage = $("<img>").attr("src", iconurl);
    $(".wicon").append(iconimage);

    console.log(uvurl);
});
//Forecast Weather
$.ajax({
  url: forecastURL,
  method: "GET" 
})
  .then(function(response) {

    console.log(forecastURL);
    console.log(response);
    $("#day1").text("" + response.date + "<br>Temperature: " + response.temp_max_f + "<br>Humidity: " + response.humid_max_pct + "");
   // $("#day1").text("" + response.date + "<br>Temperature: " + response.temp_max_f + "<br>Humidity: " + response.humid_max_pct + "");
   // $("#day1").text("" + response.date + "<br>Temperature: " + response.temp_max_f + "<br>Humidity: " + response.humid_max_pct + "");
   // $("#day1").text("" + response.date + "<br>Temperature: " + response.temp_max_f + "<br>Humidity: " + response.humid_max_pct + "");
  });
//on click/storage
$("#inputbutton").on("click", function () {
  var locationList = $("#inputText").val().trim();
  localStorage.setItem("server", input.val());
  var storedValue = localStorage.getItem("server");

  document.getElementById('saveServer').value = localStorage.getItem('server');

  console.log(storedValue);

});