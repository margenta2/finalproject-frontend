import React from "react";
import {Link, Route } from "react-router-dom";

const MentalHealth = () => {
    return (
        <div>
            <div  className="navbar">
                <Link to="/">Home</Link>
                <Link to="/posts">Message Board</Link>
                <div className="dropdown">
                    <button className="dropbtn">Menu
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/about">About</Link>
                        <Link to="/beliefs">Beliefs</Link>
                        <Link to="/deprogram">De-Programming</Link>
                        <Link to="/mentalhealth">Mental Health</Link>
                        <Link to="/socialsupport">Social Support</Link>
                        <Link to="/humor">Humor</Link>
                        <Link to="/statistics">Statistics</Link>
                        <Link to="/glossary">Glossary of Terms</Link>
                    </div>
                </div>
            </div>
            <h1>Mental Health Resources</h1>
            <ul>Online Resources
                <li><a href={"https://www.nimh.nih.gov/health/"}>National Institute of Mental Health</a></li>
                <li><a href={"https://www.mentalhealth.gov/"}>MentalHealth.gov</a></li>
            </ul>
            <ul>Suicide Prevention
                <li><a href={"https://metanoia.org/suicide"}>Metanoia</a></li>
                <li><a href={"https://suicidepreventionlifeline.org"}>Suicide Prevention Lifeline</a></li>
                <li><a href={"http://crisischat.org"}>Life Crisis Chat</a></li>
                <li>National Suicide Prevention Hotline: 1-800-273-8255</li>
            </ul>
            <ul>Books
                <li>Combatting Cult Mind Control by Steven Hassan</li>
                <li>The Psychology of Religion: An Empirical Approach by</li>
            </ul>
            <ul>Counseling
                <li><a href={"https://www.recoveringfromreligion.org/#rfr-welcome"}>Recovering from Religion</a></li>
                <li><a href={"https://culteducation.com/directory-of-cult-recovery-resources.htm"}>Cult Education</a></li>
            </ul>
        </div>
    )
}

export default MentalHealth