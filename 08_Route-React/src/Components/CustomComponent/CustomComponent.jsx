// import React from "react";
import { useParams } from "react-router-dom";

const CustomComponent = () => {
    const {userid} = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">CustomComponent : {userid}
    </div>
  );
};

export default CustomComponent;