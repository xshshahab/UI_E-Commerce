import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../../assets/payments.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Voluptatem accusantium doloremque Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, inventore! iqsa totoem ipsa quae ab illo veritatis et vitae dicta sunt af sha iq ra siuu.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Kayaloram Rd, Punnamada, KottanKulangara, Alappuzha, Kerala, 688006
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: 0471 272 0261
                        </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">
                            Email: sabar@store.com
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Term & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>

            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        SABARSTORE 2024 CREATED BY MOHD. SHAHAB. PREMIUM E-COMMERCE SOLUTIONS.
                    </div>
                    <img src={Payment} alt="payment-img" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
