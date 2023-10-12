import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import { useNavigate } from "react-router-dom";

function CatDetails({ setCartItem, item }) {
  const { catId } = useParams();
  const [cat, setCat] = useState();
  const navigate = useNavigate();

  const fetchCat = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/cats/${catId}`
      );
      if (response.ok) {
        const theCat = await response.json();
        setCat(theCat);
      }
    } catch (error) {
      console.error("Error fetching the data:", error);
    } finally {
      <h3>Loading...</h3>;
    }
  };
  useEffect(() => {
    fetchCat();
  }, []);

  function handleClick() {
    const newCartItem = {
      id: cat.id,
      name: cat.name,
      price: cat.price,
      breed: cat.breed,
      url: cat.url,
    };
    setCartItem([...item, newCartItem]);
    navigate("/shopping-cart");

    /*alert(
      "Our hackers got your address and your new cat will soon be running to your arms🎉"
    );*/
  }

  return cat ? (
    <>
      <div className="cat-details">
        <div>
          <img src={cat.url} style={{ width: "300px" }} />
        </div>
        <div>
          <h1>
            Meet: <strong><span id="name">{cat.name}</span></strong>
          </h1>
          <p id="breed"><strong>A beautiful <em>{cat.breed}</em></strong></p>
          <p>{cat.description}</p>
          <h3>Take this cutie home for only 💸<strong>{cat.price}$</strong>💸</h3>

          <button onClick={handleClick} className="buy-button">
            <strong>Buy me</strong>
          </button>
        </div>
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}
export default CatDetails;
