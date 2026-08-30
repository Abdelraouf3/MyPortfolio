import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'motion/react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css'; 
import { listVariants, itemVariantsFromDown, itemVariantsFromUp, itemVariantsFromLeft, itemVariantsFromRight } from '../../animations/variants'
import PersonalInformation from '../../Apis/PersonalInformation.json'
import Works from '../../Apis/Works.json'
import './_Home.scss'

export default function Home() {

    const sorted = [...Works].sort((a, b) => a.rank - b.rank).slice(0, 6)

    const { name, email, phone, profileImg, title, brief, smallBrief, whatsappURL, linkedinURL, githubURL, skills, skillsName } = PersonalInformation[0];

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
        
            <section className="welcome2 section d-none d-md-block">
            
                <div className="container h-100">
                
                    <div className="row align-items-center justify-content-between h-100">
                    
                        <div className="col-md-6">
                
                            <div className="personalInformation"
                                // variants={listVariants}
                                // initial='hidden'
                                // animate='visible'
                                >
                            
                                <span className="title"
                                    // variants={itemVariantsFromDown}
                                    >
                                    {title}
                                </span>
                            
                                <h4 className="name" 
                                    // variants={itemVariantsFromDown}
                                >
                                    {name}
                                </h4>
                            
                                <p className="brief"
                                    // variants={itemVariantsFromDown}
                                >
                                    {brief}
                                </p>
                            
                                <div className="d-flex align-items-center gap-3"
                                    // variants={itemVariantsFromDown}
                                    >
                                
                                    <Link to="/work" className='primaryBtn'>explore projects</Link>
                                
                                    <a target='_blank' rel="noopener noreferrer" href={whatsappURL} className='secondBtn'>contact me <i className="fa-solid fa-arrow-right-long"></i></a>
                                
                                </div>
                            
                            </div>
                        
                        </div>
                    
                        <div className="d-none d-md-block col-md-6">
                        
                            <div className="right">
                            
                                <div className="image text-center">
                                
                                    <span className='beforeImage'
                                    // animate={{
                                    //     scale: [0, 1.1, 1.1, 1, 1],
                                    //     rotate: [0, 0, 180, 180, 0],
                                    //     borderRadius: ["0%", "0%", "50%", "50%", "50%"],
                                    // }}
                                    // transition={{
                                    //     duration: 2,
                                    //     ease: "easeInOut",
                                    //     times: [0, 0.2, 0.5, 0.8, 1],
                                    // }}
                                    ></span>
                                
                                    <img src={process.env.PUBLIC_URL + profileImg}  alt="Personal-image" loading='lazy' />
                                
                                    <div className="followSocial d-flex align-items-center"
                                        // variants={listVariants}
                                        // initial={'hidden'}
                                        // animate={'visible'}
                                    >
                                
                                        <h4 
                                            // variants={itemVariantsFromRight}
                                        >Follow me on: </h4>
                                    
                                        <div className="social d-flex gap-4 align-items-center" 
                                            // variants={itemVariantsFromRight}
                                            >
                                        
                                            <a target='_blank' rel="noopener noreferrer" href={githubURL}><i className="fa-brands fa-github"></i></a>
                                        
                                            <a target='_blank' rel="noopener noreferrer" href={linkedinURL}><i className="fa-brands fa-linkedin-in"></i></a>
                                        
                                        </div>
                                    
                                    </div>
                                
                                    <span className="afterImage"
                                        // animate={{
                                        //     scale: [0, 1.1, 1, 1.1, 1],
                                        //     translateX: ["-300%", "0%"],
                                        //     rotate: [-360, 0],
                                        //     // borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                                        // }}
                                        // transition={{
                                        //     duration: 2,
                                        //     ease: "easeInOut",
                                        //     times: [0, 0.2, 0.5, 0.8, 1],
                                        // }}
                                        >
                                    </span>
                                
                                </div>
                            
                            </div>
                        
                        </div>
                    
                        <div className="shapeOne shape">
                        
                            <img src={process.env.PUBLIC_URL + '/images/shape-1.png'} alt="shape-1" loading='lazy' />
                        
                        </div>
                    
                        <div className="shapeTwo shape">
                        
                            <img src={process.env.PUBLIC_URL + '/images/shape-2.png'} alt="shape-2" loading='lazy' />
                        
                        </div>
                    
                        <div className="shapeThree shape">
                        
                            <img src={process.env.PUBLIC_URL + '/images/shape-3.png'} alt="shape-3" loading='lazy' />
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </section>
        
            {/* <motion.section className="brief section d-none d-lg-block" ref={sectionARef} id='brief'
                variants={listVariants}
                initial='hidden'
                whileInView="visible"
            >
            
                <div className="container">
                
                    <div className="row justify-content-between align-items-center">
                    
                        <div className="col-lg-3">
                        
                            <motion.div className="left"
                                variants={itemVariantsFromLeft}
                            ></motion.div>
                        
                        </div>
                    
                        <div className="col-lg-8 h-100">
                        
                            <div className="personalInformation">
                            
                                <motion.span className="title"
                                    variants={itemVariantsFromUp}
                                >
                                    {title}
                                </motion.span>
                                
                                <motion.h4 className="name" 
                                    variants={itemVariantsFromUp}
                                >
                                    {name}
                                </motion.h4>
                            
                                <motion.p className="brief"
                                    variants={itemVariantsFromDown}>
                                    {brief}
                                </motion.p>
                            
                                <motion.div variants={itemVariantsFromDown}>
                                
                                    <Link to="/work" className='primaryBtn'>explore projects</Link>
                                
                                </motion.div>
                            
                            </div>
                        
                        </div>
                    
                        <div className="col-lg-1 d-lg-flex justify-content-end">
                        
                            <div className="slider">
                            
                                <motion.div className="dotOne dot" variants={itemVariantsFromUp}></motion.div>
                            
                                <div className="dotTwo dot"></div>
                            
                                <motion.div className="dotThree dot" variants={itemVariantsFromDown}></motion.div>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </motion.section> */}
        
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
                                    
                                        <div className="box skillsBox text-center">
                                        
                                            <div className="image">
                                            
                                                <img src={process.env.PUBLIC_URL + skill} alt={skillsName[index]} loading='lazy' />
                                            
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
        
            <section className="experience section d-md-block d-none">
            
                <div className="container">
                
                    <div className="infoTitles">
                    
                        <h2 className="subTitle text-center">My Work <span className="changeColor">Experience</span></h2>
                    
                    </div>
                
                    <div className="timeline">
                    
                        <div className="row timeline-item align-items-start">
                        
                            <div className="col-5 text-end pe-4">
                            
                                <h5 className="fw-bold mb-1">Up Arrow Partners</h5>
                            
                                <span className="small">April 2026 - June 2026  </span>
                            
                            </div>
                        
                            <div className="col-2 d-flex justify-content-center">
                            
                                <div className="timeline-dot dot-orange"></div>
                            
                            </div>
                        
                            <div className="col-5 ps-4">
                            
                                <h5 className="fw-bold text-dark-blue mb-2">Frontend Developer & QA</h5>
                            
                                <ul>
                                
                                    <li>
                                    
                                        <p className="small mb-0 lh-base">
                                            Debugged and resolved 15+ frontend issues across React components, improving 
                                                application stability and reducing UI errors by ~30% during testing. 
                                        </p>
                                    
                                    </li>
                                
                                    <li>
                                    
                                        <p className="small mb-0 lh-base">
                                            Identified and optimized 3 rendering bottlenecks in rendering logic, improving perceived 
                                                load performance by ~25% and UI responsiveness.  
                                        </p>
                                    
                                    </li>
                                
                                    <li>
                                    
                                        <p className="small mb-0 lh-base">
                                            Improved SEO structure across 10+ key pages by updating meta tags, page structure, and 
                                                indexing readiness for key pages. 
                                        </p>
                                    
                                    </li>
                                
                                    <li>
                                    
                                        <p className="small mb-0 lh-base">
                                            Collaborated with a team of 3-4 developers to fix UI inconsistencies across 10+ 
                                                components, enhancing overall user experience.
                                        </p>
                                    
                                    </li>
                                
                                </ul>
                            
                            </div>
                        
                        </div>
                    
                        <div className="row timeline-item align-items-start">
                        
                            <div className="col-5 text-end pe-4">
                            
                                <h5 className="fw-bold mb-1">Egyptian Armed Forces</h5>
                            
                                <span className="small">Jan 2025 – March 2026  </span>
                            
                            </div>
                        
                            <div className="col-2 d-flex justify-content-center">
                            
                                <div className="timeline-dot dot-yellow"></div>
                            
                            </div>
                        
                            <div className="col-5 ps-4">
                            
                                <h5 className="fw-bold text-dark-blue mb-2">Military Service</h5>
                            
                                {/* <span className="small">Jan 2025 – March 2026  </span> */}
                            
                            </div>
                        
                        </div>
                    
                        <div className="row timeline-item align-items-start">
                        
                            <div className="col-5 text-end pe-4">
                            
                                <h5 className="fw-bold text-dark-blue mb-1">Taw3ya</h5>
                            
                                <span className="small">July 2024 - Jan 2025</span>
                            
                            </div>
                        
                            <div className="col-2 d-flex justify-content-center">
                            
                                <div className="timeline-dot dot-teal"></div>
                            
                            </div>
                        
                            <div className="col-5 ps-4">
                            
                                <h5 className="fw-bold text-dark-blue mb-2">Frontend Developer</h5>
                            
                                <ul>
                                
                                    <li>
                                    
                                        <p className="small mb-0 lh-base">
                                        
                                            Developed and distributed a production-ready Quran web application for a private client 
                                            using React.js, React Router, Bootstrap, and REST APIs, supporting complete Quran 
                                            content across all chapters. 
                                        
                                        </p>
                                    
                                    </li>
                                
                                    <li>
                                    
                                        <p className="small mb-0 lh-base">
                                        
                                            Implemented chapter navigation, verse search, audio playback, and dynamic routing 
                                            across all 114 Quran chapters, improving content accessibility and user navigation. 
                                        
                                        </p>
                                    
                                    </li>
                                
                                    <li>
                                    
                                        <p className="small mb-0 lh-base">
                                        
                                            Managed project milestones over a 3-month engagement, delivering the application on 
                                            schedule. 
                                        
                                        </p>
                                    
                                    </li>
                                
                                </ul>
                            
                            </div>
                        
                        </div>
                    
                        <div className="row timeline-item align-items-start">
                        
                            <div className="col-5 text-end pe-4">
                            
                                <h5 className="fw-bold text-dark-blue mb-1">Master Web</h5>
                            
                                <span className="small">Nov 2024 - Jan 2025</span>
                            
                            </div>
                        
                            <div className="col-2 d-flex justify-content-center">
                            
                                <div className="timeline-dot dot-indigo"></div>
                            
                            </div>
                        
                            <div className="col-5 ps-4">
                            
                                <h5 className="fw-bold text-dark-blue mb-2">Frontend Developer Intern</h5>
                            
                                <ul>
                                
                                    <li>
                                    
                                        <p className="small mb-0 lh-base">
                                        
                                            Converted 3–4 PSD designs into responsive, pixel-perfect web pages using HTML5, 
                                            CSS3, and JavaScript. 
                                        
                                        </p>
                                    
                                    </li>
                                
                                    <li>
                                    
                                        <p className="small mb-0 lh-base">
                                        
                                            Built responsive UI components for 3–4 projects and incorporated feedback from senior 
                                            developers to improve code quality and maintainability. 
                                        
                                        </p>
                                    
                                    </li>
                                
                                    <li>
                                    
                                        <p className="small mb-0 lh-base">
                                        
                                            Contributed to 3–4 projects while adhering to company coding standards, improving 
                                            consistency, maintainability, and responsiveness across presented pages.
                                        
                                        </p>
                                    
                                    </li>
                                
                                </ul>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </section>
        
            <section className="work section d-md-block d-none" ref={sectionBRef} id='work'>
            
                <div className="container">
                
                    <div className="infoTitles">
                        
                        <span className="headTitle">Works</span>
                    
                        <h3 className="subTitle">My creative works latest <span className="changeColor">projects</span> </h3>
                    
                        <p className="paragraph">I have selected and mentioned here some of my latest projects to share with you.</p>
                    
                        {/* <div className="btns">
                        
                            <Link to='/work' className='primaryBtn'>show more</Link>
                        
                        </div> */}
                    
                    </div>
                
                    <div className="row justify-content-center">
                    
                        {sorted.map((work) => (
                    
                            <div className="col-md-6 col-lg-4 mb-4" key={work.id}>
                    
                                <div className="project">
                    
                                    <Link to={`/project/${work.id}`} className="view">
                    
                                        <div className="image">
                    
                                            <img
                                                src={process.env.PUBLIC_URL + work.imageCover2}
                                                alt={`${work.title}-image`}
                                                loading='lazy'
                                            />
                    
                                        </div>
                    
                                    </Link>
                    
                                    <div className='project-details'>
                                    
                                        <div className="d-flex justify-content-between align-items-center gap-2">
                                        
                                            <Link to={`/project/${work.id}`} className="view">
                            
                                                <h4 className="title">
                                                    {work.title}
                                                </h4>
                            
                                            </Link>
                                        
                                            {work.status === "in progress" 
                                                && <span className="badge bg-warning text-dark">🚧 Under Development</span>
                                            }
                                        
                                        </div>
                                    
                                        <p className="description">{work.description}</p>
                                    
                                        <div className="technologies-list">
                        
                                            {work.technologies
                                                .split(',')
                                                .map((tech, index) => (
                        
                                                    <span
                                                        key={index}
                                                        className="tech-badge"
                                                    >
                                                        {tech.trim()}
                                                    </span>
                        
                                                ))}
                                        </div>
                        
                                        <div className="project-buttons">
                        
                                            { work.liveDemo.length <= 0 ? 
                                            
                                                <Link to={`/project/${work.id}`} rel="noreferrer" className="primaryBtn">
                                
                                                    View Project Details
                                
                                                </Link>
                                            
                                                :  <a
                                                        href={work.liveDemo}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="primaryBtn"
                                                    >
                                                        Live Demo <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                                    </a> 
                                            }
                                        
                                            { work.liveDemo.length > 0 && ( 
                                            
                                                <a
                                                    href={work.githubURL}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="btn btn-dark github-btn"
                                                >
                                                    <i className="fa-brands fa-github"></i>
                                                </a>
                                            
                                            )  }
                        
                                            
                        
                                        </div>
                                    
                                    </div>
                    
                                </div>
                    
                            </div>
                    
                        ))}
                    
                    </div>
                
                            <div className="text-center d-none d-md-block mt-3">
                                
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
