import { useEffect, useRef, useState } from 'react';

const Intro = ({ onComplete }) => {
    const [scattered, setScattered] = useState(false);

    const letters = 'ABDELRAOUF'.split('');

    const rand = (min, max) => {
        return Math.random() * (max - min) + min;
    };

    const positions = useRef(
        letters.map(() => ({
            x: rand(-200, 200),
            y: rand(-150, 150),
            rotate: rand(-360, 360),
            scale: rand(0.1, 2),
        }))
    ).current;

    useEffect(() => {
    
        document.body.style.overflow = 'hidden';
    
        return () => document.body.style.overflow = '';
    
    }, []);

    useEffect(() => {
    
        const timer = setTimeout(() => {
            setScattered(true);
        }, 2000);
    
        return () => clearTimeout(timer);
    
    }, []);

    useEffect(() => {
    
        if (!scattered) return;
    
        const timer = setTimeout(() => {
            onComplete();
        }, 1400);
    
        return () => clearTimeout(timer);
    
    }, [scattered, onComplete]);

    return (
    
        <div className="introBg">
        
            <h1 className="name">
            
                {letters.map((char, index) => {
                
                    const position = positions[index];
                
                    return (
                    
                        <span key={`${char}-${index}`}
                            style={{
                                display: 'inline-block',
                                transition: `
                                    transform 0.8s 
                                    cubic-bezier(0.34, 1.56, 0.64, 1)
                                    ${index * 40}ms,
                                    opacity 0.8s ease
                                    ${index * 40}ms
                                `,
                                transform: scattered
                                    ? `
                                        translate(
                                            ${position.x}vw,
                                            ${position.y}vh
                                        )
                                        rotate(${position.rotate}deg)
                                        scale(${position.scale})
                                    `
                                    : 'translate(0, 0) rotate(0) scale(1)',
                                opacity: scattered ? 0 : 1,
                            }}
                        >
                            {char}
                        </span>
                    
                    );
                
                })}
            
            </h1>
        
        </div>
    
    );

};

export default Intro;