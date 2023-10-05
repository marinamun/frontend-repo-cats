import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllCatsPage() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cats`);
      if (response.ok) {
        const allCats = await response.json();
        setCats(allCats);
      }
    } catch (error) {
      console.log("Error fetching the data");
    }
  };
  useEffect(() => {
    fetchCats();
  }, []);
  return (
    <>
      <h1>TEST: CATSSSS🐈</h1>
      {cats.map((cat) => (
        <p>{cat.name}</p>
      ))}
    </>
  );
}
export default AllCatsPage;
