let locData; // Define locData globally so it can be accessed in displayLocation

// Ensure DOM is ready before running JavaScript
cument.addEventListener('DOMContentLoaded', () => {

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
            const result = await response.json();  // Use response.json() to parse the data

            console.log(result);

            locData = result; // Assign the result to the global locData variable

            displayLocation(); // Call displayLocation to update the DOM
        } catch (error) {
            console.error(error);
            alert("Invalid location received.");
        }
    }

    const displayLocation = () => {
        if (locData) {
            document.getElementById('name').innerText = `Name: ${locData.location.name}`;
            document.getElementById('region').innerText = `Region: ${locData.location.region}`;
            document.getElementById('country').innerText = `Country: ${locData.location.country}`;
            document.getElementById('temp_c').innerText = `Temperature: ${locData.current.temp_c}°C`;
            document.getElementById('feels_like').innerText = `Feels like: ${locData.current.feelslike_c}°C`;
            document.getElementById('wind_kph').innerText = `Wind: ${locData.current.wind_kph} kph`;
            document.getElementById('uv').innerText = `UV: ${locData.current.uv}`;
            document.getElementById('updated').innerText = `Last Updated: ${locData.current.last_updated}`;
        } else {
            console.log("No data found");
        }
    }

    // Event listener for button click
    document.gedotElementById('enterbtn').addEventListener("click", async (e) => {
        e.preventDefault();

        const loc = document.getElementById('location').value.trim();  // Get user input

        if (loc) {
            await weather(loc);  // Call weather function with the input location
        } else {
            alert("INVALID LOCATION");
        }
    });
});
