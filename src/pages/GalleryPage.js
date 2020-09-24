import React from 'react';

import ResumeSS from '../assets/ResumeSS.png';
import ghubPic from '../assets/ghubPic.png';
import FoodPic from '../assets/FoodPic.JPEG';
import CaramelThumbprint from '../assets/CaramelThumbprint.jpeg';
import Charcuterie from '../assets/Charcuterie.jpeg';
import Curry from '../assets/Curry.jpeg';
import EggSandwich from '../assets/EggSandwich.jpeg';
import FroYoCake from '../assets/FroYoCake.JPG';
import FruitPlatter from '../assets/FruitPlatter.jpeg';
import GingrbrdCookies from '../assets/GingrbrdCookies.jpeg';
import LmnRspbCake from '../assets/LmnRspbCake.jpeg';
import LmnRspbSlice from '../assets/LmnRspbSlice.JPG';
import Meatballs from '../assets/Meatballs.jpeg';
import Salmon from '../assets/Salmon.jpeg';
import ShrimpScampi from '../assets/ShrimpScampi.jpeg';
import StrbCake from '../assets/StrbCake.jpeg';
import XmasCookies from '../assets/XmasCookies.JPG';
import Zuppa from '../assets/Zuppa.jpeg';
import Hero from '../components/Hero';
import "./GalleryPage.css";

function GalleryPage({ title }) {
    return (
        <div>
           <Hero title={title} />
            <div>
                <div className="row ">
                    <div className="column">
                        <img src={FroYoCake} style={{ width: "100%" }} />
                        <img src={Salmon} style={{ width: "100%" }} />
                        <img src={Meatballs} style={{ width: "100%" }} />
                        <img src={StrbCake} style={{ width: "100%" }} />
                    </div>
                    <div className="column">
                        <img src={CaramelThumbprint} style={{ width: "100%" }} />
                        <img src={ShrimpScampi} style={{ width: "100%" }} />
                        <img src={GingrbrdCookies} style={{ width: "100%" }} />
                        <img src={Zuppa} style={{ width: "100%" }} />
                    </div>
                    <div className="column">
                        <img src={Charcuterie} style={{ width: "100%" }} />
                        <img src={LmnRspbCake} style={{ width: "100%" }} />
                        <img src={EggSandwich} style={{ width: "100%" }} />
                        <img src={FoodPic} style={{ width: "100%" }} />
                    </div>
                    <div className="column">
                        <img src={Curry} style={{ width: "100%" }} />
                        <img src={LmnRspbSlice} style={{ width: "100%" }} />
                        <img src={XmasCookies} style={{ width: "100%" }} />
                        <img src={FruitPlatter} style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default GalleryPage;