import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function CatDetails() {
  const { catId } = useParams();
  const [cat, setCat] = useState();

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

  function handleClick(event) {
    event.preventDefault();
    alert(
      "Our hackers got your address and your new cat will soon be running to your arms🎉"
    );
  }

  return cat ? (
    <>
      <div className="cat-details">
        <div>
          <img src={cat.url} style={{ width: "300px" }} />
        </div>
        <div>
          <h1>
            Meet: <strong>{cat.name}</strong>
          </h1>
          <p>{cat.description}</p>
          <h3>Take this cutie home for only 💸{cat.price}💸</h3>
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
