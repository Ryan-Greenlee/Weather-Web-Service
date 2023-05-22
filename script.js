document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById('name').value;
    const zipcode = document.getElementById('zipcode').value;
    
    fetch('/weather?zipcode=' + zipcode) // Make a GET request to the backend
      .then(function(response) {
        return response.json(); // Parse the response as JSON
      })
      .then(function(weatherData) {
        const weatherInfo = 'Hello, ' + name + '! ';
        weatherInfo += 'The current weather in ' + weatherData.name + ' is ' + weatherData.weather[0].description + '.';
        
        document.getElementById('weather-info').textContent = weatherInfo;
      });
    //   .catch(function(error) {
    //     console.error('Error:', error);
    //   });
  });
  