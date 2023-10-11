import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Sellyourcat.css";

const UpdateCats = ({ isUpdate }) => {
  const navigate = useNavigate();
  const {id}=useParams();
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = { name, breed, description, price, url:photo };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/cats${
          isUpdate ? `/${id}` : ""
        }`,
        {
          method: "PUT",
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
        navigate(`/cats/${currentProject.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCat = async()=>{
    try{
       const response = await fetch(
      `${import.meta.env.VITE_API_URL}/cats${isUpdate ? `/${id}` : ""}`
    );
    if (response.ok) {
      const cat = await response.json();
      setName(cat.name);
      setBreed(cat.breed);
      setDescription(cat.description);
      setPrice(cat.price);
      setPhoto(cat.url);
    }
    }catch(error){
      console.log(error);
    }
   
  }
  useEffect(() => {
    if (isUpdate) {
     fetchCat();
    }
  }, []);

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
        Update
      </button>
    </form>
  );
};

export default UpdateCats;
