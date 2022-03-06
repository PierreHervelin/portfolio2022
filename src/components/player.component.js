import React from 'react';
import { FiPlay, FiSkipBack, FiSkipForward, FiVolume2 } from 'react-icons/fi';

const PlayerComponent = () => {
    return (
        <div className="player">
            <div className="timeline">
                <div></div>
            </div>
            <div className="container">
                <div>
                    <FiSkipBack />
                </div>
                <div>
                    <FiPlay />
                </div>
                <div>
                    <FiSkipForward />
                </div>
            </div>
            <div className="volume container">
                <div>
                    <FiVolume2 />
                </div>
                <div className="slider">
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default PlayerComponent;
