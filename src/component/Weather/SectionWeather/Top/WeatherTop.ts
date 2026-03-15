const apiKey = import.meta.env.VITE_WEATHER_API_KEY ;
export const userWeather =(userCity) =>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}&units=metric}`)
    .then(res => res.json())
        .then(data => console.log(data))
}