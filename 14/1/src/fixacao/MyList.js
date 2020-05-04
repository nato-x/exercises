import React from "react";
const MyList = (props) => {
  return (
    <div className="list">
      {console.log(props.children)}
      <ul>
        {props.children.map((child) => {
          if (child.type && child.type === "li") return child;
          return <li>{child}</li>;
        })}
      </ul>
    </div>
  );
};
export default MyList;
