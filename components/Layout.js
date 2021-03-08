import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children, title, footer = true, dark }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => NProgress.start();

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={dark && "bg-dark"}>
      <Navbar />
      <main className="container py-4">
        {title && (
          <h1 className={`text-center ${dark && "text-light"}`}>{title}</h1>
        )}
        {children}
      </main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Santiago Varela Portfolio</h1>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>All rights reserved.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
