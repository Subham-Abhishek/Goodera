import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const Postjob = () => {
    return (
        <div>
            <Navbar />
            <h1 className="post">This is a Post a Job page</h1>
            <Link to="/"><div className="finder" style={{color: 'black'}}>Find Jobs</div></Link>
        </div>
    )
}
