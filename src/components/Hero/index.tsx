import useEventListener from '@use-it/event-listener';
import React from 'react';
import { TILE_SIZE, EDirection } from '../settings/constants';

import './index.css';
import useHeroMoviment from '../../hooks/useHeroMoviment';

const initialPosition = {
    x: 15,
    y: 15
};

const Hero = () => {
    const { position, direction } = useHeroMoviment(initialPosition);
    
    return (
        <div
            style={{
                position: 'absolute',
                top: TILE_SIZE * position.y,
                left: TILE_SIZE * position.x, 
                width: TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/HERO.png)",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `0 ${TILE_SIZE}`,
                animation: 'hero-animation 1s steps(4) infinite',
                transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
                zIndex: 1,
            }} 
        />
    );
}


export default Hero;