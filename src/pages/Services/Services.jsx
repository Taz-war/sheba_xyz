import React from "react";
import Navbar from "../../components/Navbar";

const Services = () => {
  const category = [
    {
      "_id": "1",
      "name": "AC Repair"
    },
    {
      "_id": "2",
      "name": "Appliance Repair"
    },
    {
      "_id": "3",
      "name": "Car Repair"
    },
    {
      "_id": "4",
      "name": "Electrical Services"
    },
    {
      "_id": "5",
      "name": "Plumbing Services"
    }
  ]
  
  const services = [
    {
      "_id": "1",
      "category": "AC Repair",
      "details": "We provide professional AC repair services for all types of air conditioning systems.",
      "imageUrl": "https://via.placeholder.com/150?text=Central+AC+Repair",
      "name": "Central AC Repair"
    },
    {
      "_id": "2",
      "category": "AC Repair",
      "details": "Expert window AC repair services to keep your unit running smoothly.",
      "imageUrl": "https://via.placeholder.com/150?text=Window+AC+Repair",
      "name": "Window AC Repair"
    },
    {
      "_id": "3",
      "category": "Appliance Repair",
      "details": "Comprehensive refrigerator repair services for all brands and models.",
      "imageUrl": "https://via.placeholder.com/150?text=Refrigerator+Repair",
      "name": "Refrigerator Repair"
    },
    {
      "_id": "4",
      "category": "Appliance Repair",
      "details": "We offer washing machine repair services to fix all types of issues.",
      "imageUrl": "https://via.placeholder.com/150?text=Washing+Machine+Repair",
      "name": "Washing Machine Repair"
    },
    {
      "_id": "5",
      "category": "Car Repair",
      "details": "Full-service car repair for all makes and models, including diagnostics and maintenance.",
      "imageUrl": "https://via.placeholder.com/150?text=General+Car+Repair",
      "name": "General Car Repair"
    },
    {
      "_id": "6",
      "category": "Car Repair",
      "details": "Specialized services for brake repair and replacement.",
      "imageUrl": "https://via.placeholder.com/150?text=Brake+Repair",
      "name": "Brake Repair"
    },
    {
      "_id": "7",
      "category": "AC Repair",
      "details": "Quick and efficient AC installation services for homes and offices.",
      "imageUrl": "https://via.placeholder.com/150?text=AC+Installation",
      "name": "AC Installation"
    },
    {
      "_id": "8",
      "category": "Appliance Repair",
      "details": "Microwave repair services to fix all common issues and extend the life of your appliance.",
      "imageUrl": "https://via.placeholder.com/150?text=Microwave+Repair",
      "name": "Microwave Repair"
    },
    {
      "_id": "9",
      "category": "Car Repair",
      "details": "Professional oil change services to keep your car running smoothly.",
      "imageUrl": "https://via.placeholder.com/150?text=Oil+Change",
      "name": "Oil Change"
    },
    {
      "_id": "10",
      "category": "Appliance Repair",
      "details": "Dishwasher repair services to handle leaks, clogs, and other issues.",
      "imageUrl": "https://via.placeholder.com/150?text=Dishwasher+Repair",
      "name": "Dishwasher Repair"
    },
    {
      "_id": "11",
      "category": "Electrical Services",
      "details": "Reliable residential electrical repair and maintenance services.",
      "imageUrl": "https://via.placeholder.com/150?text=Residential+Electrical+Repair",
      "name": "Residential Electrical Repair"
    },
    {
      "_id": "12",
      "category": "Electrical Services",
      "details": "Comprehensive commercial electrical services for businesses.",
      "imageUrl": "https://via.placeholder.com/150?text=Commercial+Electrical+Services",
      "name": "Commercial Electrical Services"
    },
    {
      "_id": "13",
      "category": "Plumbing Services",
      "details": "Expert plumbing repair services for all types of plumbing issues.",
      "imageUrl": "https://via.placeholder.com/150?text=Plumbing+Repair",
      "name": "Plumbing Repair"
    },
    {
      "_id": "14",
      "category": "Plumbing Services",
      "details": "Professional drain cleaning services to keep your pipes clear.",
      "imageUrl": "https://via.placeholder.com/150?text=Drain+Cleaning",
      "name": "Drain Cleaning"
    },
    {
      "_id": "15",
      "category": "Plumbing Services",
      "details": "Water heater repair and installation services to ensure you have hot water when you need it.",
      "imageUrl": "https://via.placeholder.com/150?text=Water+Heater+Repair",
      "name": "Water Heater Repair"
    }
  ]
  ;

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-2">
        <h1 className=" text-3xl font-semibold mt-5">All Services</h1>
        {
          category.map(category =>
            <div className=" my-20" key={category._id}>
              <div className=" w-full">
                <h2 className="my-5 font-normal text-2xl">{category.name}</h2>
                <div className="">
                  {
                    services.filter(service => service.category === category.name).map(service =>
                      <div key={service._id} className="">
                        <img src={service.imageUrl} alt="" className=" w-60 shadow mx-auto"/>
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default Services;
