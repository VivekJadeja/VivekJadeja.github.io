import React from 'react';

import ResumeSS from '../assets/ResumeSS.png'
import ghubPic from '../assets/ghubPic.png'
import FoodPic from '../assets/FoodPic.JPEG'
import Hero from '../components/Hero';
import "./GalleryPage.css";

function GalleryPage({ title }) {
    return (
        <div>
           <Hero title={title} />
            
            <div>
                <div className="row ">
                    <div className="column">
                        <img src={ghubPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                        <img src={FoodPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                        <img src={FoodPic} style={{ width: "100%" }} />
                        <img src={ghubPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                    </div>
                    <div className="column">
                        <img src={ghubPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                        <img src={FoodPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                        <img src={FoodPic} style={{ width: "100%" }} />
                        <img src={ghubPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                    </div>
                    <div className="column">
                        <img src={ghubPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                        <img src={FoodPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                        <img src={FoodPic} style={{ width: "100%" }} />
                        <img src={ghubPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                    </div>
                    <div className="column">
                        <img src={ghubPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                        <img src={FoodPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                        <img src={FoodPic} style={{ width: "100%" }} />
                        <img src={ghubPic} style={{ width: "100%" }} />
                        <img src={ResumeSS} style={{ width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default GalleryPage;