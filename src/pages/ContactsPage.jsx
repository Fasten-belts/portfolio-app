function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Krakow, Poland</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+48889907672">+48 (889) 907-672</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:boychukstanislav@gmail.com">
                boychukstanislav@gmail.com
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contacts;
