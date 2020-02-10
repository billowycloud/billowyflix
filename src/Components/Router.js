import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

export default () => (
  <Router>
    <>
      {/* 
        path: 어느 URL에서 해당 Route를 render할 것인지
        exact componenet: 누군가 이 Route에 왔을 때 어떤 컴포넌트가 보여질 건지        
        */}
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
    </>
  </Router>
);
