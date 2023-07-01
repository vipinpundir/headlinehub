import React from 'react'
import logo from './logo.png'
import NewsApi from './NewsApi'
import { Route, Link, Routes } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'><img src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link className="nav-link" to='/business'>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/technology'>Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/entertainment'>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/sports'>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/health'>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/science'>Science</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>


            <Routes>
                <Route exact path='/' element={<NewsApi key='general' category='General' />} />
                <Route exact path='/business' element={<NewsApi key='business' category='Business' />} />
                <Route exact path='/technology' element={<NewsApi key='technology' category='Technology' />} />
                <Route exact path='/entertainment' element={<NewsApi key='entertainment' category='Entertainment' />} />
                <Route exact path='/sports' element={<NewsApi key='sports' category='Sports' />} />
                <Route exact path='/health' element={<NewsApi key='health' category='Health' />} />
                <Route exact path='/science' element={<NewsApi key='science' category='Science' />} />
            </Routes>



        </>
    )
}

export default Navbar