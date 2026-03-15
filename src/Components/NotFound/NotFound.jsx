import React from 'react'
import { Link } from 'react-router-dom'
import './_NotFound.scss'

export default function NotFound() {

    return (
        <>
        
            <div className="error">
            
                <div className="image">
                
                    <img src='images/error2.png' alt="Page not found illustration" />
                
                </div>
            
                <div className='d-flex justify-content-center align-items-center'>
                
                    <p className='text-center w-75'>The page you are looking for could not be found. The link to this address may be outdated or we may have moved the page since you last bookmarked it.</p>
                
                </div>
            
                <Link to='/' className='btn primaryBtn mt-4'>go back</Link>
            
            </div>
        
        </>
    )
}
