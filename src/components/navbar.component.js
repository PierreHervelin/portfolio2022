import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCode, FiGithub, FiHeadphones, FiLinkedin, FiList, FiUser } from 'react-icons/fi';

const NavbarComponent = () => {
    const [loaded, setLoaded] = useState(false);
    const [active, setActive] = useState(false);

    const navbarRef = useRef();
    const navigate = useNavigate();

    const useOutside = (e) => {
        if (!navbarRef.current.contains(e.target)) {
            setActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', useOutside);
        return () => {
            document.removeEventListener('click', useOutside);
        };
    }, [navbarRef]);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 1400);
    }, []);

    return (
        <div
            ref={navbarRef}
            onMouseEnter={() => {
                if (window.innerWidth > 1080) {
                    setActive(true);
                }
            }}
            onMouseLeave={() => {
                if (window.innerWidth > 1080) {
                    setActive(false);
                }
            }}
            className={`navbar ${active ? 'active' : ''} ${loaded ? 'loaded' : ''}`}
        >
            <div className="active-back"></div>
            <div className="container header" onClick={() => setActive(!active)}>
                <FiList />
            </div>
            <div className="container">
                <div title="profile" onClick={() => navigate('/')}>
                    <FiUser />
                    <span>Profile</span>
                </div>
                <div title="projects">
                    <FiCode />
                    <span>Projects</span>
                </div>
                <div title="music" onClick={() => navigate('/music')}>
                    <FiHeadphones />
                    <span>Music</span>
                </div>
                <div title="github">
                    <FiGithub />
                    <span>Github</span>
                </div>
                <div title="linkedin">
                    <FiLinkedin />
                    <span>Linkedin</span>
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;
