import React from 'react';
import Cards from '../../components/cards/Cards';
import Table from '../../components/table/Table';
import "./Assets.css";
import trophy from '../../Assets/trophy.png';
import sport from '../../Assets/sports.png'

function Assets() {
    return (
        <div className="assets__main">
            {/* <header/> */}
           <div className='hero'>
                <h1>
                    Enable/Disable Asseets
                </h1>
                <p>Disabled assets are hidden in Exodus. To disable assets, untick the circle. Assets with a balance cannot be disabled. Bitcoin and Ethereum remain on by default as the exchange requires a minimum of two assets to function.</p>
           </div>
            {/* <Table/> */}
            <div className="section">
            <Cards
                bg={trophy}
                heading='Reward'
                text='Increase your earnings! As you save more, you earn more. Earn up to 10% on your crypto savings in just a few clicks.'
            />
              </div>
              <div className="section">
            <Cards
                bg={sport}
                heading='Compound Finance'
                text='Automate your investment and let your money make more money for you! Get more interests without limits and withdraw anytime.'
            />
                </div>
                <div className="section">
            <Cards
                bg={sport}
                heading='SportY'
                text='In love with sports? Turn your passion into eearnings by using our SportY betting platform. Make your dreams a reality.'
            />
                </div>
            {/* <footer/> */}

        </div>
    )
}

export default Assets
