import React from "react";
import {Link, Route } from "react-router-dom";

const Home = () => {
    return (
        <div>
            
            <div className="home-body body">
                <h1>Welcome to the XRC!</h1>
                <h4>Ex-Jehovah's Witness Resource Center</h4>
                {/* <img src="" */}
            </div>

            <div className="home-links">
                <Link to="/login"><h3>Log In</h3></Link>
                <Link to="/signup"><h3>Sign Up</h3></Link>
            </div>

            <div className="home-content body-content">
                <h3>Who is the XRC for?</h3>
                <p>This resource center is designed for anyone who wants to learn more about ex-Jehovah's Witnesses(ex-JWs). This includes ex-Jehovah's Witnesses , current Jehovah's Witnesses who are thinking about leaving the group or those who have friends or family who are an ex or current Jehovah's Witness. This site has information on mental health support, social support, and de-programming for anyone who has left the group and needs help with coping and re-claiming their mind. You can also find information on common JW terms and beliefs. If there are any topics you'd like more information on you can create a post on our message board. Log in or sign up to learn more!</p>
            </div>

        </div>
    )
}

export default Home