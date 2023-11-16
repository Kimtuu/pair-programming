import { services } from "../data";
import Title from "./Title";
import { useState } from "react";
import Service from "./Service";

function Services() {
  const [serviceData] = useState(services);
  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {serviceData.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
