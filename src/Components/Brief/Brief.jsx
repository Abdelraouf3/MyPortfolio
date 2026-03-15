import React from 'react'
import PersonalInformation from '../../Apis/PersonalInformation.json'
import '../Home/_Home.scss'
import { Link } from 'react-router-dom';

export default function Brief() {

    const { name, profilePic, title, brief, smallBrief } = PersonalInformation[0];

    return (
        
        <>
        
            <section className="example section d-lg-none d-sm-block">
                
                <div className="container">
                
                    <div className="row justify-content-between align-items-center">
                    
                        <div className="col-lg-5">
                        
                            <div className="left d-none d-lg-block">
                            

                            
                            </div>
                        
                        </div>
                    
                        <div className="col-lg-7 h-100">
                        
                            <div className="personalInformation text-center">
                            
                                <div className="image">
                                
                                    <img src={process.env.PUBLIC_URL + profilePic} alt="Abdelraouf Halaby profile" />
                                
                                </div>
                            
                                <h4 className="name">{name}</h4>
                            
                                <div className="boxShadow d-md-none d-block mt-3">
                            
                                    <h4 className="title">{smallBrief}</h4>

                                </div>
                            
                                <div className="btns d-flex gap-2 justify-content-center">
                                
                                    <Link to="/navigate" className='smallScreenBtn'>Navigate</Link>
                                
                                    <Link to='/contact' className='smallScreenBtn'>Next (Links)</Link>
                                
                                </div>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </div>
            
            </section>
            
            <section className="brief section d-none d-lg-block">
                
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
        
        </>
    
    )
}
