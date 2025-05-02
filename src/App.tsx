import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import "./index.css";
import LearnPage from "./LearnPage";
import LearnChildPage from "./LearnChildPage";
import { DataVerificationPage } from "./DataVerificationPage";
import Test from "./components/Test";
import Parent2 from "./components/upliftiing/Parent2";

export default function App() {
  return (
    <div className="p-4">
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
        <Route path="/test" element={<Test></Test>}></Route>
        <Route path="/scene2" element={<Parent2></Parent2>}></Route>
        <Route
          path="*"
          element={<Navigate to="/" replace></Navigate>}
        ></Route>{" "}
        {/* replace  does not remember the fake route */}
      </Routes>
    </div>
  );
}
