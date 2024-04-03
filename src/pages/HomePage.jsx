import Header from 'components/Header/Header';

function Home() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                HTML5, CSS, JavaScript, TypeScript, React, Redux,
                Responsive/Adaptive Design, GIT
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>
                Node.js, MongoDB, Mongoose, Express, Docker, WebSockets, CRUD,
                REST API, GIT
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;
