import React from 'react';
import './Cards.css';


function Cards({bg, heading, text, link}) {
    return (
        <div className="main__card">
             <div className="card__icon">
                    
                    </div>
            <div className="cards">
               
            <div className="card__image" style={{backgroundImage: `url(${bg})`}}>
                
            </div>
            <div className="card__body">
                <div className="card__header">
                    <h2>{heading}</h2>
                </div>
                <div className="card__text">
                    <p>{text}</p>
                </div>
                
            </div>
            </div>
            <div className="card__button">
                    <button><p>Install</p></button>
                </div>
        </div>
    )
}

export default Cards
