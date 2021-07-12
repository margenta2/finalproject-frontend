import React from "react";
import {Link, Route} from "react-router-dom";

const DeProgram = () => {
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
            <h1>De-Programming Resources</h1>
            <ul>YouTube Channels
                <li>Lloyd Evans</li>
                <li>Telltale</li>
                <li>Mentally Diseased</li>
            </ul>
            <ul>Books
                <li>The Reluctant Apostate by Lloyd Evans</li>
                <li>Crisis of Conscience by Raymond Franz</li>
                <li>In Search of Christian Freedom by Raymond Franz</li>
                <li>The Gentile Times Reconsidered by Carl O. Johnson</li>
                <li>Exiting the JW Cult: A Healing Handbook by Bonnie Zieman</li>
                <li>Shunned: A Survival Guide by Bonnie Zieman</li>
                <li>Cracking the Cult Code for Therapists: What Every Cult Victim Wants Their Therapist to Know by Bonnie Zieman</li>
            </ul>
            <ul>Podcasts
                <li>Shunned</li>
            </ul>
        </div>

    )
}

export default DeProgram