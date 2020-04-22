import React from 'react';
import { TILE_SIZE, DEMON_TILE_SIZE, EDirection } from '../settings/constants';

import './index.css';
import useEnemyMoviment from '../../hooks/useEnemyMoviment';

interface IProps {
    initialPosition: { x: number; y: number }
}

const Demon = (props: IProps) => {

    const { position, direction } = useEnemyMoviment(props.initialPosition);

    return (
        <div
            style={{
                position: 'absolute',
                top: TILE_SIZE * position.y,
                left: TILE_SIZE * position.x,
                width: DEMON_TILE_SIZE,
                height: DEMON_TILE_SIZE,
                backgroundImage: "url(./assets/DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'demon-animation 1s steps(4) infinite',
                transform: `scaleX(${direction === EDirection.RIGHT ? 1 : -1})`,
            }} 
        />
    );
}

export default Demon;