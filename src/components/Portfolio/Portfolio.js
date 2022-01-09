import "./portfolio.scss";

function Portfolio({ projects }) {
  const rows = projects.reduce(function (rows, key, index) {
    return (
      (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
      rows
    );
  }, []);

  return (
    <section className="portfolio-section container">
      <h2 id="portfolio">PORTFOLIO</h2>
      <p>
        Below you can see some personal projects that I've been working on.
        Click on the image title to see the projects. Some of projects are on
        free Heroku so be patient :)
      </p>
      {rows.map((row, i) => (
        <div className="portfolio-section__row row" key={i}>
          {row.map((project, index) => (
            <div
              className="portfolio-section__row__project col-md-6"
              key={index}
            >
              <div className="portfolio-section__row__project--hovereffect">
                <img
                  className="portfolio-section__row__project-image"
                  src={project.image.src}
                  alt={project.image.alt}
                />
                <div className="portfolio-section__row__project-overlay">
                  <h3>{project.name}</h3>

                  <a
                    className="portfolio-section__row__project-icon"
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener"
                  >
                    <span>CODE</span>
                    <i className="fa fa-code"></i>
                  </a>

                  <a
                    className="portfolio-section__row__project-icon"
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener"
                  >
                    <span>DEMO</span>
                    <i className="fa fa-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
