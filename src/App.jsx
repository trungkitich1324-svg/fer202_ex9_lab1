import "./App.css";

function App() {
  return (
    <div className="page-container">
      <header id="home" className="hero">
        <div className="hero-inner">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_Education_logo.svg"
            alt="FPT Education"
          />
          <h1>FPT UNIVERSITY</h1>
          <nav className="site-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="page-content">
        <section id="about" className="section">
          <h2>About</h2>
          <p>This is the about section of the website.</p>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>For any inquiries, please contact us at example@example.com.</p>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2023 Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;