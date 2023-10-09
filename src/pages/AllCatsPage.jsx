import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";

function AllCatsPage() {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchCats = async () => {
    console.log(`${import.meta.env.VITE_API_URL}/cats`);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/cats`);
      if (response.ok) {
        const allCats = await response.json();
        setCats(allCats);
        console.log(allCats);
      }
    } catch (error) {
      console.error("Error fetching the data:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchCats();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {cats.map((cat) => (
        <div className="cat-names">
          <Link
          to={`/cats/${cat.id}`}
          key={cat.id}
          style={{ textDecoration: "none", color: "black" }}
          
        >
          <img src={cat.url} style={{ height: "150px" }} />
          <h1>{cat.name}</h1>
        </Link>
        </div>
        
      ))}
    </>
  );
}
export default AllCatsPage;
