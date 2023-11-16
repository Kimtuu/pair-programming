import { tours } from "../data";
import { useState } from "react";
import Tour from "./Tour";
import Title from "./Title";

function Tours() {
  const [toursData, setToursData] = useState(tours);

  const removeTour = (id) => {
    const updatedTours = toursData.filter((tour) => tour.id !== id);
    setToursData(updatedTours);
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData.map((tour) => (
            <Tour key={tour.id} {...tour} onDelete={removeTour} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
