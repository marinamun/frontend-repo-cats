import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sellyourcat.css"

const Sellyourcat = ({ isUpdate, project }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = { name, breed, description, price, photo };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/cats${
          isUpdate ? `/${project.id}` : ""
        }`,
        {
          method: isUpdate ? "PUT" : "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        const currentProject = await response.json();
        console.log(currentProject);
        navigate(`/cats`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (isUpdate && project) {
      setName(project.name);
      setBreed(project.breed);
      setDescription(project.description);
      setPrice(project.price);
      setPhoto(project.photo);
    }
  }, [project]);

  return (
    
    <form className="form-login" onSubmit={onSubmit}>
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
        <label for="exampleInputEmail1"> Price:</label>
        <input
          className="cats-input"
          type="text"
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
      
      <button class="btn btn-primary" type="submit">
        Sell cat
      </button>
    </form>
  );
};



export default Sellyourcat;
