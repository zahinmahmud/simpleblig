import React, { useEffect, useState } from "react";
import Main from "../../pages/Main";
import Side from "../../pages/Side";

const Section = () => {
  const [blogtopic, setblogtopic] = useState([]);
  const [blogcategories, setblogcategories] = useState([]);

  useEffect(() => {
    fetch(`/blog_topic.json`)
      .then((res) => res.json())
      .then((data) => {
        setblogtopic(data);
      }).catch((err)=>console.log("Error load blog topic" ,err))
  },[]);

  useEffect(() => {
    fetch(`/blog_categories.json`)
      .then((res) => res.json())
      .then((data) => {
        setblogcategories(data);
      })
      .catch((err)=>console.log("Error load blog topic" ,err))
  },[]);
  return (
    <div className=" grid grid-cols-12 gap-4">
      <div className="col-span-9">
        <Main />
      </div>
      <div className="col-span-3">
        <Side />
      </div>
    </div>
  );
};

export default Section;
