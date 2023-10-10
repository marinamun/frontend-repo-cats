import { useEffect, useState } from "react";
import "../sell/Sellyourcat.css";

function Sellyourcat() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newData = {
      name,
      breed,
      description,
      price,
      photo,
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cats`, {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const newCat = await response.json();
        console.log(newCat);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sellyourcat">
      <h2>Fill this form to sell your cat:</h2>
      <form className="form-login" onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1"> Name:</label>
          <input
            className="cats-input"
            type="text"
            name="description"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1"> Breed:</label>
          <input
            className="cats-input"
            type="text"
            name="breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1"> Description:</label>
          <input
            className="cats-input"
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1"> Price in $:</label>
          <input
            className="cats-input"
            type="number"
            name="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1"> Photo url:</label>
          <input
            className="cats-input"
            type="text"
            name="photo"
            value={photo}
            onChange={(event) => setPhoto(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-warning">
          Sell cat
        </button>
      </form>
    </div>
  );
}

export default Sellyourcat;
