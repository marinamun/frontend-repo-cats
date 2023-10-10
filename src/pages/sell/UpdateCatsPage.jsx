import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProjectForm from "../../components/ProjectsForm";

const UpdateProjectPage = () => {
  const { catsId } = useParams();

  const [project, setProject] = useState();

  const fetchProject = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/cats/${catsId}`
    );
    if (response.ok) {
      const project = await response.json();
      setProject(project);
      console.log(project);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <>
      <h1>Update Project</h1>
      <ProjectForm isUpdate project={project} />
    </>
  );
};

export default UpdateProjectPage;
