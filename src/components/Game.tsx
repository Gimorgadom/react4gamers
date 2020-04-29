import React, { useState } from 'react';
import CanvasProvider from '../contexts/canvas';
import Debugger from './Debugger';
import Board from './Board';
import ChestsProvider from '../contexts/chests';


function Game() {

  const [debuggerState, updateDebuggerState] = useState(false);

    return (
        <CanvasProvider>
          <ChestsProvider>

            {debuggerState && <Debugger />}
            <div
                style={{
                    position: 'absolute',
                    left: -176,
                    top: 180,
                }}>
                <button onClick={() => updateDebuggerState(!debuggerState)}
                  style={{
                    backgroundColor: '#f48750',
                    color: 'black',
                    border: 'none',
                    padding: '10px 20px',
                    fontSize: 18,
                    fontStyle: 'initial',
                    fontWeight: 'bolder',
                    fontFamily: 'inherit',
                  }}
                >
                    Debugger
                </button>
            </div>

            <Board />
          </ChestsProvider>
        </CanvasProvider>
    )
};

export default Game;