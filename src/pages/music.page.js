import React from 'react';
import TransitionRightAnimations from '../components/animations/transition-right.animations';
import NavbarComponent from '../components/navbar.component';
import PlayerComponent from '../components/player.component';

const MusicPage = () => {
    return (
        <div className="page">
            <PlayerComponent />
            <TransitionRightAnimations />
            <NavbarComponent />
        </div>
    );
};

export default MusicPage;
