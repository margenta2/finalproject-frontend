import React from "react"

const EditPost = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input onChange={props.handleChange} type="text" name="subject" value={props.post.subject}/>
                <input onChange={props.handleChange} type="texst" name="content" value={props.post.content}/>
                <input type="submit" value="Edit Post"/>
            </form>
            <button onClick={props.handleDelete}>Delete City</button>
        </div>
        
    )
}

export default EditPost;