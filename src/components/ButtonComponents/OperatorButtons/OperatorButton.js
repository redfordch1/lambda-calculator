import React from "react";

const OperatorButton = (props) => {
  return (
    <>
    <button className="operator-buttons">{props.oper.char}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;
