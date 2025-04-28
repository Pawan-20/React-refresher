import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import "./index.css";
import LearnPage from "./LearnPage";
import LearnChildPage from "./LearnChildPage";
import DataVerificationPage from "./DataVerificationPage";
export default function App() {
  return (
    <div className="p-4 bg-teal-500">
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/learn" element={<LearnPage></LearnPage>}></Route>
        <Route
          path="/learn-child"
          element={<LearnChildPage></LearnChildPage>}
        ></Route>
        <Route
          path="/data-verification"
          element={<DataVerificationPage></DataVerificationPage>}
        ></Route>
        <Route path="*" element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}
