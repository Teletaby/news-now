let locData; // Define locData globally so it can be accessed in displayLocation

document.addEventListener('DOMContentLoaded', () => {
    const loc = localStorage.getItem('inputData');

    const weather = async (location) => {
        const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${location}&days=3`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '50b5f3b226msh0966c3a7bd972cap10e911jsn3c815d7d3627',
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();

            console.log(result);

            locData = result; // Assign the result to the global locData variable
            displayLocation(); // Call displayLocation to update the DOM
        } catch (error) {
            console.error(error);
            alert("Invalid location received.");
        }
    };

    const displayLocation = () => {
        if (locData) {
            document.getElementById('coverImage').src = locData.current.condition.icon;
            document.getElementById('name').innerText = `Name: ${locData.location.name}`;
            document.getElementById('region').innerText = `Region: ${locData.location.region}`;
            document.getElementById('country').innerText = `Country: ${locData.location.country}`;
            document.getElementById('temp_c').innerText = `Temperature: ${locData.current.temp_c}°C`;
            document.getElementById('feels_like').innerText = `Feels like: ${locData.current.feelslike_c}°C`;
            document.getElementById('wind_kph').innerText = `Wind: ${locData.current.wind_kph} kph`;
            document.getElementById('uv').innerText = `UV: ${locData.current.uv}`;
            document.getElementById('updated').innerText = `Last Updated: ${locData.current.last_updated}`;

            document.getElementById('coverImage1').src = locData.forecast.forecastday[0].day.condition.icon;
            document.getElementById('maxtemp_c1').innerText = `Max Temp: ${locData.forecast.forecastday[0].day.maxtemp_c}°C`;
            document.getElementById('mintemp_c1').innerText = `Min Temp: ${locData.forecast.forecastday[0].day.mintemp_c}°C`;
            document.getElementById('avgtemp_c1').innerText = `Avg Temp: ${locData.forecast.forecastday[0].day.avgtemp_c}°C`;
            document.getElementById('maxwind_kph1').innerText = `Max Wind: ${locData.forecast.forecastday[0].day.maxwind_kph} kph`;
            document.getElementById('avghumidity1').innerText = `Avg humidity: ${locData.forecast.forecastday[0].day.avghumidity}`;
            document.getElementById('uv1').innerText = `UV: ${locData.forecast.forecastday[0].day.uv}`;
            document.getElementById('daily_chance_of_rain1').innerText = `Rain Chance: ${locData.forecast.forecastday[0].day.daily_chance_of_rain}`;
            document.getElementById('code1').innerText = `Code: ${locData.forecast.forecastday[0].day.condition.code}`;

            document.getElementById('coverImage2').src = locData.forecast.forecastday[1].day.condition.icon;
            document.getElementById('maxtemp_c2').innerText = `Max Temp: ${locData.forecast.forecastday[1].day.maxtemp_c}°C`;
            document.getElementById('mintemp_c2').innerText = `Min Temp: ${locData.forecast.forecastday[1].day.mintemp_c}°C`;
            document.getElementById('avgtemp_c2').innerText = `Avg Temp: ${locData.forecast.forecastday[1].day.avgtemp_c}°C`;
            document.getElementById('maxwind_kph2').innerText = `Max Wind: ${locData.forecast.forecastday[1].day.maxwind_kph} kph`;
            document.getElementById('avghumidity2').innerText = `Avg humidity: ${locData.forecast.forecastday[1].day.avghumidity}`;
            document.getElementById('uv2').innerText = `UV: ${locData.forecast.forecastday[1].day.uv}`;
            document.getElementById('daily_chance_of_rain2').innerText = `Rain Chance: ${locData.forecast.forecastday[1].day.daily_chance_of_rain}`;
            document.getElementById('code2').innerText = `Code: ${locData.forecast.forecastday[1].day.condition.code}`;

            document.getElementById('coverImage3').src = locData.forecast.forecastday[2].day.condition.icon;
            document.getElementById('maxtemp_c3').innerText = `Max Temp: ${locData.forecast.forecastday[2].day.maxtemp_c}°C`;
            document.getElementById('mintemp_c3').innerText = `Min Temp: ${locData.forecast.forecastday[2].day.mintemp_c}°C`;
            document.getElementById('avgtemp_c3').innerText = `Avg Temp: ${locData.forecast.forecastday[2].day.avgtemp_c}°C`;
            document.getElementById('maxwind_kph3').innerText = `Max Wind: ${locData.forecast.forecastday[2].day.maxwind_kph} kph`;
            document.getElementById('avghumidity3').innerText = `Avg humidity: ${locData.forecast.forecastday[2].day.avghumidity}`;
            document.getElementById('uv3').innerText = `UV: ${locData.forecast.forecastday[2].day.uv}`;
            document.getElementById('daily_chance_of_rain3').innerText = `Rain Chance: ${locData.forecast.forecastday[2].day.daily_chance_of_rain}`;
            document.getElementById('code3').innerText = `Code: ${locData.forecast.forecastday[2].day.condition.code}`;
        } else {
            console.log("No data found");
        }
    };
    // calls function for location
    if (loc) {
        weather(loc);
    }
});