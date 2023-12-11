function getWeather() {
    var cityInput = document.getElementById("cityInput").value;

    if (cityInput.trim() === "") {
        alert("Please enter a city");
        return;
    }

    var apiKey = '6e918694f7e76d929795e1a1e0308a26';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found. Please enter a valid city");
            } else {
                var temperature = data.main.temp;
                var humidity = data.main.humidity;
                var windSpeed = data.wind.speed;
                var description = data.weather[0].description;

                var result = `
                    <p>Temperature: ${temperature}°C</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Wind Speed: ${windSpeed} m/s</p>
                    <p>Description: ${description}</p>
                `;

                document.getElementById("weatherResult").innerHTML = result;
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching data. Please try again.');
        });
}
