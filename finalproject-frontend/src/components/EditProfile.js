import React from "react";
import {Link} from "react-router-dom";

const EditProfile = (props) => {
    return (
        <div>
            <div className="edit-body">
                <div className="edit-form">
                    <h2>Edit Profile</h2>
                    <form onSubmit={props.handleSubmit}>
                        <label>Username</label><br></br>
                        <input onChange={props.handleChange} type="text" name="username" value={props.user.username} /><br></br>
                        <label>Password</label><br></br>
                        <input onChange={props.handleChange} type="password" name="password" value={props.user.password} /><br></br>
                        <label>Email Address</label> <br></br>
                        <input onChange={props.handleChange} type="text" name="email" value={props.user.email} /> <br></br>
                        <label>JW Status</label><br></br>
                        <input onChange={props.handleChange} type="text" name="jwStatus" value={props.user.jwStatus} /> <br></br>
                        <label>Topics of Interest</label> <br></br>
                        <input onChange={props.handleChange} type="text" name="topic" value={props.user.topic} /> <br></br>
                        <input type="submit" value="Edit Profile" />
                    </form>
                    <button onClick={props.handleDelete}>Delete Profile</button>
                </div>
            </div>
        </div>
    )
}

export default EditProfile;