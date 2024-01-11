import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div>
      <div className="space-y-3 ">
        <p className="font-semibold">
          {address?.firstName} {address?.lastName}
        </p>
        <p>
          {address?.city},{address?.state},{address?.streetAddress},{" "}
          {address?.zipCode}
        </p>
        <div className="space-y-1">
          <p className="font-semibold">
            Phone Number: <span>{address?.phoneNumber}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
