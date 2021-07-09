import React from "react";
import {Link, Route } from "react-router-dom";

const MentalHealth = () => {
    return (
        <div>
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