import Title from "./Title";
import { useState, useEffect } from "react";
import Service from "./Service";

function Services() {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    const apiUrl = "http://localhost:5000/api/services";
    
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setServicesData(data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center"></div>
        {servicesData &&
          servicesData.map((service) => (
            <Service key={service.id} {...service} />
          ))}
      </section>
    </div>
  );
}

export default Services;
