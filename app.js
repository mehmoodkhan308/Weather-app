async function getWeather() {
    // console.log("getWeather");
    const input = document.getElementById("input").value
    const apiKey = "4d8143d0e49eab89e2add4feb0826513"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
    if (input === "") {
        alert("Enter city name")
        return
    }
    const reponse = await fetch(url)
    const data = await reponse.json()
    console.log(data);

   if (data.cod !== 200) {
        document.getElementById("cityName").innerHTML = ""
        document.getElementById("temp").innerHTML = ""
        document.getElementById("desc").innerHTML = "City Not Found"
        return
    }

    document.getElementById("cityName").innerHTML = data.name;
    document.getElementById("temp").innerHTML =  data.main.temp + " °C"

    const condition = data.weather[0].main
    if (condition == "Clear") {
        document.body.style.background = "linear-gradient(to right, #fceabb, #f8b500)";
        document.getElementById("desc").innerHTML = "☀️ Sky is clear"
    } else if (condition == "Clouds") {
        document.body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
        document.getElementById("desc").innerHTML = "☁️ Cloudy weather";
    } else if (condition == "Rain") {
        document.body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
        document.getElementById("desc").innerHTML = "🌧️ Cloudy weather";

    } else if (condition == "Thunderstorm") {
        document.body.style.background = "linear-gradient(to right, #232526, #414345)";
        document.getElementById("desc").innerHTML = "⛈️ Thunderstorm alert!";

    } else {
        document.body.style.background = "linear-gradient(to right, #606c88, #3f4c6b)";
        document.getElementById("desc").innerHTML = "🌍 Weather: " + condition;

    }






}


