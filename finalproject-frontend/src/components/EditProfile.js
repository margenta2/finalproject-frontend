import React from "react"

const EditProfile = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} type="text" name="username" value={props.user.username} />
                <input onChange={props.handleChange} type="password" name="password" value={props.user.password} />
                <input onChange={props.handleChange} type="text" name="email" value={props.user.email} />
                <input onChange={props.handleChange} type="text" name="jwStatus" value={props.user.jwStatus} />
                <input onChange={props.handleChange} type="text" name="topic" value={props.user.topic} />
                <input type="submit" value="Submit" />
            </form>
            <button onClick={props.handleDelete}>Delete Profile</button>
        </div>
    )
}

export default EditProfile;