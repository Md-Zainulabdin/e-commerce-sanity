import Image from "next/image";
import React from "react";

const services = [
  {
    src: "/asset/shipping.svg",
    title: "Free Shipping",
    description: "Free shipping for order above $150",
  },
  {
    src: "/asset/dollar.svg",
    title: "Money Guarantee",
    description: "Within 30 days for an exchange",
  },

  {
    src: "/asset/support.svg",
    title: "Online Support",
    description: "24 hours a day, 7 days a week",
  },

  {
    src: "/asset/payment.svg",
    title: "Flexible Payment",
    description: "Pay with multiple credit cards",
  },
];

const Services = () => {
  return (
    <section className="mt-6 md:my-12 lg:my-16 px-6">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 gap-x-12 justify-between">
        {services.map((service, idx) => (
          <div className="flex flex-col gap-4" key={idx}>
            <Image
              src={service.src}
              alt="service icon"
              width={60}
              height={60}
              className="w-[40px] h-[40px]"
            />

            <div>
              <h1 className="text-xl font-bold">{service.title}</h1>
              <p className="text-gray-500">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
