import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = (props) => {
  return (
    <div className="bg-slate-300 flex p-2">
      <NavLink to="/">Home</NavLink>/{props.title}
    </div>
  );
};

export default PageNavigation;
