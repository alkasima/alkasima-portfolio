import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { servicesData } from "../../data/data";
const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Services" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {servicesData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
