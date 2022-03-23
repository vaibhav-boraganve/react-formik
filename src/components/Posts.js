import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Post from "./Post";

async function fetchPosts() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
}

function Posts() {
  const { data, error, isError, isLoading, status, isFetching } = useQuery(
    "posts",
    fetchPosts
  ); // first argument is a string to cache and track the query result

  console.log({isLoading, isFetching})
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }
  if (isFetching) {
    return <div>Updating...</div>;
  }

  return (
    <div className="container" style={{ marginLeft: "100px" }}>
      <Post />
      <h1>Posts</h1>
      {data.map((user, index) => {
        return (
          <li>
            <ol key={user.id}>{user.name}</ol>
            <ol>{user.email}</ol>
            <ol>{user.phone}</ol>
            <ol>{user.website}</ol>
          </li>
        );
      })}
    </div>
  );
}

export default Posts;
