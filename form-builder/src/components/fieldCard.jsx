import React from "react";

const FieldCard = ({ items }) => {
  return (
    <div className=" bg-gray-100 border-2 w-11/12 mx-auto my-2 rounded-lg   h-25">
      <div className="flex justify-center gap-40 mt-2">
        {" "}
        <h1 className="text-2xl">{items?.name}</h1>
        <input
          type={items.type}
          placeholder={items.type}
          className="border-2 mx-2 px-2 py-1 bg-white rounded-md"
          required
        />
      </div>
      <div className=" ml-10">
        <p className="text-lg">{items?.description}</p>
      </div>
    </div>
  );
};

export default FieldCard;
