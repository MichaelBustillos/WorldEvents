import React, {useState, useEffect} from 'react';

export default function Posts() {
    const [blogs, setBlogs] = useState("");

    useEffect(() => {
      fetch("http://localhost:4000/testAPI")
        .then((res) => res.text())
        .then((blogs) => setBlogs(blogs));
    }, []);
    
    // const getBlogs = () => {
    //   fetch('/', {
    //     method: 'GET',
    //     headers : { 
    //       'Accept': 'application/json'
    //      }  
    //   })
    //     .then(result => result.json())
    //     .then(body => setBlogs(body));
    // };

    return (
      <div className="app">
        <h1>User Blogs</h1>
        <div>{blogs}</div>
      </div>
    );
}
