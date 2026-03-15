import './Weather.scss'
import WeatherTop from "@/component/Weather/SectionWeather/Top/WeatherTop.tsx";
import WeatherBottom from "@/component/Weather/SectionWeather/WeatherBottom.tsx";

const Weather =() =>{
    return (
       <div>
           <WeatherTop />
           <WeatherBottom />
       </div>
    )
}
export default Weather