// Home.jsx
import React from 'react';
import MenuBar from '../../components/MenuBar/MenuBar';
import CardServices from '../../components/CardServices/CardServices';
import Rodape from '../../components/Rodape/Rodape';

function Home() {
    return (
        <div>
            <MenuBar />
            <div className="container">
                <div className="menu">
                    <CardServices />
                </div>
            </div>
            <Rodape />
        </div>
    );
}

export default Home;
