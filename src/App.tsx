import Preview from "./component/Preview/Preview.tsx";
import SelectCountry from "@/component/Preview/SelectCountry and City/SelectCountry.tsx";
import Weather from "@/component/Weather/Weather.tsx";
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        const userCity = localStorage.getItem('User city');
        if (userCity && window.location.pathname === '/') {
            navigate('/weather');
        }
    }, [navigate]);

    return (
        <Routes>
            <Route path="/" element={<Preview />} />
            <Route path="/selectWeather" element={<SelectCountry />} />
            <Route path="/weather" element={<Weather />} />
        </Routes>
    );
}
export default App