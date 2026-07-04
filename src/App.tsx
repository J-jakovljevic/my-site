import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "@components/Layout";
import Home from "@pages/Home";
import Experience from "@pages/Experience";
import { EXPERIENCE, PROJECTS } from "./utils/routes";
import Projects from "@pages/Projects";
// import Contact from "@pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={EXPERIENCE} element={<Experience />} />
        <Route path={PROJECTS} element={<Projects />} />
        {/* <Route path={CONTACT} element={<Contact />} /> */}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
