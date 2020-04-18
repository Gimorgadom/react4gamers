import React from 'react';
import { TILE_SIZE, EDirection } from '../settings/constants';

import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

const MiniDemon = () => {

    const { position, direction } = useEnemyMoviment({ x: 10, y: 10 });

    return (
        <div
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * position.y,
                left: TILE_SIZE * position.x, 
                width: TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/MINI-DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'mini-demon-animation 1s steps(4) infinite',
                transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
            }} 
        />
    );
}

export default MiniDemon;