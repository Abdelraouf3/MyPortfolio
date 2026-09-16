import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { itemVariantsFromDown, listVariants } from '../../animations/variants';
import PersonalInformation from '../../Apis/PersonalInformation.json'
import Works from '../../Apis/Works.json'

export default function Project() {

    const { rank } = useParams();
    const navigate = useNavigate();

    const item = Works.find(item => item.rank === parseInt(rank));

    const [lightboxIndex, setLightboxIndex] = useState(null);

    const shots = item?.shots ?? [];

    useEffect(() => {
        const handleKey = (e) => {
            if (lightboxIndex === null || shots.length === 0) return;
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % shots.length);
            if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + shots.length) % shots.length);
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxIndex, shots.length]);

    const sortedWorks = [...Works].sort((a, b) => a.rank - b.rank);
    const currentIndex = sortedWorks.findIndex(w => w.rank === parseInt(rank));
    const prevProject = sortedWorks[currentIndex - 1] || null;
    const nextProject = sortedWorks[currentIndex + 1] || null;

    useEffect(() => {
        const toPreload = [];
    
        if (prevProject) {
            toPreload.push(prevProject.imageCover, ...(prevProject.shots ?? []));
        }
        if (nextProject) {
            toPreload.push(nextProject.imageCover, ...(nextProject.shots ?? []));
        }
    
        toPreload.forEach(src => {
            const img = new Image();
            img.src = process.env.PUBLIC_URL + src;
        });
    
    }, [rank, prevProject, nextProject]);

    const { email, phone, whatsappURL, linkedinURL, githubURL } = PersonalInformation[0] || {};

    if (!item) return <div className='section container'>Item not found</div>;

    return (
    
        <>
        
            <motion.section key={rank} className="viewProject section"
                variants={listVariants}
                initial='hidden'
                animate='visible'
            >
            
                <div className="container">
                
                    <div className="projectDetails">
                    
                        <motion.div className="image" variants={itemVariantsFromDown}>
                            <img src={process.env.PUBLIC_URL + item.imageCover} alt={item.title} />
                        </motion.div>
                    
                        <div className='d-flex align-items-center justify-content-between'>
                        
                            <motion.h4 className="title" variants={itemVariantsFromDown}>{item.title}</motion.h4>
                        
                            <div className="d-none d-lg-flex justify-content-center gap-2 mb-2">
                            
                                {item.status === "in progress" 
                                
                                    ? <motion.span className="badge bg-warning text-dark" variants={itemVariantsFromDown}>🚧 Under Development</motion.span>
                                
                                    :   <motion.a target='_blank' rel="noopener noreferrer" href={item.liveDemo} className="demoBtn" variants={itemVariantsFromDown}>
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                                        </motion.a>
                                
                                }
                            
                                {item.githubURL && (
                                
                                    <motion.a target='_blank' rel="noopener noreferrer" href={item.githubURL} className="demoBtn" variants={itemVariantsFromDown}>
                                        <i className="fa-brands fa-github"></i> Source Code
                                    </motion.a>
                                
                                )}
                            
                            </div>
                        
                            <div className="d-flex d-lg-none justify-content-center gap-2 mb-2">
                            
                                {item.status === "in progress" 
                                
                                    ? <motion.span className="badge bg-warning text-dark" variants={itemVariantsFromDown}>🚧</motion.span>
                                
                                    :   <motion.a target='_blank' rel="noopener noreferrer" href={item.liveDemo} className="demoBtn" variants={itemVariantsFromDown}>
                                            <i className="fa-solid fa-arrow-up-right-from-square"></i> 
                                        </motion.a>
                                
                                }
                            
                                {item.githubURL && (
                                
                                    <motion.a target='_blank' rel="noopener noreferrer" href={item.githubURL} className="demoBtn" variants={itemVariantsFromDown}>
                                        <i className="fa-brands fa-github"></i>
                                    </motion.a>
                                
                                )}
                            
                            </div>
                        
                        </div>
                    
                        <motion.p className="description" variants={itemVariantsFromDown}>{item.description}</motion.p>
                    
                        <motion.h4 className="technologies" variants={itemVariantsFromDown}>Technologies used: <span>{item.technologies}</span></motion.h4>
                    
                        <div className="shots">
                        
                            { shots.length > 0 ? (
                            
                                <div className="shotTitle">
                                
                                    <motion.h4 variants={itemVariantsFromDown}>shots:</motion.h4>
                                
                                    <div className="imagesGroup">
                                    
                                        {shots.map((shot, index) => (
                                        
                                            <motion.div className="image" key={index} onClick={() => setLightboxIndex(index)} variants={itemVariantsFromDown}>
                                            
                                                <img src={process.env.PUBLIC_URL + shot} alt={`${item.title}-image-${index + 1}`} />
                                            
                                            </motion.div>
                                        
                                        ))}
                                    
                                    </div>
                                
                                    { lightboxIndex !== null && (
                                    
                                        <div className="lightbox" onClick={() => setLightboxIndex(null)}>
                                        
                                            <button className="lightboxClose" onClick={() => setLightboxIndex(null)}>
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        
                                            <button className="lightboxArrow lightboxArrowLeft"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setLightboxIndex(i => (i - 1 + shots.length) % shots.length);
                                                }}
                                            >
                                                <i className="fa-solid fa-chevron-left"></i>
                                            </button>
                                        
                                            <img
                                                src={process.env.PUBLIC_URL + shots[lightboxIndex]}
                                                alt="preview"
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        
                                            <button className="lightboxArrow lightboxArrowRight"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setLightboxIndex(i => (i + 1) % shots.length);
                                                }}
                                            >
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </button>
                                        
                                            <div className="lightboxDots" onClick={(e) => e.stopPropagation()}>
                                            
                                                {shots.map((_, index) => (
                                                
                                                    <span key={index} className={`lightboxDot ${index === lightboxIndex ? 'active' : ''}`} onClick={() => setLightboxIndex(index)} />
                                                
                                                ))}
                                            
                                            </div>
                                        
                                        </div>
                                    
                                    )}
                                
                                </div>
                            
                            ) : (
                            
                                <motion.p variants={itemVariantsFromDown} className="Developing">
                                
                                    <i className="fa-solid fa-code"></i>
                                
                                    <span>Project under development</span>
                                
                                    <small>More previews coming soon</small>
                                
                                </motion.p>
                            
                            ) }
                        
                        </div>
                    
                        <motion.div className="projectNav" variants={itemVariantsFromDown}>
                        
                            {prevProject ? (
                            
                                <Link to={`/project/${prevProject.rank}`} className="projectNavBtn projectNavBtn--prev">
                                
                                    <div className="projectNavArrow">
                                        <i className="fa-solid fa-arrow-left"></i>
                                    </div>
                                    
                                    <div className="projectNavInfo">
                                    
                                        <span>Previous</span>
                                    
                                        <h4>{prevProject.title}</h4>
                                    
                                    </div>
                                
                                </Link>
                            
                            ) : <div />}
                        
                            {nextProject ? (
                            
                                <Link to={`/project/${nextProject.rank}`} className="projectNavBtn projectNavBtn--next">
                                
                                    <div className="projectNavInfo">
                                    
                                        <span>Next</span>
                                    
                                        <h4>{nextProject.title}</h4>
                                    
                                    </div>
                                
                                    <div className="projectNavArrow">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                
                                </Link>
                            
                            ) : <div />}
                        
                        </motion.div>
                    
                    </div>
                
                    <motion.div className="text-center d-none d-md-block mt-4" variants={itemVariantsFromDown}>
                        <Link to='/work' className='primaryBtn'>explore all works</Link>
                    </motion.div>
                
                    <motion.div className="btns d-flex justify-content-center gap-2 d-md-none" variants={itemVariantsFromDown}>
                    
                        <motion.button onClick={() => navigate(-1)} className='smallScreenBtn'>Back (Projects)</motion.button>
                    
                        <Link to='/navigate' className='smallScreenBtn'>Navigate</Link>
                    
                    </motion.div>
                
                </div>
            
            </motion.section>
        
            <motion.section className="contact2 section d-md-block d-none"
                variants={listVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
            
                <div className="container">
                
                    <div className="infoTitles text-center d-md-block d-none">
                    
                        <motion.span className="headTitle" variants={itemVariantsFromDown}>contact</motion.span>
                    
                        <motion.h3 className="subTitle" variants={itemVariantsFromDown}>let's discuss your <span className="changeColor">project</span></motion.h3>
                    
                        <motion.p className="paragraph" variants={itemVariantsFromDown}>Let's make something new, different and more meaningful or make things move visual or conceptual</motion.p>
                    
                    </div>
                
                    <div className="row justify-content-center">
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <motion.div className="box linkedIn" variants={itemVariantsFromDown}>
                                <a target='_blank' rel="noopener noreferrer" href={linkedinURL}>LinkedIn</a>
                            </motion.div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <motion.div className="box github" variants={itemVariantsFromDown}>
                                <a target='_blank' rel="noopener noreferrer" href={githubURL}>Github</a>
                            </motion.div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <motion.div className="box gmail" variants={itemVariantsFromDown}>
                                <a target='_blank' rel="noopener noreferrer" href={`mailto:${email}`}>{email}</a>
                            </motion.div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <motion.div className="box whatsapp" variants={itemVariantsFromDown}>
                                <a target='_blank' rel="noopener noreferrer" href={whatsappURL}>Whatsapp</a>
                            </motion.div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <motion.div className="box phone" variants={itemVariantsFromDown}>
                                <a target='_blank' rel="noopener noreferrer" href={`tel:+${phone}`}>+{phone}</a>
                            </motion.div>
                        
                        </div>
                    
                    </div>
                
                    <div className="btns d-flex d-md-none justify-content-center gap-2">
                    
                        <Link to='/info' className='smallScreenBtn'>Back (Info)</Link>
                    
                        <Link to='/skills' className='smallScreenBtn'>Next (Skills)</Link>
                    
                    </div>
                
                </div>
            
            </motion.section>
        
        </>
    
    )
}
