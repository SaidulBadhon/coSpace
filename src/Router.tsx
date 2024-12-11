import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CallPage from "./pages/CallPage";
import Layout from "./Layout";

export default function Router() {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route path="" element={<HomePage />} />

        <Route path="/call" element={<CallPage />} />
      </Route>
    </Routes>
  );
}
