import ProjectList from 'components/ProjectList/ProjectList';
import { projects } from 'helpers/projectList';

function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map(({ id, image, title, skills, gitCode, gitPage }) => {
            return (
              <ProjectList
                key={id}
                id={id}
                image={image}
                title={title}
                skills={skills}
                gitCode={gitCode}
                gitPage={gitPage}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
}
export default Projects;
