import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <Link to={`/service-details/${service._id}`} className="">
      <img
        src={service.imageUrl}
        alt=""
        className=" w-60 shadow mx-auto rounded-md"
      />
      <h3 className=" text-center w-3/4 mx-auto text-base font-normal mt-3">
        {service.name}
      </h3>
    </Link>
  );
};

export default ServiceCard;
