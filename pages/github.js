import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Error from "./_error";

const Github = () => {
  const [statusCode, setStatusCode] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://api.github.com/users/sirzes02");
    const data = await res.json();
    setData(data);
    setStatusCode(res.status > 200 ? res.status : false);
  };

  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{data?.name}</h1>
            <img
              src={data?.avatar_url}
              alt="github picture"
              className="rounded-circle"
            />
            <div className="pt-3">
              <p>{data?.bio}</p>
            </div>
            <a
              href={data?.blog}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              My Blog
            </a>
            <a
              href={data?.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Go To Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Github;
