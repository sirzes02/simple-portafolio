import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences, tests } from "../profile";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Index = () => {
  const MySwal = withReactContent(Swal);

  const alert = () => {
    MySwal.fire({
      title: <h1>Contact Means</h1>,
      html: (
        <p>
          <h4>Email:</h4>
          <h5>sirzes02@gmail.com</h5>
        </p>
      ),
      confirmButtonText: "Close",
    });
  };

  return (
    <Layout>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img
                  src="profile-img.jpg"
                  alt="profile image"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h1>Santiago Varela</h1>
                <h3>Frontend - Backend Developer</h3>
                <p>
                  Responsible person, with experience in managing environments
                  and different programming languages ​​to FrontEnd and BackEnd
                  level. Management of different Frameworks and libraries for
                  development both web and mobile, among these, Laravel, React,
                  React-native, ASP.NET and Svelte. Person with knowledge of
                  programming in languages ​​such as C, C ++, Java, Kotlin,
                  Python, MatLab and JavaScript. Enthusiast of virtual and
                  augmented realities with the management of the ThreeJS library
                  and the use from Unity. Knowledge in handling UNIX systems;
                  Docker handling. a!
                </p>
                <button type="button" class="btn btn-secondary" onClick={alert}>
                  Contact me
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-ligth">
            <div className="card-body">
              <h1>Skills</h1>
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progress"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8">
          <div className="card bg-ligth">
            <div className="card-body">
              <h1>Experience</h1>
              <ul>
                {experiences.map(({ title, description, from, to }, i) => (
                  <li key={i}>
                    <h3>{title}</h3>
                    <h5>
                      {from}-{to}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/experiences">
                <a className="btn btn-ligth disabled">Khow more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light">Programming Tests</h1>
              </div>
              {tests.map(({ name, description, image, link }, i) => (
                <div className="col-md-4 p-2" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        alt="test image"
                        className="img-fluid border border-dark card-img-top"
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href={link} target="_blank">
                        Know more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <a
                href="https://github.com/sirzes02"
                target="_blank"
                className="btn btn-outline-light"
              >
                More General Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
