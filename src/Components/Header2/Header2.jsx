import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Link, useLocation } from 'react-router-dom'
import Works from '../../Apis/Works.json'

export default function Header2() {

    const [theme, setTheme] = useState( () => {
    
        const theme = localStorage.getItem("themePreference");
        const themeData = theme ?? JSON.parse(theme)
    
        return themeData;
    
    } );

    const toggleTheme = () => {
        setTheme(prev => prev === "light" ? "dark" : "light");
        localStorage.setItem("themePreference", theme === "light" ? "dark" : "light")
    };

    useEffect(() => {
    
        document.body.dataset.theme = theme;
    
    }, [theme]);

    const location = useLocation();
    const [lastDirectory, setLastDirectory] = useState('');
    
    useEffect(() => {

        const pathArray = location.pathname.split('/').filter(Boolean);
        let lastDir = pathArray[pathArray.length - 1];

        if (!lastDir) {
            // root path → Welcome
            lastDir = 'Welcome';

        } else if (!isNaN(lastDir)) {
            // last segment is a number
            const prevSegment = pathArray[pathArray.length - 2];

            if (prevSegment === 'project') {
                // ✅ find project title from Works.json
                const project = Works.find(w => w.rank === parseInt(lastDir));
                lastDir = project ? `project / ${project.title}` : 'project';
            } else {
                lastDir = prevSegment || 'Welcome';
            }
        }

        setLastDirectory(lastDir);

    }, [location]);

    return (
    
        <>
        
            <header className="header smallScreen d-sm-block d-md-none">
                
                <div className="container">
                    
                    <div className="d-flex align-items-baseline">
                    
                        <div className="logo">
                        
                            <Link className="navbar-brand" to="/"></Link>
                        
                        </div>
                    
                        <div className="navigate">
                        
                            <h4 className="navigateTitle">{lastDirectory}</h4>
                        
                        </div>
                    
                        <motion.div
                                    className="theme-switch-wrapper"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        scale: [1, 1.10, 1],
                                    }}
                                    transition={{
                                        opacity: { duration: 1.6 },
                                        x: { duration: 1.6, type: "spring" },
                                        scale: {
                                            duration: 1.2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        },
                                    }}
                                >
                                
                                    <label className="theme">
                                    
                                        <input className="input" type="checkbox" checked={theme === "dark"} onChange={toggleTheme} />
                                    
                                        <svg className="icon icon-sun" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
                                        
                                            <circle r="5" cy="12" cx="12"></circle><line y2="3" y1="1" x2="12" x1="12"></line><line y2="23" y1="21" x2="12" x1="12"></line><line y2="5.64" y1="4.22" x2="5.64" x1="4.22"></line><line y2="19.78" y1="18.36" x2="19.78" x1="18.36"></line><line y2="12" y1="12" x2="3" x1="1"></line><line y2="12" y1="12" x2="23" x1="21"></line><line y2="18.36" y1="19.78" x2="5.64" x1="4.22"></line><line y2="4.22" y1="5.64" x2="19.78" x1="18.36"></line>
                                        
                                        </svg>
                                    
                                        <svg className="icon icon-moon" viewBox="0 0 24 24" >
                                        
                                            <path d="m12.3 4.9c.4-.2.6-.7.5-1.1s-.6-.8-1.1-.8c-4.9.1-8.7 4.1-8.7 9 0 5 4 9 9 9 3.8 0 7.1-2.4 8.4-5.9.2-.4 0-.9-.4-1.2s-.9-.2-1.2.1c-1 .9-2.3 1.4-3.7 1.4-3.1 0-5.7-2.5-5.7-5.7 0-1.9 1.1-3.8 2.9-4.8zm2.8 12.5c.5 0 1 0 1.4-.1-1.2 1.1-2.8 1.7-4.5 1.7-3.9 0-7-3.1-7-7 0-2.5 1.4-4.8 3.5-6-.7 1.1-1 2.4-1 3.8-.1 4.2 3.4 7.6 7.6 7.6z"></path>
                                        
                                        </svg>
                                    
                                    </label>
                                
                                </motion.div>
                    
                    </div>
            
                </div>
                
            </header>
        
        </>
    
    )
}
