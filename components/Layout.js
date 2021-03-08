import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <main className="container py-4">{children}</main>
    <footer className="bg-dark text-light text-center">
      <div className="container p-4">
        <h1>&copy; Santiago Varela Portfolio</h1>
        <p>2000 - {new Date().getFullYear()}</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default Layout;
