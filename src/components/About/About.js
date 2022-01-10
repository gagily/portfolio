import "./about.scss";

function About({ profileImage, imageSkills }) {
  return (
    <section className="about-section container">
      <h2 id="about">ABOUT</h2>
      <div className="row">
        <div className="about-section__image-container col-lg-6">
          <ProfileImage profileImage={profileImage} />
        </div>
        <div className="col-lg-6">
          <div>
            <p className="about-section__skills-desc">
              Hello, my name is <strong>Dragana Zivkovic</strong>. I'm software
              engineer with frontend skills and experience in using
              object-oriented languages.
              <br />
              My interest for web development started back in 2017 when I
              started to explore HTML,CSS and JS to create small interactive
              projectes. Below is a list of my tehnical skills:
            </p>
          </div>
          <Skills imageSkills={imageSkills} />
        </div>
      </div>
    </section>
  );
}

function ProfileImage({ profileImage }) {
  return (
    <figure>
      <img
        src={profileImage[0]}
        srcSet={`${profileImage[1]} 440w, ${profileImage[0]} 768w`}
        className="about-section__image"
        alt="profile image"
      />
    </figure>
  );
}

function Skills({ imageSkills }) {
  return (
    <div className="about-section__skills">
      {imageSkills.map((rows, index) => (
        <div className="about-section__skills__row pb-4" key={index}>
          {rows.row.map((image) => {
            return (
              <div key={image.id}>
                <img
                  src={image.icon}
                  className="about-section__skills__row__icon"
                  title={image.alt}
                  alt={image.alt + " icon"}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default About;
