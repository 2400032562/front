import React, { useState } from "react";
import axios from "axios";

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = { title, body };

    axios.post("https://jsonplaceholder.typicode.com/posts", postData)
      .then((response) => {
        console.log("Response:", response.data);
        setMessage("Post submitted successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage(" Failed to submit post.");
      });
  };

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid #ccc" }}>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Body:</label><br />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AddPost;
