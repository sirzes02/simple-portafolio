import Layout from "../components/Layout";

const _error = ({ statusCode }) => (
  <Layout>
    <p className="text-center">
      {statusCode
        ? `Could not load your page: Status code ${statusCode}`
        : "Could not get this page"}
    </p>
  </Layout>
);

export default _error;
