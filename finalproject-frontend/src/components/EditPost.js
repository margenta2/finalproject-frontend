import React from "react";
import {Link} from "react-router-dom";

const EditPost = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>Subject </label><br></br>
                <input onChange={props.handleChange} type="text" name="subject" value={props.post.subject}/><br></br>
                <label>Topic</label><br></br>
                <textarea onChange={props.handleChange} rows="5" cols="40" name="content" value={props.post.content}/><br></br>
                <input type="submit" value="Edit Post"/>
            </form>
            <button onClick={props.handleDelete}>Delete Post</button>
        </div>
        
    )
}

export default EditPost;