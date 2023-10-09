import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  return cat ? (
    <>
      <div>
        <h1>
          Meet: <strong>{cat.name}</strong>
        </h1>
        <img src={cat.url} style={{ width: "250px" }} />
        <p>{cat.description}</p>
        <h3>Take this cutie home for only 💸{cat.price}💸</h3>
      </div>
    </>
  ) : (
    <h1>Loading...</h1>
  );
}
export default CatDetails;
