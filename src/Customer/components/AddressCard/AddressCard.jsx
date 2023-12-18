import React from "react";

const AddressCard = () => {
  return (
    <div>
      <div className="space-y-3 ">
        <p className="font-semibold">firstName lastName</p>
        <p>address Lorem, ipsum dolor.</p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>099000000</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
