import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <div >
      <h2 type="text" onClick={() => navigate("/post")}>
        Post Data
      </h2>
      <p>
        <h2 type="button" onClick={()=>navigate("/react-table")}>
          React Table Data 
        </h2>
      </p>
      <p>
        <h2 type="button" onClick={()=>navigate("/basic-form")}>
          React Formik 
        </h2>
      </p>

      <p>
        <h2 type="button" onClick={()=>navigate("/query")}>
          React Query 
        </h2>
      </p>
    </div>
  );
};

export default Home;
