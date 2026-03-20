import './SelectCountry.scss'
import {useState} from "react";
import './SelectCountry.ts'
import {selectCountry} from "@/component/Preview/SelectCountry and City/SelectCountry.ts";
import { useNavigate } from 'react-router-dom';

const SelectCountry = () => {
    const [inputValue, setInputValue] = useState ('')
    const [states, setState] = useState([])
    const [, setCity] = useState('')
    const navigate = useNavigate();
    const  handeleClick = async () => {
        const states = await selectCountry(inputValue)
        setState(states)
    }
    const saveUserCity = async (cityValue) => {
       await localStorage.setItem('User city', cityValue)
    }

    // Логика перехода
    const goToWeather =() =>{
        inputValue.trim().length > 0 && navigate('/weather');
        inputValue.trim().length === 0 && alert('Please Write Country and Select City');
    }
    return (
        <div>
            <div className="selectContAndSity">
                <h1 className="SelectCont">
                    Please Select a <br/>
                    Country and City
                </h1>
                <div className="inputPreview3">
                    <div className="Contry">
                        <input type="text" required placeholder={'Write your country'} value={inputValue} onChange={(e) => setInputValue(e.target.value)}   />
                        <button onClick={handeleClick}>FindCountry</button>
                    </div>
                    <div className="City">
                        <select  name="" id="" onChange={(e) => {
                            const cityValue = e.target.value
                            setCity(cityValue);
                            saveUserCity(cityValue);
                        }}>
                            {states.map(states => <option key={states.name} value={states.name} >{states.name}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <button onClick={goToWeather} className="goToWeather" >Go to Weather</button>

        </div>
    )
}
export default SelectCountry