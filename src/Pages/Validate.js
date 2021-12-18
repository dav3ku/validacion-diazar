import React from "react";
import { useParams } from "react-router-dom";

const Validate = () => {
  const { ID } = useParams();

  return (
    <div>
      <h1>Validate</h1>
    </div>
  );
};

export default Validate;
