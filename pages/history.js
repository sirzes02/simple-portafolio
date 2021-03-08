import Layout from "../components/Layout";
import { history } from "../profile";

const Blog = () => (
  <Layout footer={false} dark title="My history">
    <div className="row">
      {history.map(({ name, description, from, to }, i) => (
        <div className="col-md-12 py-2" key={i}>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h1>{name}</h1>
                </div>
                <div className="col">
                  <h3 className="ml-auto text-right mr-2">
                    {from} - {to}
                  </h3>
                </div>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Layout>
);

export default Blog;
