import React from "react";
import {Link, Route} from "react-router-dom";
import BarChart from "./BarChart";

const data = [
    {year: 1995, missing: 59585},
    {year: 1996, missing: 121577},
    {year: 1997, missing: 180759}
]

const Statistics = () => {
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
            <div>
                <h1>Statistics</h1>
                <BarChart data={data} />
            </div>

        </div>
    )
}

export default Statistics;