import './WeatherTop.ts'
import {useEffect} from "react";
import {userWeather} from "@/component/Weather/SectionWeather/Top/WeatherTop.ts";


const WeatherTop = () => {
    // Країна і місто користувача
    const userCity = localStorage.getItem("User city");
    const userCountry = localStorage.getItem("country");
    //Логика
    useEffect(() => {
        userWeather(userCity)
    },[])

    return (
        <div>
            <div className="userData">
                <p>
                    Country {userCountry}
                </p>
                <p>
                    City {userCity}
                </p>
            </div>
        </div>
    )
}
export default WeatherTop