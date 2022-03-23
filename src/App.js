import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import Home from "./components/Home";
import Posts from "./components/Posts";
import BasicTable from "./components/Table/BasicTable";
// import TableFilter from "./components/TableFilter/table";
import Basic from "./components/Form/Basicform";
import Characters from "./components/Query/Characters";
import "./App.css";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/post" exact element={<Posts />} />

            <Route path="/" exact element={<Home />} />

            <Route path="/react-table" element={<BasicTable/>} />

            <Route path="/basic-form" element={<Basic/>} />

            <Route path="/query" element={<Characters/>} />
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </div>
  );
};

export default App;

