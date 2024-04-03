import { useParams } from 'react-router-dom';
import gitHub from '../img/icons/gitHub-black.svg';
import { projects } from 'helpers/projectList';

function Project() {
  const { id } = useParams();
  const { title, image, skills, gitCode, gitPage, backCode, description } =
    projects[id - 1];
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <a href={gitPage}>
            <h1 className="title-1">{title}</h1>
            <img src={image} alt={title} className="project-details__cover" />
            <p>{description}</p>
            <div className="project-details__desc">
              <p className="project-details-text">{skills}</p>
            </div>
          </a>
          <a href={gitCode} className="btn-outline">
            <img src={gitHub} alt="" />
            GitHub Repo
          </a>
          <a href={backCode} className="btn-outline">
            <img src={gitHub} alt="" />
            GitHub Repo BackEnd
          </a>
        </div>
      </div>
    </main>
  );
}
export default Project;
