import { motion } from 'motion/react'
import { itemVariantsFromDown, listVariants } from '../../animations/variants'
import { Link } from 'react-router-dom'

const Experience = () => {

    return (
    
        <motion.section className="experience section"
            variants={listVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
        >
        
            <div className="container">
            
                <div className="infoTitles">
                
                    <motion.h2 className="subTitle text-center"
                        variants={itemVariantsFromDown}>My Work <span className="changeColor">Experience</span></motion.h2>
                
                </div>
            
                <div className="timeline">
                
                    <span className='line d-none d-md-block'></span>
                
                    <div className="row timeline-item align-items-start">
                    
                        <div className="col-12 col-md-5 text-center text-md-end pe-4">
                        
                            <motion.h5 className="fw-bold mb-1" variants={itemVariantsFromDown}>Up Arrow Partners</motion.h5>
                        
                            <motion.span className="small" variants={itemVariantsFromDown}>April 2026 - June 2026  </motion.span>
                        
                        </div>
                    
                        <div className="col-12 col-md-2 d-none d-md-flex justify-content-center">
                        
                            <div className="timeline-dot dot-orange"></div>
                        
                        </div>
                    
                        <div className="cold-12 col-md-5 ps-4">
                        
                            <motion.h5 className="fw-bold text-dark-blue mb-2" variants={itemVariantsFromDown}>Frontend Developer & QA</motion.h5>
                        
                            <ul>
                            
                                <motion.li variants={itemVariantsFromDown}>
                                
                                    <p className="small mb-0 lh-base">
                                        Debugged and resolved 15+ frontend issues across React components, improving 
                                            application stability and reducing UI errors by ~30% during testing. 
                                    </p>
                                
                                </motion.li>
                            
                                <motion.li variants={itemVariantsFromDown}>
                                
                                    <p className="small mb-0 lh-base">
                                        Identified and optimized 3 rendering bottlenecks in rendering logic, improving perceived 
                                            load performance by ~25% and UI responsiveness.  
                                    </p>
                                
                                </motion.li>
                            
                                <motion.li variants={itemVariantsFromDown}>
                                
                                    <p className="small mb-0 lh-base">
                                        Improved SEO structure across 10+ key pages by updating meta tags, page structure, and 
                                            indexing readiness for key pages. 
                                    </p>
                                
                                </motion.li>
                            
                                <motion.li variants={itemVariantsFromDown}>
                                
                                    <p className="small mb-0 lh-base">
                                        Collaborated with a team of 3-4 developers to fix UI inconsistencies across 10+ 
                                            components, enhancing overall user experience.
                                    </p>
                                
                                </motion.li>
                            
                            </ul>
                        
                        </div>
                    
                    </div>
                
                    <div className="row timeline-item align-items-start">
                    
                        <div className="col-12 col-md-5 text-center text-md-end pe-4">
                        
                            <motion.h5 className="fw-bold mb-1" variants={itemVariantsFromDown}>Egyptian Armed Forces</motion.h5>
                        
                            <motion.span className="small" variants={itemVariantsFromDown}>Jan 2025 – March 2026  </motion.span>
                        
                        </div>
                    
                        <div className="col-2 d-none d-md-flex justify-content-center">
                        
                            <div className="timeline-dot dot-yellow"></div>
                        
                        </div>
                    
                        <div className="col-12 col-md-5 ps-4">
                        
                            <motion.h5 className="fw-bold text-dark-blue mb-2" variants={itemVariantsFromDown}>Military Service</motion.h5>
                        
                            {/* <span className="small">Jan 2025 – March 2026  </span> */}
                        
                        </div>
                    
                    </div>
                
                    <div className="row timeline-item align-items-start">
                    
                        <div className="col-12 col-md-5 text-center text-md-end pe-4">
                        
                            <motion.h5 className="fw-bold text-dark-blue mb-1" variants={itemVariantsFromDown}>Taw3ya</motion.h5>
                        
                            <motion.span className="small" variants={itemVariantsFromDown}>July 2024 - Jan 2025</motion.span>
                        
                        </div>
                    
                        <div className="col-2 d-none d-md-flex justify-content-center">
                        
                            <div className="timeline-dot dot-teal"></div>
                        
                        </div>
                    
                        <div className="col-12 col-md-5 ps-4">
                        
                            <motion.h5 className="fw-bold text-dark-blue mb-2" variants={itemVariantsFromDown}>Frontend Developer</motion.h5>
                        
                            <ul>
                            
                                <motion.li variants={itemVariantsFromDown}>
                                
                                    <p className="small mb-0 lh-base">
                                    
                                        Developed and distributed a production-ready Quran web application for a private client 
                                        using React.js, React Router, Bootstrap, and REST APIs, supporting complete Quran 
                                        content across all chapters. 
                                    
                                    </p>
                                
                                </motion.li>
                            
                                <motion.li variants={itemVariantsFromDown}>
                                
                                    <p className="small mb-0 lh-base">
                                    
                                        Implemented chapter navigation, verse search, audio playback, and dynamic routing 
                                        across all 114 Quran chapters, improving content accessibility and user navigation. 
                                    
                                    </p>
                                
                                </motion.li>
                            
                                <motion.li variants={itemVariantsFromDown}>
                                
                                    <p className="small mb-0 lh-base">
                                    
                                        Managed project milestones over a 3-month engagement, delivering the application on 
                                        schedule. 
                                    
                                    </p>
                                
                                </motion.li>
                            
                            </ul>
                        
                        </div>
                    
                    </div>
                
                    <div className="row timeline-item align-items-start">
                    
                        <div className="col-12 col-md-5 text-center text-md-end pe-4">
                        
                            <motion.h5 className="fw-bold text-dark-blue mb-1" variants={itemVariantsFromDown}>Master Web</motion.h5>
                        
                            <motion.span className="small" variants={itemVariantsFromDown}>Nov 2024 - Jan 2025</motion.span>
                        
                        </div>
                    
                        <div className="col-2 d-none d-md-flex justify-content-center">
                        
                            <div className="timeline-dot dot-indigo"></div>
                        
                        </div>
                    
                        <div className="col-12 col-md-5 ps-4">
                        
                            <motion.h5 className="fw-bold text-dark-blue mb-2" variants={itemVariantsFromDown}>Frontend Developer Intern</motion.h5>
                        
                            <ul>
                            
                                <motion.li variants={itemVariantsFromDown}>
                                
                                    <p className="small mb-0 lh-base">
                                    
                                        Converted 3–4 PSD designs into responsive, pixel-perfect web pages using HTML5, 
                                        CSS3, and JavaScript. 
                                    
                                    </p>
                                
                                </motion.li>
                            
                                <motion.li variants={itemVariantsFromDown}>
                                
                                    <p className="small mb-0 lh-base">
                                    
                                        Built responsive UI components for 3–4 projects and incorporated feedback from senior 
                                        developers to improve code quality and maintainability. 
                                    
                                    </p>
                                
                                </motion.li>
                            
                                <motion.li variants={itemVariantsFromDown}>
                                
                                    <p className="small mb-0 lh-base">
                                    
                                        Contributed to 3–4 projects while adhering to company coding standards, improving 
                                        consistency, maintainability, and responsiveness across presented pages.
                                    
                                    </p>
                                
                                </motion.li>
                            
                            </ul>
                        
                        </div>
                    
                    </div>
                
                </div>
            
                <div className="btns d-flex gap-2 justify-content-center">
                
                    <Link to="/navigate" className='smallScreenBtn'>Navigate</Link>
                
                    <Link to='/contact' className='smallScreenBtn'>Next (Links)</Link>
                
                </div>
            
            </div>
        
        </motion.section>
    
    )

}

export default Experience
