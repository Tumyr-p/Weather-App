

export const userCoordinates = async (userCity) => {
    const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${userCity}&appid=e08b28bd1c9030f96084ff107f1f3bf4`
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
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e08b28bd1c9030f96084ff107f1f3bf4&units=metric`
    );
    const data = await response.json();
    console.log(data);
    return data;
}