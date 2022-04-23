import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from '../components/NavBar'


const withAuth = (WrappedComponent) => {
  return (props) => {
    const Router = useRouter();
    const [verified, setVerified] = useState(false);

    useEffect(() => {
      const accessToken = localStorage.getItem("user");
      // if no accessToken was found,then we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/");
      } else {
        setVerified(accessToken);
      }
    }, []);

    if (verified) {
      return (
        <NavBar>
          <WrappedComponent {...props} />
        </NavBar>
        )
    } else {
      return null;
    }
  };
};

export default withAuth;