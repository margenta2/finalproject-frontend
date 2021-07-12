import React from "react";
import {Link, Route} from "react-router-dom";

const Glossary = () => {
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
            <h1>Glossary</h1>
            <p>List of commonly used terms in JW and ex-JW community</p>
            <ul>
                <li>Apostate</li>
                <li>ARC(Australia Royal Commission)</li>
                <li>Armageddon</li>
                <li>Babylon the Great</li>
                <li>Bad Association</li>
                <li>Baptism</li>
                <li>Bethel</li>
                <li>BITE Model</li>
                <li>Brother/Sister</li>
                <li>Circuit Overseer</li>
                <li>COBE(Coordinator of the Body of Elders)</li>
                <li>CSA(Child Sexual Abuse)</li>
                <li>Cult</li>
                <li>Disassociate</li>
                <li>Disfellowship</li>
                <li>Elder</li>
                <li>Faithful Slave</li>
                <li>Field Service</li>
                <li>Gilead</li>
                <li>Governing Body</li>
                <li>Great Crowd</li>
                <li>Judicial Committee</li>
                <li>Kingdom Hall</li>
                <li>Ministerial Servant</li>
                <li>Pioneer</li>
                <li>Publisher</li>
                <li>PIMI(Physically In Mentally In)</li>
                <li>PIMO(Physically In Mentally Out)</li>
                <li>POMI(Physically Out Mentally In)</li>
                <li>POMO(Physically Out Mentally Out)</li>
                <li>The Truth</li>
                <li>Worldy</li>
            </ul>
        </div>
    )
}

export default Glossary;