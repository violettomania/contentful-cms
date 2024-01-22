import useFetchProjects from '../hooks/fetchProjects';
import Project from './Project';

export default function Projects() {
  const { isLoading, projects } = useFetchProjects();

  if (isLoading) {
    return (
      <section className='projects'>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section className='projects'>
      <div className='title'>
        <h2>Projects</h2>
        <div className='title-underline'></div>
      </div>
      <div className='projects-center'>
        {projects.map((project: SingleProject) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
