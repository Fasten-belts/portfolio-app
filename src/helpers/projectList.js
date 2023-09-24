import project01 from '../img/projects/project-web-studio.png';
import project02 from '../img/projects/project-thewatchspot.png';
import project03 from '../img/projects/project-bookshelf.png';

export const projects = [
  {
    id: '1',
    image: project01,
    title: 'WebStudio - Personal Project',
    skills: 'HTML5 · CSS · Git',
    gitCode: 'https://github.com/Fasten-belts/goit-markup-hw-07',
    gitPage: 'https://fasten-belts.github.io/goit-markup-hw-07/',
    description:
      'Orchestrated a project that emphasized both "Markup" and "Styling" aspects of web development. Ensured proper HTML structuring by utilizing semantic tags and effectively marked up key elements like subscription and request forms. Consistently applied design principles, incorporating transitions for hover and focus effects, responsive design through media queries, and seamless integration of a mobile menu script. Paid meticulous attention to details, including icon utilization via SVG graphics, active states for interactive elements, and the precise implementation of modal windows with associated scripts.',
  },
  {
    id: '2',
    image: project02,
    title: 'The Watches Spot - Group Project',
    skills: 'JavaScript Libraries · JavaScript · HTML5 · CSS · Git',
    gitCode: 'https://github.com/Fasten-belts/project-group-3',
    gitPage: 'https://fasten-belts.github.io/project-group-3/',
    description:
      'We crafted a responsive website that seamlessly adapts to diverse devices, ensuring an optimal user experience. Key accomplishments include: HTML5 Compliance: Rigorous adherence to HTML5 semantics and layout validation, verified using industry-standard validation tools. Font Optimization: Implementation of web fonts through font-face for enhanced typography. Efficient Resource Loading: Optimized image and resource loading, encompassing vector and raster graphics, with support for retina screens. Icon Sprites: Streamlined user interface with sprite-based icons. Favicon Inclusion: Enhanced user experience with a page favicon. Diverse Sections: The project encompasses various sections, each tailored for different devices (Mobile, Tablet, Desktop), with specific layout and content display requirements. Moreover, I assumed the role of Team Lead in this project, actively fostering teamwork by organizing daily meetings, ensuring transparent communication, monitoring progress, resolving challenges, and collaborating with mentors to address issues promptly and efficiently.',
  },
  {
    id: '3',
    image: project03,
    title: 'BookShelf - Group Project',
    skills: 'JavaScript Libraries · REST APIs · JavaScript · HTML5 · CSS · Git',
    gitCode: 'https://github.com/Fasten-belts/team-project-group-3-JS',
    gitPage: 'https://anetta999.github.io/team-project-group-3-JS/',
    description:
      'The book API project, written in JavaScript, enables users to view and add selected books to their cart. Key features include: Responsive Layout: Ensuring an optimal user experience across devices. Header: Featuring a logo, theme switcher, and burger menu for easy navigation. Homepage: Displaying book categories, charitable foundations, and a list of books. Modal Windows: Providing detailed book information with links to purchase resources. Shopping List: Allowing users to store books locally. Loader: Enhancing user experience with asynchronous request handling. Scroll-Up Button: Ensuring user convenience. This version offers essential website functionality, with plans for future enhancements like pagination and Firebase authorization functionality. Users can add books to their shopping list. Additional features encompass authorization, pagination, a loader, and a scroll-up button.',
  },
];
