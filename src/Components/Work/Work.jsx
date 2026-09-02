import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react'
import { itemVariantsFromDown, listVariants } from '../../animations/variants';
import PersonalInformation from '../../Apis/PersonalInformation.json';
import Works from '../../Apis/Works.json'

export default function Work() {

    const dataWork = Works;

    const { email, phone, whatsappURL, linkedinURL, githubURL } = PersonalInformation[0] || {};

    const navigate = useNavigate()

    const categories = [
        { label: 'All', key: 'all' },
        { label: 'React Projects', key: 'React Projects' },
        { label: 'Vanilla JS', key: 'Vanilla JS' },
        { label: 'HTML & CSS', key: 'HTML & CSS' },
    ]

    const [activeCategory, setActiveCategory] = useState('all')

    const sorted = [...dataWork].sort((a, b) => a.rank - b.rank)

    const filtered = activeCategory === 'all'
        ? sorted
        : sorted.filter(w => w.category === activeCategory)

    return (
        <>
        
            <motion.section className='work section'
                variants={listVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
            
                <div className="container">
                
                    <div className="infoTitles d-none d-md-block">
                    
                        <motion.span className="headTitle" variants={itemVariantsFromDown}>Work</motion.span>
                    
                    </div>
                
                    <div className="boxShadow d-md-none d-block">
                    
                        <motion.span className="title" variants={itemVariantsFromDown}>work</motion.span>
                    
                    </div>
                
                    <div className="filterGroup d-none d-md-flex">
                    
                        {categories.map(cat => (
                        
                            <motion.button key={cat.key} className={`filterBtn ${activeCategory === cat.key ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.key)} variants={itemVariantsFromDown}
                            >
                                <span>
                                
                                    {cat.label}
                                
                                    <span className="count">
                                    
                                        {cat.key === 'all'
                                            ? dataWork.length
                                            : dataWork.filter(w => w.category === cat.key).length}
                                    
                                    </span>
                                
                                </span>
                            
                            </motion.button>
                        
                        ))}
                    
                    </div>
                
                    <div className="row justify-content-center">
                    
                        {filtered.map((work) => (
                        
                            <motion.div className="col-md-6 col-lg-4 mb-4" key={work.id} variants={itemVariantsFromDown}>
                            
                                <div className="project">
                                
                                    <Link to={`/project/${work.rank}`} className="view">
                                    
                                        <div className="image">
                                        
                                            <img
                                                src={process.env.PUBLIC_URL + work.imageCover}
                                                alt={`${work.title}-image`}
                                            />
                                        
                                        </div>
                                    
                                    </Link>
                                
                                    <div className='project-details'>
                                    
                                        <div className="d-flex justify-content-between align-items-center gap-2">
                                        
                                            <Link to={`/project/${work.rank}`} className="view">
                                            
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
                                        
                                            {work.technologies.split(',').map((tech, index) => (
                                            
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
                                            
                                                <Link to={`/project/${work.rank}`} rel="noreferrer" className="primaryBtn">
                                                
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
                            
                            </motion.div>
                        
                        ))}
                    
                    </div>
                
                    <div className="btns d-flex justify-content-center gap-2 d-md-none">
                    
                        <button onClick={() => navigate(-1)} className='smallScreenBtn'>Back</button>
                    
                        <Link to='/navigate' className='smallScreenBtn'>Navigate</Link>
                    
                    </div>
                
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
                
                    <div className="btns d-flex justify-content-center gap-2">
                    
                        <Link to='/info' className='smallScreenBtn'>Back (Info)</Link>
                    
                        <Link to='/skills' className='smallScreenBtn'>Next (Skills)</Link>
                    
                    </div>
                
                </div>
            
            </motion.section>
        
        </>
    )
}
