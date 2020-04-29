import React from 'react';
import { TILE_SIZE, EDirection, HEAD_OFFSET } from '../settings/constants';

import './index.css';
import useHeroMoviment from '../../hooks/useHeroMoviment';

interface IProps {
    initialPosition: { x: number; y: number },
}

const Hero = (props: IProps) => {
    const { position, direction, step } = useHeroMoviment(props.initialPosition);
        
    return (
        <div>
            <div
                style={{
                    position: 'absolute',
                    top: TILE_SIZE * position.y - HEAD_OFFSET,
                    left: TILE_SIZE * position.x, 
                    width: TILE_SIZE,
                    height: 100,
                    backgroundImage: "url(./assets/HERO.png)",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `0 ${TILE_SIZE - HEAD_OFFSET}px`,
                    animation: 'hero-animation 1s steps(4) infinite',
                    transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
                    zIndex: 1,
                }} 
            />
            <div className='steps'>
                {step} passos
            </div>
        </div>
        
    );
}


export default Hero;