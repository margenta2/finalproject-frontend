import React from "react";
import  {Link, Route} from "react-router-dom";

const Beliefs = () => {
    return (
        <div>
            <h1>Beliefs Debunked</h1>
            <ul>
                <li><a href={"http://www.jwfacts.com/watchtower/607-7-times.php"}>1914 Chronology</a></li>
                <li><a href={"http://www.jwfacts.com/watchtower/birthdays.php"}>Birthday Celebrations</a></li>
                <li><a href={"http://www.jwfacts.com/watchtower/blood-transfusions.php"}>Blood Transfusions</a></li>
                <li><a href={"http://www.jwfacts.com/watchtower/cross-or-stake.php"}>The Cross vs. Stake</a></li>
                <li><a href={"http://www.jwfacts.com/watchtower/144000.php"}>The 144,000</a></li>
                <li><a href={"http://www.jwfacts.com/watchtower/flood-noah-global.php"}>Global Flood</a></li>
                
            </ul>
        </div>
    )
}

export default Beliefs