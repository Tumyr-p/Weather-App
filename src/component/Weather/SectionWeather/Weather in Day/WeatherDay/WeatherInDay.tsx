import {useNavigate, useParams} from "react-router-dom";
import { useWeatherStore } from '../../../../../../Store/WeatherStore.ts'
import  CustomContentOfTooltip from "@/component/Weather/SectionWeather/Weather in Day/WeatherDay/Graf.tsx";
import './WeatherInDAy.scss'

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

export default function () {
    const { day } = useParams();
    const { allDays } = useWeatherStore();

    const selectedDay = allDays.find(d => d.Day === day)

    console.log('day:', day);
    console.log('allDays:', allDays);
    console.log('selectedDay:', selectedDay);
    // Отримання потрібних даних
    const Graf = selectedDay.data.map((item) => ({
        temp: item.main.temp,
        time: item.dt_txt.split(' ')[1].split(':').slice(0,2).join(':')
    }))
    //Перехід на головну сторінку
    const navigate = useNavigate();
    const goMain =() =>{
        navigate('/weather')
    }

    return (
        <div className="centerGraf  Top-Graf">
            <button className=' Top-Button' onClick={()=> goMain()}>
                <p>
                    Назад
                </p>
            </button>
            <h3>
                Графік погоди за {selectedDay.Day}
            </h3>
            <div className="weatherGraf">
                <div className="meinGraf">
                    <CustomContentOfTooltip
                        customGraf={Graf}
                    />
                </div>
                <ul className='scrol-icon BC' >
                    {
                        selectedDay.data.map((item) => {
                            return (
                                <div className='Info'>
                                    <li>
                                        <p> В { item.dt_txt.split(' ')[1].split(':').slice(0,2).join(':')} <br/>
                                            максимальна  температура {item.main.temp_max}°C
                                        </p>
                                    </li>
                                    <div>
                                        <img className='max-h-20max-w-20' src={weatherIcon[item.weather[0].main]} alt='weather' />
                                    </div>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}