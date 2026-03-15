import React, { useState } from 'react'
import Works from '../../Apis/Works.json'
import PersonalInformation from '../../Apis/PersonalInformation.json'
import "./_Work.scss"
import { Link, useNavigate } from 'react-router-dom';

export default function Work() {

    const dataWork = Works;

    const { email, phone, whatsappURL, linkedinURL, githubURL } = PersonalInformation[0];

    const navigate = useNavigate()

    // ── Filter State ──────────────────────────────────────────
    const categories = [
        { label: 'All', key: 'all' },
        { label: 'React Projects', key: 'React Projects' },
        { label: 'Web Apps', key: 'Web Apps' },
        { label: 'Landing Pages', key: 'Landing Pages' },
    ]

    const [activeCategory, setActiveCategory] = useState('all')

    const sorted = [...dataWork].sort((a, b) => a.rank - b.rank)

    const filtered = activeCategory === 'all'
        ? sorted
        : sorted.filter(w => w.category === activeCategory)
    // ──────────────────────────────────────────────────────────

    return (
        <>
        
            <section className='work section'>
            
                <div className="container">
                
                    <div className="infoTitles d-none d-md-block">
                        <span className="headTitle">Work</span>
                    </div>
                
                    <div className="boxShadow d-md-none d-block">
                        <span className="title">work</span>
                    </div>

                    {/* ── Filter Buttons ───────────────────────────────────── */}
                    <div className="filterGroup d-none d-md-flex">
                        {categories.map(cat => (
                            <button
                                key={cat.key}
                                className={`filterBtn ${activeCategory === cat.key ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat.key)}
                            >
                                <span>
                                    {cat.label}
                                    <span className="count">
                                        {cat.key === 'all'
                                            ? dataWork.length
                                            : dataWork.filter(w => w.category === cat.key).length}
                                    </span>
                                </span>
                            </button>
                        ))}
                    </div>
                    {/* ──────────────────────────────────────────────────────── */}
                
                    <div className="row align-items-baseline">
                    
                        {/* ── Active project list (with filter) ────────────── */}
                        {filtered.map((work) => (
                            <div className="col-lg-6" key={work.id}>
                                <Link to={`/project/${work.id}`} className='view'>
                                    <div className="project">
                                        <div className="image">
                                            <img src={process.env.PUBLIC_URL + work.imageCover} alt={work.title} />
                                        </div>
                                        <h4 className="title">{work.title}</h4>
                                        <h4 className="technologies">{work.technologies}</h4>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        {/* ──────────────────────────────────────────────────── */}

                        {/* ── Original code (no filter) — kept for reference ──
                        {dataWork.map((work) => (
                            <div className="col-lg-6" key={work.id}>
                                <Link to={`/project/${work.id}`} className='view'>
                                    <div className="project">
                                        <div className="image">
                                            <img src={process.env.PUBLIC_URL + work.imageCover} alt="" />
                                        </div>
                                        <h4 className="title">{work.title}</h4>
                                        <h4 className="technologies">{work.technologies}</h4>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        ── End original code ────────────────────────────── */}
                    
                    </div>
                
                    <div className="btns d-flex justify-content-center gap-2 d-md-none">
                        <button onClick={() => navigate(-1)} className='smallScreenBtn'>Back</button>
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
                                <a rel="noopener noreferrer" href={linkedinURL}>LinkedIn</a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box github">
                                <a rel="noopener noreferrer" href={githubURL}>Github</a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box gmail">
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box whatsapp">
                                <a rel="noopener noreferrer" href={whatsappURL}>Whatsapp</a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="box phone">
                                <a href={`tel:+${phone}`}>+{phone}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>
    )
}
