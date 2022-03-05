import React from 'react';
import TransitionRightAnimations from '../components/animations/transition-right.animations';
import NavbarComponent from '../components/navbar.component';

const MusicPage = () => {
    return (
        <div className="music-page">
            <TransitionRightAnimations />
            <NavbarComponent />
        </div>
    );
};

export default MusicPage;
