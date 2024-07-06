import React from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();

  const services = [
    {
      _id: "1",
      category: "AC Repair",
      details:
        "We provide professional AC repair services for all types of air conditioning systems.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1713250099_acservicing.jpg",
      name: "Central AC Repair",
    },
    {
      _id: "2",
      category: "AC Repair",
      details:
        "Expert window AC repair services to keep your unit running smoothly.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1713250099_acservicing.jpg",
      name: "Window AC Repair",
    },
    {
      _id: "3",
      category: "Appliance Repair",
      details:
        "Comprehensive refrigerator repair services for all brands and models.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1683136160_checkupcombopackage.jpg",
      name: "Refrigerator Repair",
    },
    {
      _id: "4",
      category: "Appliance Repair",
      details:
        "We offer washing machine repair services to fix all types of issues.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1683136160_checkupcombopackage.jpg",
      name: "Washing Machine Repair",
    },
    {
      _id: "5",
      category: "Car Repair",
      details:
        "Full-service car repair for all makes and models, including diagnostics and maintenance.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1617278510_carrepairservices.jpg",
      name: "General Car Repair",
    },
    {
      _id: "6",
      category: "Car Repair",
      details: "Specialized services for brake repair and replacement.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1617278510_carrepairservices.jpg",
      name: "Brake Repair",
    },
    {
      _id: "7",
      category: "AC Repair",
      details:
        "Quick and efficient AC installation services for homes and offices.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1712206040_carwashpolish.png",
      name: "AC Installation",
    },
    {
      _id: "8",
      category: "Appliance Repair",
      details:
        "Microwave repair services to fix all common issues and extend the life of your appliance.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1622543805_tvrepairservices.jpg",
      name: "Microwave Repair",
    },
    {
      _id: "9",
      category: "Car Repair",
      details:
        "Professional oil change services to keep your car running smoothly.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1712206040_carwashpolish.png",
      name: "Oil Change",
    },
    {
      _id: "10",
      category: "Appliance Repair",
      details:
        "Dishwasher repair services to handle leaks, clogs, and other issues.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1622543805_tvrepairservices.jpg",
      name: "Dishwasher Repair",
    },
    {
      _id: "11",
      category: "Electrical Services",
      details:
        "Reliable residential electrical repair and maintenance services.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1617776411_microwaveovenrepairservices.jpg",
      name: "Residential Electrical Repair",
    },
    {
      _id: "12",
      category: "Electrical Services",
      details: "Comprehensive commercial electrical services for businesses.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1617776411_microwaveovenrepairservices.jpg",
      name: "Commercial Electrical Services",
    },
    {
      _id: "13",
      category: "Plumbing Services",
      details:
        "Expert plumbing repair services for all types of plumbing issues.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1619428672_plumbingsanitaryservices.jpg",
      name: "Plumbing Repair",
    },
    {
      _id: "14",
      category: "Plumbing Services",
      details: "Professional drain cleaning services to keep your pipes clear.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1619428672_plumbingsanitaryservices.jpg",
      name: "Drain Cleaning",
    },
    {
      _id: "15",
      category: "Plumbing Services",
      details:
        "Water heater repair and installation services to ensure you have hot water when you need it.",
      imageUrl:
        "https://s3.ap-south-1.amazonaws.com/cdn-shebaxyz/images/categories_images/thumbs/1619428269_electriciansforelectricalservice.jpg",
      name: "Water Heater Repair",
    },
  ];

  const service = services.find((service) => service._id === id);

  return (
    <div>
      <Navbar />
      <div className=" container mx-auto p-2">
        <h1 className="text-xl lg:text-3xl my-5 lg:my-10 font-semibold">
          {service.name}
        </h1>

        <div className=" grid grid-cols-1 lg:grid-cols-2">
          <div className=" w-full p-5 order-last lg:order-first">
            <img
              src={service.imageUrl}
              alt={service.name}
              className=" max-w-full mx-auto rounded-xl shadow"
            />
            <h2 className=" font-semibold text-2xl mt-10 py-2">
              {service.name}
            </h2>
            <p className=" text-justify text-lg">{service.details}</p>
          </div>

          <div>
            <h2 className=" font-bold">Service Providers</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              suscipit totam voluptate eveniet odit eligendi placeat dolorum
              veritatis enim, at repudiandae cumque! Vero aliquam debitis
              accusantium perferendis dolore, nisi ipsum id. Minima numquam
              ratione consequatur ut itaque quam quos velit, repudiandae, iusto
              illum aspernatur illo, delectus enim quae corrupti exercitationem
              dignissimos ab consequuntur adipisci natus. Maxime facilis iure
              adipisci cupiditate quo, aut ratione vero nesciunt odit dolorum
              minima quas accusantium recusandae et a dolorem corrupti eligendi?
              Odio earum, in nam aperiam laudantium amet! Assumenda facere totam
              blanditiis dolore illo illum porro soluta ad eveniet sunt?
              Deserunt eius ipsa quo rerum?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
