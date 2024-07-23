import React, { useState, useEffect } from 'react';
import PortraitImage from './images/achievements-portrait.png';
import LandscapeImage from './images/achievements-landscape.png';

export default function Achievements() {
    const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

    const handleResize = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        // Initial check
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div id="achievements" style={{ 
            width: '100%', 
            height: 'auto', 
            marginBottom: '5%',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
        }}>
            <img 
                src={isLandscape ? LandscapeImage : PortraitImage} 
                style={{ 
                    width: 'auto', 
                    height: '90vh',
                    maxWidth: '80%',
                    maxHeight: '100vh',
                    objectFit:'contain'
                }} 
                alt="Achievements"
            />
        </div>
    );
}
