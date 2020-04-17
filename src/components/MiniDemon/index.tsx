import React from 'react';
import { TILE_SIZE } from '../settings/constants';

import './index.css';

const MiniDemon = () => {
    return (
        <div
            style={{
                width: TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/MINI-DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'mini-demon-animation 1s steps(4) infinite',
                position: 'absolute',
                bottom: TILE_SIZE * 10,
                left: TILE_SIZE * 5, 
            }} 
        />
    );
}

export default MiniDemon;