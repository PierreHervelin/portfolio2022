import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.page';
import MusicPage from './pages/music.page';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<MusicPage />} />
        </Routes>
    );
};

export default App;
