import React from "react";
import  {Link, Route} from "react-router-dom";

const Beliefs = () => {
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
            <div className="belief-body main-body">
                <div className="belief-content content">
                    <h1>Questionable Beliefs</h1>
                    <p id="belief-header">There are many Watchtower beliefs that upon closer review are not scriptural or backed up by scientific or archeological evidence. Here are a few examples to review.</p>
                    <div className="belief-container">
                        <ul className="belief-list">
                            <li><a href={"http://www.jwfacts.com/watchtower/607-7-times.php"}>1914 Chronology</a></li>
                            <li><a href={"http://www.jwfacts.com/watchtower/birthdays.php"}>Birthday Celebrations</a></li>
                            <li><a href={"http://www.jwfacts.com/watchtower/blood-transfusions.php"}>Blood Transfusions</a></li>
                            <li><a href={"http://www.jwfacts.com/watchtower/cross-or-stake.php"}>The Cross vs. Stake</a></li>
                            <li><a href={"http://www.jwfacts.com/watchtower/144000.php"}>The 144,000</a></li>
                            <li><a href={"http://www.jwfacts.com/watchtower/disfellowship-shunning.php"}>Disfellowshipping and Shunning</a></li>
                        </ul>
                        <div className="belief-images">
                            <img src="/images/noblood.jpg" alt="blood card" id="blood" />
                            <img src="/images/birthday.jpg" alt="birthday cake" id="birthday" />
                            <img src="/images/144000.jpg" alt="144000" id="144000" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beliefs