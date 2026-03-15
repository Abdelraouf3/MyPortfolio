import React, { useEffect, useRef, useState } from 'react'
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/css'; 
import PersonalInformation from '../../Apis/PersonalInformation.json'
import Works from '../../Apis/Works.json'
import "../Work/_Work.scss"
import { Link, useLocation } from 'react-router-dom'
import './_Home.scss'

export default function Home() {

    const [dataWork] = useState(Works);

    const sorted = [...Works].sort((a, b) => a.rank - b.rank).slice(0, 6)

    const { name, email, phone, profileImg, title, brief, smallBrief, facebookURL, whatsappURL, linkedinURL, githubURL, skills, skillsName } = PersonalInformation[0];

    const { hash } = useLocation();
    const sectionARef = useRef(null);
    const sectionBRef = useRef(null);

    useEffect(() => {
        if (hash === '#brief' && sectionARef.current) {
        sectionARef.current.scrollIntoView({ behavior: 'smooth' });
        }
        if (hash === '#work' && sectionBRef.current) {
        sectionBRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hash]);

    // To make first section take margin top 
    useEffect(() => {
        const sections = document.querySelectorAll('section');
        let firstVisibleSection = null;
    
        // Loop through sections to find the first visible one
        sections.forEach((section) => {
            const isHidden = window.getComputedStyle(section).display === 'none';
            if (!isHidden && !firstVisibleSection) {
                firstVisibleSection = section;
            }
        });
        
            // Apply margin to the first visible section
            if (firstVisibleSection) {
            firstVisibleSection.style.paddingTop = '100px';
            }
        }, []);


    return (
        <>
                    
                        {/* <section className="welcome section d-none d-md-block">
                        
                            <div className="container">
                            
                                <div className="row align-items-center justify-content-between">
                                
                                    <div className="col-md-6">
                            
                                        <div className="personalInformation">
                                        
                                            <span className="title">{title}</span>
                                        
                                            <h4 className="name">{name}</h4>
                                        
                                            <p className="brief">
                                                {smallBrief}
                                            </p>
                                        
                                            <div className="d-flex align-items-center gap-3">
                                            
                                                <Link to="/work" className='primaryBtn'>explore projects</Link>
                                            
                                                <Link target='_blank' to={whatsappURL} className='secondBtn'>contact me <i className="fa-solid fa-arrow-right-long"></i></Link>
                                            
                                            </div>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <div className="d-none d-md-block col-md-6">
                                    
                                        <div className="right">
                                        
                                            <div className="image text-center">
                                            
                                                <img src={profileImg}  alt="" />
                                            
                                                <div className="followSocial d-flex align-items-center">
                                            
                                                    <h4>Follow me on: </h4>
                                                
                                                    <div className="social d-flex gap-4 align-items-center">
                                                    
                                                        <Link target='_blank' to={facebookURL}><i className="fa-brands fa-facebook-f"></i></Link>
                                                    
                                                        <Link target='_blank' to={githubURL}><i className="fa-brands fa-github"></i></Link>
                                                    
                                                        <Link target='_blank' to={linkedinURL}><i className="fa-brands fa-linkedin-in"></i></Link>
                                                    
                                                    </div>
                                                
                                                </div>
                                            
                                            </div>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <div className="shapeOne shape">
                                    
                                        <img src={shapeOne} alt="" />
                                    
                                    </div>
                                
                                    <div className="shapeTwo shape">
                                    
                                        <img src={shapeTwo} alt="" />
                                    
                                    </div>
                                
                                    <div className="shapeThree shape">
                                    
                                        <img src={shapeThree} alt="" />
                                    
                                    </div>
                                
                                </div>
                            
                            </div>
                        
                        </section> */}
                    
                        <section className="welcome2 section d-none d-md-block">
                        
                            <div className="container">
                            
                                <div className="row align-items-center justify-content-between">
                                
                                    <div className="col-md-6">
                            
                                        <div className="personalInformation">
                                        
                                            <span className="title">{title}</span>
                                        
                                            <h4 className="name">{name}</h4>
                                        
                                            <p className="brief">
                                                {smallBrief}
                                            </p>
                                        
                                            <div className="d-flex align-items-center gap-3">
                                            
                                                <Link to="/work" className='primaryBtn'>explore projects</Link>
                                            
                                                <a target='_blank' rel="noopener noreferrer" href={whatsappURL} className='secondBtn'>contact me <i className="fa-solid fa-arrow-right-long"></i></a>
                                            
                                            </div>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <div className="d-none d-md-block col-md-6">
                                    
                                        <div className="right">
                                        
                                            <div className="image text-center">
                                            
                                                <img src={process.env.PUBLIC_URL + profileImg}  alt="" />
                                            
                                                <div className="followSocial d-flex align-items-center">
                                            
                                                    <h4>Follow me on: </h4>
                                                
                                                    <div className="social d-flex gap-4 align-items-center">
                                                    
                                                        <a target='_blank' rel="noopener noreferrer" href={facebookURL}><i className="fa-brands fa-facebook-f"></i></a>
                                                    
                                                        <a target='_blank' rel="noopener noreferrer" href={githubURL}><i className="fa-brands fa-github"></i></a>
                                                    
                                                        <a target='_blank' rel="noopener noreferrer" href={linkedinURL}><i className="fa-brands fa-linkedin-in"></i></a>
                                                    
                                                    </div>
                                                
                                                </div>
                                            
                                            </div>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <div className="shapeOne shape">
                                    
                                        <img src={process.env.PUBLIC_URL + 'images/shape-1.png'} alt="" />
                                    
                                    </div>
                                
                                    <div className="shapeTwo shape">
                                    
                                        <img src={process.env.PUBLIC_URL + 'images/shape-2.png'} alt="" />
                                    
                                    </div>
                                
                                    <div className="shapeThree shape">
                                    
                                        <img src={process.env.PUBLIC_URL + 'images/shape-3.png'} alt="" />
                                    
                                    </div>
                                
                                </div>
                            
                            </div>
                        
                        </section>
                    
                        <section className="brief section d-none d-lg-block" ref={sectionARef} id='brief'>
                        
                            <div className="container">
                            
                                <div className="row justify-content-between align-items-center">
                                
                                    <div className="col-lg-3">
                                    
                                        <div className="left"></div>
                                    
                                    </div>
                                
                                    <div className="col-lg-8 h-100">
                                    
                                        <div className="personalInformation">
                                        
                                            <span className="title">{title}</span>
                                            
                                            <h4 className="name">{name}</h4>
                                        
                                            <p className="brief">
                                                {brief}
                                            </p>
                                        
                                            <Link to="/work" className='primaryBtn'>explore projects</Link>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <div className="col-lg-1 d-lg-flex justify-content-end">
                                    
                                        <div className="slider">
                                        
                                            <div className="dotOne dot"></div>
                                        
                                            <div className="dotTwo dot"></div>
                                        
                                            <div className="dotThree dot"></div>
                                        
                                        </div>
                                    
                                    </div>
                                
                                </div>
                            
                            </div>
                        
                        </section>
                    
                        {/* <section className="skills section d-md-block d-none" ref={sectionARef} id='skills'>
                        
                            <div className="container">
                            
                                <div className="infoTitles infoTitles2">
                                
                                    <span className="headTitle">my skills</span>
                                
                                    <h3 className="subTitle">Why hire me for your <span className="changeColor">project?</span> </h3>
                                
                                    <p className="paragraph">I create engaging and responsive user interfaces that enhance user experience and meet business objectives.</p>
                                
                                    <div className="btns">
                                    
                                        <Link to='/contact' className='primaryBtn'>hire me</Link>
                                    
                                    </div>
                                
                                </div>
                            
                                <div className="row justify-content-center align-items-center">
                                
                                    {skills.map( (skill, index) => (
                                            
                                            <div className="col-md-6 col-lg-3" key={`${skill}-${index}`}>
                                    
                                                <div className="box text-center">
                                                
                                                    <div className="image">
                                                    
                                                        <img src={skill} width={100} alt={skillName[index]} />
                                                    
                                                    </div>
                                                
                                                    <h4 className='personalSkill'>{skillName[index]}</h4>
                                                
                                                </div>
                                            
                                            </div>
                                        ) )}
                                
                                </div>
                            
                            </div>
                        
                        </section> */}
                    
                        <section className="skills section d-md-block d-none">
                        
                            <div className="container">
                            
                                <div className="row justify-content-center align-items-center">
                                
                                    <div className="col-lg-4">
                                    
                                        <div className="infoTitles">
                                    
                                            <span className="headTitle">my skills</span>
                                        
                                            <h3 className="subTitle">Why hire me for your <span className="changeColor">project?</span> </h3>
                                        
                                            <p className="paragraph">I create engaging and responsive user interfaces that enhance user experience and meet business objectives.</p>
                                        
                                            <div className="btns">
                                            
                                                <Link to='/contact' className='primaryBtn'>hire me</Link>
                                            
                                            </div>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <div className="col-lg-8">
                                    
                                        <div className="row justify-content-center align-items-center">
                                        
                                            {skills.map( (skill, index) =>  (
                                                
                                                <div className="col-md-6 col-lg-3" key={`${skill}-${index}`}>
                                        
                                                    <div className="box text-center">
                                                    
                                                        <div className="image">
                                                        
                                                            <img src={process.env.PUBLIC_URL + skill} width={100} alt={skillsName[index]} />
                                                        
                                                        </div>
                                                    
                                                        <h4 className='personalSkill'>{skillsName[index]}</h4>
                                                    
                                                    </div>
                                                
                                                </div>
                                            
                                            ) )}
                                        
                                        </div>
                                    
                                    </div>
                                
                                </div>
                            
                            </div>
                        
                        </section>
                    
                        {/* <section className="portfolio section d-md-block d-none" ref={sectionBRef} id='portfolio'>  
                        
                            <div className="container">
                            
                                <div className="row justify-content-center">
                                    
                                    <div className="col-lg-4">
                                    
                                        <div className="infoTitles">
                                    
                                            <span className="headTitle">portfolio</span>
                                        
                                            <h3 className="subTitle">My creative works latest <span className="changeColor">projects</span> </h3>
                                        
                                            <p className="paragraph">I have selected and mentioned here some of my latest projects to share with you.</p>
                                        
                                            <div className="btns">
                                            
                                                <Link to='/work' className='primaryBtn'>show more</Link>
                                            
                                            </div>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <div className="col-lg-8">
                                    
                                        <Splide
                                            options={{
                                                type: 'loop',
                                                drag: 'free',        // Enable free dragging
                                                freeScroll: true,    // Enable free scrolling
                                                perPage: 3,          // Number of slides to show per page
                                                gap: '1rem',         // Gap between slides
                                                pagination: false,   // Disable pagination if not needed
                                            }}
                                            >
                                        
                                            {dataWork.map( (Works, index) => (
                                        
                                                    <SplideSlide key={index}>
                                                        <img src={Works.image} alt={`Slide 1`} />
                                                    </SplideSlide>
                                        
                                                ) )}
                                    
                                        </Splide>
                                    
                                    </div>
                                
                                </div>
                            
                            </div>
                        
                        </section> */}
                    
                        <section className="work section d-md-block d-none" ref={sectionBRef} id='work'>
                        
                            <div className="container">
                            
                                <div className="infoTitles">
                                    
                                    <span className="headTitle">portfolio</span>
                                
                                    <h3 className="subTitle">My creative works latest <span className="changeColor">projects</span> </h3>
                                
                                    <p className="paragraph">I have selected and mentioned here some of my latest projects to share with you.</p>
                                
                                    <div className="btns">
                                    
                                        <Link to='/work' className='primaryBtn'>show more</Link>
                                    
                                    </div>
                                
                                </div>
                            
                                <div className="row justify-content-center">
                                
                                    {sorted.map( (work) => (
                                    
                                            <div className="col-md-6" key={work.id}>
                                            
                                                <Link to={`/project/${work.id}`} className='view'>
                                                
                                                    <div className="project text-center">
                                                    
                                                        <div className="image">
                                                        
                                                            <img src={process.env.PUBLIC_URL + work.imageCover} alt={`${work.title}-image`} />
                                                        
                                                        </div>
                                                    
                                                        <h4 className="title">{work.title}</h4>
                                                    
                                                        <h4 className="technologies">{work.technologies}</h4>
                                                    
                                                    </div>
                                                
                                                </Link>
                                            
                                            </div>
                                    
                                        ) )}
                                
                                </div>
                            
                                        <div className="text-center d-none d-md-block">
                                                                
                                                                    <Link to='/work' className='primaryBtn'>explore all works</Link>
                                                                
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
                    
                        <section className="welcomeScreen section d-sm-block d-md-none">
                        
                            <div className="container">
                            
                                <div className="d-flex align-items-center justify-content-center">
                                
                                    <div className="text-center">
                                    
                                        <h4>welcome</h4>
                                    
                                        <Link to='info' className='smallScreenBtn'>start</Link>
                                    
                                    </div>
                                
                                </div>
                            
                            </div>
                        
                        </section>
        
        </>
    )
}
