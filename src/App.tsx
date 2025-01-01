import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Ui/Layout";
import { routes } from "./Routes";
import { Spin } from "antd";
import { useGuest } from "./api/auth";
import useAuthState from "./state/AuthState";
import { requestPermission } from "./utils/firebase/firebase";

const App = () => {
  const { data, mutate } = useGuest();
  const { Guest, setGuest } = useAuthState();
   
  useEffect(() => {
    if (data) {
      //@ts-ignore
      const guest = data?.token;
      setGuest(guest);

    }
  }, [data]);
  const randomtoken = Math.random()
  useEffect(() => {
    const fn_firebase = (async () => {
    // const token = await requestPermission()
      if (!Guest) {
        mutate({ fcm_token: randomtoken });
      }
    })
    fn_firebase()
  }, [Guest])

  // if (!Guest) {
  //   return <Spin />;
  // }
  return (
    <Routes>
      {routes?.map((route: any) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<Spin />}>
              {route.withLayout ? (
                <Layout>{route.element}</Layout>
              ) : (
                route.element
              )}
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
};

export default App;
