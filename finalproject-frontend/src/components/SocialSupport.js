import React from "react";
import {Link, Route} from "react-router-dom";

const SocialSupport = () => {
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

                    <h1>Social Support</h1>
                    <p id="social-head">Leaving the JW organization can be a very lonely and isolating experience. Especially if you are suddenly shunned by your family and friends that are still in the group. Here are some resources that can help you connect with new people that understand what you're going through. </p>

                    <div className="list-parent">
                        <ul><h3>MeetUp</h3>
                            <li><a href={"https://www.meetup.com/"}>MeetUp.com</a></li>
                            <li>There are ex-JW groups in most major cities and some offer virtual meetings as well.</li>
                        </ul>

                        <ul><h3>Reddit</h3>
                            <li><a href={"https://www.reddit.com/"}>Reddit.com</a></li>
                            <li>The main channel is r/exjw.</li>
                            <li>The ex-JW subreddit is a good place to connect with others with similar experiences.</li>
                        </ul>

                        <ul><h3>Facebook Support Groups</h3>
                            <li><a href={"https://www.facebook.com/"}>Facebook.com</a></li>
                            <li>Ex Jehovahs Witnesses Unite</li>
                            <li>Ex JW Open Discussion</li>
                            <li>Watching Watchtower</li>
                            <li>Jehovah's Witnesses Exposed</li>
                        </ul>

                        <ul><h3>Volunteering</h3>
                            <li>Choose a cause you are passionate about and look for volunteer opportunities in your community.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialSupport;