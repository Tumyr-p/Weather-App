import React, { useState, useEffect } from 'react';
import './Burger.scss'
import {useNavigate} from "react-router-dom";

interface BurgerMenuProps {

}

const BurgerMenu: React.FC<BurgerMenuProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const navigate = useNavigate();
    const onChangeCountry = () =>  {
        localStorage.clear()
        navigate('/')
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <div className="burger-menu-container">
            <button
                className={`burger-button ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </button>


            <nav className={`burger-nav ${isOpen ? 'open' : ''}`}>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#home" onClick={() => {
                            toggleMenu();
                            onChangeCountry();
                        }}>Змінити країну </a>
                    </li>
                </ul>
            </nav>

            {isOpen && (
                <div
                    className="burger-overlay"
                    onClick={toggleMenu}
                    aria-hidden="true"
                ></div>
            )}
        </div>
    );
};

export default BurgerMenu;