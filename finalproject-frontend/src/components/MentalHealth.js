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
                        <Link to="/glossary">Glossary of Terms</Link>
                    </div>
                </div>
            </div>
            <div className="main-body">
                <div className="content">

                    <h1>Mental Health Resources</h1>
                    <p id="mental-head">Getting counseling and mental health help is a critical part of healing after an exit from Jehovah's Witnesses. Here are some resources that can help.</p>

                    <div className="list-parent">
                        <ul className="mental-list"><h3>General Mental Health Resources</h3>
                            <li><a href={"https://www.nimh.nih.gov/health/"}>National Institute of Mental Health</a></li>
                            <li><a href={"https://www.mentalhealth.gov/"}>MentalHealth.gov</a></li>
                        </ul>

                        <ul className="mental-list"><h3>Suicide Prevention</h3>
                            <li><a href={"https://metanoia.org/suicide"}>Metanoia</a></li>
                            <li><a href={"https://suicidepreventionlifeline.org"}>Suicide Prevention Lifeline</a></li>
                            <li><a href={"http://crisischat.org"}>Life Crisis Chat</a></li>
                            <li>National Suicide Prevention Hotline: 1-800-273-8255</li>
                        </ul>

                        <ul className="mental-list"><h3>Books</h3>
                            <li><em>Combatting Cult Mind Control</em> by Steven Hassan</li>
                            <li><em>The Psychology of Religion: An Empirical Approach</em> by Barnard Spilka</li>
                            <li><em>Exiting the JW Cult: A Healing Handbook</em> by Bonnie Zieman</li>
                            <li><em>Cracking the Cult Code for Therapists:What Every Cult Victim Wants Their Therapist to Know</em> by Bonnie Zieman</li>
                        </ul>

                        <ul className="mental-list"><h3>Counseling Resources</h3>
                            <li><a href={"https://www.recoveringfromreligion.org/#rfr-welcome"}>Recovering from Religion</a></li>
                            <li><a href={"https://culteducation.com/directory-of-cult-recovery-resources.htm"}>Cult Education</a></li>
                        </ul>

                        <ul className="mental-list"><h3>Meditation YouTube Channels</h3>
                            <li>Goodful</li>
                            <li>Calm</li>
                            <li>Tara Brach</li>
                            <li>Great Meditation</li>
                            <li>Headspace</li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MentalHealth