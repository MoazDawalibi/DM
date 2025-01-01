import React from "react";
import { usegetTitleFromRoute } from "../../Hooks/usegetTitleFromRoute";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Help from "../../Pages/Help/Page";
import { useHelpStateState } from "../../state/HelpState";
const Layout = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const location = useLocation();
  const { HelpModal } = useHelpStateState();
  return (
    <>
      <Helmet>
        <title>{usegetTitleFromRoute(location.pathname)}</title>
      </Helmet>
      <div className="Layout">
        <NavBar />
        <main className={`${className} Layout_Body`}>{children}</main>
        <Footer />
        {HelpModal && <Help />}
      </div>
    </>
  );
};

export default Layout;
