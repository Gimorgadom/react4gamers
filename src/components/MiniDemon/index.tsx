import React from 'react';
import { TILE_SIZE, EDirection, HEAD_OFFSET } from '../settings/constants';

import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

// const moviment = {
//     position: { x: 5, y: 5 },
//     direction: EDirection.RIGHT,
// };

interface IProps {
    initialPosition: { x: number, y: number }
};

const MiniDemon = (props: IProps) => {
    const moviment = useEnemyMoviment(props.initialPosition);

    return (
        <div
            style={{
                position: 'absolute',
                top: TILE_SIZE * moviment.position.y - HEAD_OFFSET,
                left: TILE_SIZE * moviment.position.x, 
                width: TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/MINI-DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'mini-demon-animation 1s steps(4) infinite',
                transform: `scaleX(${moviment.direction === EDirection.RIGHT ? 1 : -1})`,
            }} 
        />
    );
}

export default MiniDemon;