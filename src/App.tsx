import Preview from "./component/Preview/Preview.tsx";
import SelectCountry from "@/component/Preview/SelectCountry and City/SelectCountry.tsx";
import Weather from "@/component/Weather/Weather.tsx";
import { Routes, Route } from 'react-router-dom'
import { useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import WeatherInDay from "@/component/Weather/SectionWeather/Weather in Day/WeatherDay/WeatherInDay.tsx";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const userCity = localStorage.getItem('User city');
        if (userCity && window.location.pathname === '/Weather-App/') {
            navigate('/weather');
        }
    }, [navigate]);

    return (
        <Routes>
            <Route path="/" element={<Preview />} />
            <Route path="/selectWeather" element={<SelectCountry />} />
            <Route path="/weather" element={<Weather />} />
            <Route path='/weather/:day' element={<WeatherInDay/>}/>
        </Routes>
    );
}
export default App