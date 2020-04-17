import React from 'react';
import { TILE_SIZE } from '../settings/constants';

import './index.css';

const Chest = () => {
    return (
        <div
            style={{
                width: TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/CHEST.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'chest-animation 1s steps(3) infinite',
                position: 'absolute',
                bottom: TILE_SIZE * 4,
                left: TILE_SIZE * 9, 
            }} 
        />
    );
}

export default Chest;