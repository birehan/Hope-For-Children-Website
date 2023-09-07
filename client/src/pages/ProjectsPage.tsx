import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import { Project } from "../types/types";
import ProjectCard from "../components/homepage_components/ProjectCard";
import { useDispatch } from "react-redux";
import { getProjects, cleanUpProjects } from "../actions/projectsAction";
import CommonLanding from "../components/CommonLanding";
import Loading from "../components/Loading";
import Layout from "../components/Layout";

const ProjectsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());

    return () => {
      dispatch(cleanUpProjects());
    };
  }, [dispatch]);

  const { projects, loading } = useSelector((state: any) => state.projects);

  const [itemsPerPage, setItemsPerPage] = useState(1); // Initialize with 1 item per row

  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const updateitemsPerPage = () => {
    if (window.innerWidth >= 1024) {
      setItemsPerPage(6); // Large screens
    } else if (window.innerWidth >= 768) {
      setItemsPerPage(4); // Medium screens
    } else {
      setItemsPerPage(3); // Small screens
    }
  };

  // Listen for window resize and update itemsPerPage accordingly
  useEffect(() => {
    updateitemsPerPage();
    window.addEventListener("resize", updateitemsPerPage);
    return () => {
      window.removeEventListener("resize", updateitemsPerPage);
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <div id="scroll" className="flex flex-col gap-8  xl:gap-16">
        <CommonLanding title="Our Projects" icon={null} />

        <div className="px-6">
          <div>
            <div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-10 px-6  md:grid-cols-2 lg:grid-cols-3">
              {projects
                .slice(
                  currentPage * itemsPerPage,
                  (currentPage + 1) * itemsPerPage
                )
                .map((project: Project, index: number) => {
                  return <ProjectCard key={index} project={project} />;
                })}
            </div>

            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
