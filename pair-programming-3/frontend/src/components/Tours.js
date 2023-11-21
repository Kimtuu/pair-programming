import Tour from "./Tour";
import Title from "./Title";
import { useState, useEffect } from "react";

function Tours() {
  const [toursData, setToursData] = useState(null);
  const [newTour, setNewTour] = useState({ name: "", description: "" }); // Add this line

  useEffect(() => {
    const apiUrl = "http://localhost:5000/api/tours";

    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setToursData(data);
      })
      .catch((error) => {
        console.error("Error fetching tours:", error);
      });
  }, []);

  const addTour = (tour) => {
    const apiUrl = "http://localhost:5000/api/tours";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        role: "admin",
      },
      body: JSON.stringify(tour),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setNewTour(data);
        setToursData((prevTours) => [...prevTours, data]); // Add new tour to toursData
      })
      .catch((error) => {
        console.error("Error fetching tours:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTour(newTour);
  };

  const handleDelete = (e) => {
    deleteTour(e.target._id);
  };

  const deleteTour = async (_id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tours/${_id}`, {
        method: "DELETE",
        headers: {
          role: "admin",
        },
      });

      if (!response.ok) {
        throw new Error("Error deleting tour");
      }

      setToursData(toursData.filter((tour) => tour._id !== _id));
    } catch (error) {
      console.error("Error deleting tour:", error);
    }
  };

  return (
    <div>
      <section className="section about" id="about">
        <Title title="our" span="tours" />
        <div className="section-center about-center">
          {toursData &&
            toursData.map((tour) => (
              <Tour key={tour._id} {...tour} handleDelete={handleDelete} />
            ))}
        </div>
        <form>
          <label htmlFor="image">Image URL</label>
          <input
            className="input"
            id="image"
            type="text"
            onChange={(e) => setNewTour({ ...newTour, image: e.target.value })}
            value={newTour.image}
          />

          <label htmlFor="date">Date</label>
          <input
            className="input"
            id="date"
            type="text"
            onChange={(e) => setNewTour({ ...newTour, date: e.target.value })}
            value={newTour.date}
          />

          <label htmlFor="info">Info</label>
          <textarea
            className="input"
            id="info"
            onChange={(e) => setNewTour({ ...newTour, info: e.target.value })}
            value={newTour.info}
          />

          <label htmlFor="title">Title</label>
          <input
            className="input"
            id="title"
            type="text"
            onChange={(e) => setNewTour({ ...newTour, title: e.target.value })}
            value={newTour.title}
          />

          <label htmlFor="location">Location</label>
          <input
            className="input"
            id="location"
            type="text"
            onChange={(e) =>
              setNewTour({ ...newTour, location: e.target.value })
            }
            value={newTour.location}
          />

          <label htmlFor="cost">Cost</label>
          <input
            className="input"
            id="cost"
            type="number"
            onChange={(e) => setNewTour({ ...newTour, cost: e.target.value })}
            value={newTour.cost}
          />

          <label htmlFor="duration">Duration</label>
          <input
            className="input"
            id="duration"
            type="text"
            onChange={(e) =>
              setNewTour({ ...newTour, duration: e.target.value })
            }
            value={newTour.duration}
          />

          <button onClick={handleSubmit}>Add Tour</button>
        </form>
      </section>
    </div>
  );
}

export default Tours;
