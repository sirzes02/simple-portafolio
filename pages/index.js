import Layout from "../components/Layout";

const Index = () => (
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                blanditiis provident repellendus autem molestiae minus, eligendi
                deleniti suscipit laboriosam error distinctio consequuntur
                voluptates, harum ipsum aperiam veniam in, sunt a!
              </p>
              <a href="/hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
);

export default Index;
