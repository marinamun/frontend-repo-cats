import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    return <div>Login...</div>;
  }
  return (
    <>
      <h1>TEST: CATSSSS🐈</h1>
      {cats.map((cat) => (
        <Link to={`/cats/${cat.id}`} key={cat.id}>
          <img src={cat.url} style={{ height: "100px" }} />
          <h1>{cat.name}</h1>
        </Link>
      ))}
    </>
  );
}
export default AllCatsPage;
