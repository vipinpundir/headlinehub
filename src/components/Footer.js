import React from 'react'
import logo from './logo.png'

const Footer = () => {
    return (
        <footer className="footer bg-body-secondary py-2 text-center" >
            <div className="container">
                <div className="footer-logo ">
                    <img style={{ width: '200px' }} src={logo} alt="App Logo" />
                </div>
                <div>
                    <p> This is news platform that provides the latest and most relevant news from around the world. We gather information from various sources using a free news API, ensuring that you stay up to date with current events, technology, sports, entertainment, and more.</p>
                </div>
            </div>
            <div className="footer-bottom text-danger">
                <p>&copy; {new Date().getFullYear()} HeadlineHub. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer