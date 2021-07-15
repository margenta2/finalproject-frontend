import React, { Component } from "react";
import {Link, Route} from "react-router-dom";

const Humor = () => {
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
            <div className="humor-body">
                <div className="humor-container">
                    <h1>The Funnies</h1>
                    <p>Sometimes we just need to laugh...</p>

                    <div className="humor-content">
                        <h3>Funny Videos</h3>
                        <a href={"https://www.youtube.com/watch?v=Xh6JdkXn5VY&list=PLkzrUMKiXNLLATLSM3mRoXo0etLsKNN2r"}>Pillowgate</a>
                        <a href={"https://www.youtube.com/watch?v=1bbuNsxWkDo"}>Bottlegate</a>
                        <a href={"https://www.youtube.com/watch?v=gMDcRCsVOIU&list=PLkzrUMKiXNLLRqqV3A1IAsT1804w3xKpU"}>The Bunker</a>
                        <a href={"https://www.youtube.com/watch?v=HCCckKkgpxQ"}>Tight Pants Talk</a>
                        <a href={"https://www.youtube.com/watch?v=OgmdF-0YGyU"}>Prank Call to Tony Morris</a>
                        <a href={"https://www.youtube.com/watch?v=JizXyahDZkM"}>Elder Training</a>
                    </div>

                    <img src="/images/truth.jpg" alt="truthmeme" className="humor-img" />
                    <img src="/images/armageddon.jpg" alt="armageddon" className="humor-img"/>
                    <img src="/images/firstbirthday.png" alt="birthday" className="humor-img"/>
                    <img src="/images/jworigin.png" alt="jworigin" className="humor-img"/>
                    <img src="/images/prophfail.jpg" alt="prophecy fail" className="humor-img" />
                    <img src="/images/shunning.jpg" alt="shunning" className="humor-img" />

                </div>

            </div>
        </div>
    )
}

export default Humor;