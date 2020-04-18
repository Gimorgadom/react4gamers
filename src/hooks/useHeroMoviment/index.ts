import useEventListener from '@use-it/event-listener';
import React from 'react';
import { EDirection } from '../../components/settings/constants';
import { handleNextPosition } from '../../contexts/canvas/helpers';

function useHeroMoviment(initialPosition) {
    const [positionState, updatePositionState] = React.useState(initialPosition);
    const [direction, updateDirectionState] = React.useState(EDirection.RIGHT);

    useEventListener('keydown', (event: React.KeyboardEvent<HTMLDivElement>) => {
        const direction: any = event.key;

        const nextPosition = handleNextPosition(direction, positionState);
        
        updatePositionState(nextPosition);
        updateDirectionState(direction);
    });

    return {
        position: positionState,
        direction: direction,
    }

}

export default useHeroMoviment;