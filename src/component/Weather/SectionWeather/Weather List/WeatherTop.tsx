import moment from 'moment';
import './Weather-List.scss'
import './WeatherTop.ts'
import {useEffect, useState} from "react";
import {saveLonLat, userCoordinates, userWeather} from "@/component/Weather/SectionWeather/Weather List/WeatherTop.ts";
import { Link } from 'react-router-dom';
import { useWeatherStore } from '../../../../../Store/WeatherStore.ts'
// Імпорт потрібних іконок
import clearDay from '@bybas/weather-icons/production/fill/all/clear-day.svg'
import cloudy from '@bybas/weather-icons/production/fill/all/cloudy.svg'
import drizzle from '@bybas/weather-icons/production/fill/all/drizzle.svg'
import rain from '@bybas/weather-icons/production/fill/all/rain.svg'
import snow from '@bybas/weather-icons/production/fill/all/snow.svg'
import mist from '@bybas/weather-icons/production/fill/all/mist.svg'
import smoke from '@bybas/weather-icons/production/fill/all/smoke.svg'
import haze from '@bybas/weather-icons/production/fill/all/haze.svg'
import dust from '@bybas/weather-icons/production/fill/all/dust.svg'
import fog from '@bybas/weather-icons/production/fill/all/fog.svg'
import tornado from '@bybas/weather-icons/production/fill/all/tornado.svg'
import wind from '@bybas/weather-icons/production/fill/all/wind.svg'
import thunderstorms from '@bybas/weather-icons/production/fill/all/thunderstorms.svg'
import BurgerMenu from "@/component/Weather/SectionWeather/Weather in Day/Burger-menu/Burger Menu.tsx";



const weatherIcon  ={
    'Thunderstorm': thunderstorms,
    'Drizzle': drizzle,
    'Rain': rain,
    'Snow': snow,
    'Mist': mist,
    'Smoke': smoke,
    'Haze': haze,
    'Dust': dust,
    'Fog': fog,
    'Sand': dust,
    'Ash': smoke,
    'Squall': wind,
    'Tornado': tornado,
    'Clear': clearDay,
    'Clouds': cloudy,
}
const WeatherTop = () => {

    // Країна і місто користувача
    const userCity = localStorage.getItem("User city");
    const userCountry = localStorage.getItem("country");
    const { setAllDays: storeSetAllDays } = useWeatherStore()
    const [allDays, setAllDays] = useState([]);

    //Логика
    useEffect(() => {
        moment.locale('uk');

        const fetchWeather = async () => {
            const coordinates = await userCoordinates(userCity);
            await saveLonLat(coordinates.lat, coordinates.lon);
            const weatherData = await userWeather(coordinates.lon, coordinates.lat);
            const weatherList =weatherData.list


            const allDays = [];
            for (let i = 0; i < 5; i++) {
                const dayData = weatherList.slice(i * 8, (i + 1) * 8);
                const date = dayData[0].dt_txt;
                const m = moment(date);
                const formatted = m.locale('uk').format(' DD, MMMM,dddd HH:mm');
                const Day = m.locale('uk').format(' dddd');


                allDays.push({
                    data: dayData,
                    formatted: formatted,
                    Day:Day,
                });
            }
            console.log(allDays);
            setAllDays(allDays);
            storeSetAllDays(allDays);
        };
        fetchWeather();
    }, [userCity])


    return (
        <div>
            <BurgerMenu/>
            <div className="userData">
                <h2>
                    Country {userCountry}
                </h2>
                <h3>
                    City {userCity}
                </h3>
            </div>
            <div className="weather scrol">
               <ul className='weatherList'>
                   {
                       allDays.map((dayData, dayIndex) => {
                           return (
                               <div >
                                   <li key={dayIndex} className='flex'>
                                       <div className='flexflex-colalign-items-centergap-10'>
                                           <h2>{dayData.Day}</h2>
                                           <p className='Text'>В {userCity} станом на {dayData.formatted} годині <br/>
                                               {dayData.data[0].main.temp}°C
                                           </p>
                                       </div>
                                       <div className='flexflex-colalign-items-centergap-10'>
                                           <p className='Text' >{dayData.data[0].weather[0].main}</p>
                                           <img className='max-h-20max-w-20' src={weatherIcon[dayData.data[0].weather[0].main]} alt='weather' />
                                       </div>
                                       <div>
                                           <Link className='hover'
                                               to={`/weather/${dayData.Day}`}
                                               onClick={() => storeSetAllDays(allDays)}
                                           >
                                               Переглянути погоду
                                           </Link>
                                       </div>
                                   </li>
                               </div>

                           )
                       })
                   }
               </ul>
            </div>
        </div>
    )
}
export default WeatherTop




