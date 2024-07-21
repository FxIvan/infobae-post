import "./App.css";
import { Layout } from "./components/layout";
import router from "./routes/routes";
import { RouterProvider } from "react-router-dom";

import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="731921851574-i43jomj56q2co4ca6pe0f8610acejdp5.apps.googleusercontent.com">
      <Layout>
        <RouterProvider router={router} />;
      </Layout>
    </GoogleOAuthProvider>
  );
}

export default App;
