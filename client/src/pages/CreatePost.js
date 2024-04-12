import React, { useState } from 'react';
import './CreatePost.css';
import { supabase } from '../client';

const CreatePost = () => {
    const [post, setPost] = useState({ title: '', author: '', description: '' });

    const handleChange = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value });
    };

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .insert({ title: post.title, author: post.author, description: post.description })
            .select();

        window.location = "/";
    };

    return (
        <div>
            <form>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={handleChange} /><br />
                <br />

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={handleChange} /><br />
                <br />

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={post.description} onChange={handleChange}>
                </textarea>
                <br />
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    );
};

export default CreatePost;
