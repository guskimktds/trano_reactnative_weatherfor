const WEATHER_API_KEY = "bbeb34ebf60ad50f7893e7440a1e2b0b";
const API_STEM = "http://api.openweathermap.org/data/2.5/weather?";

function zipUrl(zip) {
	console.log(zip);
	let weatherApiUrl = `${API_STEM}q=${zip}&units=imperial&APPID=${WEATHER_API_KEY}`
  console.log("weatherApiUrl : "+weatherApiUrl);
	return weatherApiUrl;
}

function fetchForecast(zip) {
	return fetch(zipUrl(zip)).then(response => response.json()).then(responseJSON => {
			console.log("responseJSON : " + responseJSON);
			return {
				main: responseJSON.weather[0].main,
				description: responseJSON.weather[0].description,
				temp: responseJSON.main.temp
			};
		})
		.catch(error => {
			console.error(error);
		});
}

export default { fetchForecast: fetchForecast };
