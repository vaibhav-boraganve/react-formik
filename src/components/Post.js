import React, { Fragment, useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";

export default function Post() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const { isLoading, isError, error, mutate } = useMutation(createPost, {
    retry: 3,
  });

  async function createPost() {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/users" 
    );
    setMessage(response.data);
  }

  return (
    <Fragment>
      <div className="Users" style={{ marginLeft: "50px" }}>
        <h1>Create a User</h1>

        <label>Name:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Email:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={() => {
            mutate({ id: Date.now(), title, description });
          }}
        >
          Create
        </button>
        <p> Created a new User ID: {message && message.id}</p>
        <div style={{ color: "gray", background: "#234" }}>
          {isLoading ? "Saving..." : ""}
          {isError ? error.message : ""}
        </div>
      </div>
    </Fragment>
  );
}
