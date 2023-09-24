import { NavLink } from 'react-router-dom';

function ProjectList({ id, title, image }) {
  return (
    <li className="project">
      <NavLink className="project-link" to={`/project/${id}`}>
        <img src={image} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
}

export default ProjectList;
