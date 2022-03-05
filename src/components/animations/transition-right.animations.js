import React, { useEffect, useState } from 'react';

const TransitionRightAnimations = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
    }, []);

    return (
        <div className={`transition-left ${active ? 'active' : ''}`}>
            <div className="order-1"></div>
            <div className="order-2"></div>
            <div className="order-3"></div>
        </div>
    );
};

export default TransitionRightAnimations;
