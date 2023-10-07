import { useEffect, useState } from "react";

function AllCatsPage() {
  const [cats, setCats] = useState([]);
const [isLoading, setIsLoading] = useState(true);
  const fetchCats = async () => {
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
        <p>{cat.name}</p>
      ))}
    </>
  );
}
export default AllCatsPage;
