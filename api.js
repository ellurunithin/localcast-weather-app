var myHeaders = new Headers();                                   
myHeaders.append("09e38351e1d145abb2c40350230911", "");        //here we append the key value


function fetchWeather(){
    var region = document.getElementById("region").value;             //getting the value of the entered one
    var apiURL = "http://api.weatherapi.com/v1/current.json?key=09e38351e1d145abb2c40350230911&q=" + region + "&aqi=yes"  //searching for the regions details according to the location
    fetch(apiURL)
    .then(response => response.json())
    
    .then(data => {
        var temperature=data.current.temp_c;         //here we get the temperature
        var conditions= data.current.condition.text;   //here we get the text that is having msit or sunny or hot
        var weathericon= data.current.condition.icon;   //here we access the icons for the weather place
        var humidity=data.current.humidity;          //here we access the humidity for display
        document.getElementById("currentweather").textContent = "The temperature is: " + temperature;    //we display the temperature
        document.getElementById("weatherimage").src = "http:" + weathericon;                               //we display the icons for the which weather we are getting for that location
        document.getElementById("humidity").textContent = "humidity: " + humidity;                      //we display humidity of the location and disply that number
        document.getElementById('currenttime').textContent = 'Current time: ' + new Date().toLocaleTimeString();    //we display the time for the user to display it
        // document.getElementById("currentweather").textContent = "The temperature is: " + data.current.temp_c;
        
    }
        )
    .catch(error => {
        console.error("Error in fetching the weather",error);                     //here we find an error to the console
        document.getElementById("currentweather").textContent = "error " + "please check the network";      //we display these messge for the weather forcast
    })

    
}