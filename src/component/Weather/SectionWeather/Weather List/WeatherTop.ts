const apiKey = import.meta.env.VITE_WEATHER_API_KEY ;

export const userCoordinates = async (userCity) => {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${userCity}&appid=${apiKey}`
    );
    const data = await response.json();
    const { lat, lon } = data[0];
    return { lat, lon };
}

export const saveLonLat = async (lat, lon) => {
    localStorage.setItem("lat", lat);
    localStorage.setItem("lon", lon);
}


export const userWeather = async (lon, lat) => {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    return data;
}