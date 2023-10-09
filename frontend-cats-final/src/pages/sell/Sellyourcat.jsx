import { useEffect, useState } from "react";
import "../sell/Sellyourcat.css"

function Sellyourcat() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newData = {
      name,
      breed,
      description,
      price,
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
        const newCats = await response.json();
        console.log(newCats);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
        <label for="exampleInputEmail1"> breed:</label>
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
        <label for="exampleInputEmail1"> price:</label>
        <input
          className="cats-input"
          type="text"
          name="price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <button clastype="submit"  class="btn btn-warning">
        Add Cats
      </button>
    </form>
  );
}

export default Sellyourcat;
