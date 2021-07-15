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
                        <Link to="/glossary">Glossary of Terms</Link>
                    </div>
                </div>
            </div>
            <div className="main-body">
                <div className="content">
                    <h1>De-Programming Resources</h1>
                    <p id="deprogram-head">These resources can help you start to reclaim your mind and confirm why leaving the Jehovah's Witnesses is the right decision. </p>

                    <div className="list-parent">
                        <ul className="deprogram-list"><h3>YouTube Channels</h3>
                            <li>Lloyd Evans</li>
                            <li>Telltale</li>
                            <li>Mentally Diseased</li>
                            <li>ExJW Critical Thinker</li>
                            <li>Jay the Comedian</li>
                        </ul>

                        <ul className="deprogram-list"><h3>TV Programs</h3>
                            <li><em>Seduced: Inside the NXIVM Cult</em></li>
                            <li><em>The Vow</em></li>
                            <li><em>Leah Remini: Scientology and the Aftermath</em> - Season 3 Special</li>
                            <li><em>Cults and Extreme Belief</em> - Episode 2</li>
                            <li><em>The Witnesses</em></li>
                        </ul>

                        <ul className="deprogram-list"><h3>Movies</h3>
                            <li><em>Apostasy (2017)</em> Directed by Daniel Kokotajlo</li>
                            <li><em>Worlds Apart (2008)</em> Directed by Niels Arden Oplev</li>
                            <li><em>The Children Act (2018)</em> Directed by Richard Evre</li>
                            <li><em>Worldly Girl (2016)</em> Directed by Marco Danieli</li>
                        </ul>

                        <ul className="deprogram-list"><h3>Websites</h3>
                            <li><a href={"https://jwwatch.org/"}>JW Watch</a></li>
                            <li><a href={"https://jwfacts.com/"}>JW Facts</a></li>
                            <li><a href={"https://jwleaks.org/"}>JW Leaks</a></li>
                        </ul>

                        <ul className="deprogram-list"><h3>Books</h3>
                            <li><em>The Reluctant Apostate</em> by Lloyd Evans</li>
                            <li><em>Crisis of Conscience</em> by Raymond Franz</li>
                            <li><em>In Search of Christian Freedom</em> by Raymond Franz</li>
                            <li><em>The Gentile Times Reconsidered</em> by Carl O. Johnson</li>
                            <li><em>Leaving the Witness:Exiting a Religion and Finding a Life</em> by Amber Scorah</li>
                            <li><em>Exiting the JW Cult: A Healing Handbook</em> by Bonnie Zieman</li>
                            <li><em>Shunned: A Survival Guide</em> by Bonnie Zieman</li>
                            <li><em>Cracking the Cult Code for Therapists: What Every Cult Victim Wants Their Therapist to Know</em> by Bonnie Zieman</li>
                        </ul>
                        <ul className="deprogram-list"><h3>Podcasts</h3>
                            <li><em>This JW Life</em></li>
                            <li><em>Ex-Jehovah's Witnesses-Critical Thinkers</em></li>
                            <li><em>Shunned</em></li>
                            <li><em>The Uncultured Podcast</em></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DeProgram