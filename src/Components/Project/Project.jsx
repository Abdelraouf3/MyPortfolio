import React, { useEffect, useState } from 'react'
import Works from '../../Apis/Works.json'
import PersonalInformation from '../../Apis/PersonalInformation.json'
import './_Project.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Project() {

    const { id } = useParams();

    let navigate = useNavigate();

    const item = Works.find(item => item.id === parseInt(id));

    const [lightboxIndex, setLightboxIndex] = useState(null);
    // null = closed, 0/1/2 = open at that index
    
    // Close on Escape, navigate with arrow keys
    useEffect(() => {
        const handleKey = (e) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowRight') setLightboxIndex(i => (i + 1) % item.shots.length);
            if (e.key === 'ArrowLeft') setLightboxIndex(i => (i - 1 + item.shots.length) % item.shots.length);
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxIndex]);

    // Get current index and prev/next projects
    const currentIndex = Works.findIndex(w => w.id === parseInt(id));
    const prevProject = Works[currentIndex - 1] || null;
    const nextProject = Works[currentIndex + 1] || null;

    const { email, phone, whatsappURL, linkedinURL, githubURL } = PersonalInformation[0];

    if (!item) return <div className='section container'>Item not found</div>;

    return (
    
        <>
        
            <section className="viewProject section">
    
                <div className="container">
                
                    <div className="projectDetails">
                    
                        <div className="image">
                        
                            <img src={process.env.PUBLIC_URL + item.imageCover} alt={item.title} />
                        
                        </div>
                    
                        <div className='d-flex align-items-center justify-content-between'>

                            <h4 className="title">{item.title}</h4>
                        
                            {item.status === "in progress" 
                                ? <span className="badge bg-warning text-dark">🚧 Under Development</span>
                                : <div className="d-flex gap-2">
                                
                                            {item.status === "in progress" 
                                    ? <span className="badge bg-warning text-dark">🚧 Under Development</span>
                                    : <a target='_blank' rel="noopener noreferrer" href={item.liveDemo} className="demoBtn">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
                                      </a>
                                }
                            
                                {item.githubURL && (
                                    <a target='_blank' rel="noopener noreferrer" href={item.githubURL} className="demoBtn">
                                        <i className="fa-brands fa-github"></i> Source Code
                                    </a>
                                )}
                                
                                    </div>
                            }
                        
                        </div>
                    
                        <p className="description">{item.description}</p>
                    
                        <h4 className="technologies">Technologies used: <span>{item.technologies}</span></h4>
                    
                        <div className="shots">
                        
                            <div className="shotTitle">
                            
                                <h4>shots:</h4>
                            
                                {/* <div className="imagesGroup">
                                
                                    <div className="image">
                                    
                                        <img src={process.env.PUBLIC_URL + item.shots[0]} alt={`${item.title}-image`} />
                                    
                                    </div>
                                
                                    <div className="image">
                                    
                                        <img src={process.env.PUBLIC_URL + item.shots[1]} alt={`${item.title}-image-2`} />
                                    
                                    </div>
                                
                                    <div className="image">
                                    
                                        <img src={process.env.PUBLIC_URL + item.shots[2]} alt={`${item.title}-image-3`} />
                                    
                                    </div>
                                
                                </div> */}
                            
                                <div className="imagesGroup">
                                    {item.shots.map((shot, index) => (
                                        <div className="image" key={index} onClick={() => setLightboxIndex(index)}>
                                            <img
                                                src={process.env.PUBLIC_URL + shot}
                                                alt={`${item.title}-image-${index + 1}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Lightbox */}
                                {lightboxIndex !== null && (
                                    <div className="lightbox" onClick={() => setLightboxIndex(null)}>
                                
                                        {/* Close button */}
                                        <button className="lightboxClose" onClick={() => setLightboxIndex(null)}>
                                            <i className="fa-solid fa-xmark"></i>
                                        </button>
                                
                                        {/* Left arrow */}
                                        <button 
                                            className="lightboxArrow lightboxArrowLeft"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLightboxIndex(i => (i - 1 + item.shots.length) % item.shots.length);
                                            }}
                                        >
                                            <i className="fa-solid fa-chevron-left"></i>
                                        </button>
                                
                                        {/* Image */}
                                        <img
                                            src={process.env.PUBLIC_URL + item.shots[lightboxIndex]}
                                            alt="preview"
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                
                                        {/* Right arrow */}
                                        <button
                                            className="lightboxArrow lightboxArrowRight"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setLightboxIndex(i => (i + 1) % item.shots.length);
                                            }}
                                        >
                                            <i className="fa-solid fa-chevron-right"></i>
                                        </button>
                                
                                        {/* Dots indicator */}
                                        <div className="lightboxDots" onClick={(e) => e.stopPropagation()}>
                                            {item.shots.map((_, index) => (
                                                <span
                                                    key={index}
                                                    className={`lightboxDot ${index === lightboxIndex ? 'active' : ''}`}
                                                    onClick={() => setLightboxIndex(index)}
                                                />
                                            ))}
                                        </div>
                                
                                    </div>
                                )}
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                    <div className="projectNav">
                    
                        {prevProject ? (
                            <Link to={`/project/${prevProject.id}`} className="projectNavBtn projectNavBtn--prev">
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
                            <Link to={`/project/${nextProject.id}`} className="projectNavBtn projectNavBtn--next">
                                <div className="projectNavInfo">
                                    <span>Next</span>
                                    <h4>{nextProject.title}</h4>
                                </div>
                                <div className="projectNavArrow">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </div>
                            </Link>
                        ) : <div />}
                    
                    </div>
                
                    <div className="text-center d-none d-md-block">
                        
                            <Link to='/work' className='primaryBtn'>explore all works</Link>
                        
                    </div>
                
                    <div className="btns d-flex justify-content-center gap-2 d-md-none">
                    
                        <Link onClick={() => { navigate(-1) }} className='smallScreenBtn'>Back (Projects)</Link>
                    
                        <Link to='/navigate' className='smallScreenBtn'>Navigate</Link>
                    
                    </div>
                
                </div>
            
            </section>
        
            <section className="contact2 section d-md-block d-none">
                <div className="container">
                    <div className="infoTitles text-center d-md-block d-none">
                        <span className="headTitle">contact</span>
                        <h3 className="subTitle">let's discuss your <span className="changeColor">project</span></h3>
                        <p className="paragraph">Let's make something new, different and more meaningful or make things move visual or conceptual</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="box linkedIn">
                                <a target='_blank' rel="noopener noreferrer" href={linkedinURL}>LinkedIn</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box github">
                                <a target='_blank' rel="noopener noreferrer" href={githubURL}>Github</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box gmail">
                                <a target='_blank' rel="noopener noreferrer" href={`mailto:${email}`}>{email}</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box whatsapp">
                                <a target='_blank' rel="noopener noreferrer" href={whatsappURL}>Whatsapp</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box phone">
                                <a target='_blank' rel="noopener noreferrer" href={`tel:+${phone}`}>+{phone}</a>
                            </div>
                        </div>
                    </div>

                    <div className="btns d-flex justify-content-center gap-2 d-md-none">
                        <Link to='/info' className='smallScreenBtn'>Back (Info)</Link>
                        <Link to='/skills' className='smallScreenBtn'>Next (Skills)</Link>
                    </div>
                </div>
            </section> 
        
        </>
    
    )
}
