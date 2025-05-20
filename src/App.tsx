import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import "./index.css";
import LearnPage from "./LearnPage";
import LearnChildPage from "./LearnChildPage";
import { DataVerificationPage } from "./DataVerificationPage";
import Test from "./components/Test";
import Loader from "./components/loaders/Loader2";
import Parent1 from "./components/passingFromChildToParent/Parent";
import Parent2 from "./components/passingFromChildToParent/Parent2";
import Parent3 from "./components/passingFromChildToParent/Parent3";
import Parent4 from "./components/passingFromChildToParent/Parent4";
import SchoolProvider from "./contextComponents/SchoolProvider";
import Child from "./contextComponents/Child";
import AnotherChild from "./contextComponents/AnotherChild";
import ScienceLab from "./advancedContext/bell-reducer/ScienceLab";
import BellContextReducer from "./advancedContext/bell-reducer/BellContextReducer";

export default function App() {
  return (
    <BellContextReducer>
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="/learn" element={<LearnPage></LearnPage>}></Route>
        <Route
          path="/data-verification"
          element={<DataVerificationPage></DataVerificationPage>}
        ></Route>
        <Route path="/test" element={<Test></Test>}></Route>
        <Route path="/loader" element={<Loader></Loader>}></Route>
        <Route path="/c2p1" element={<Parent1></Parent1>}></Route>
        <Route path="/c2p2" element={<Parent2></Parent2>}></Route>
        <Route path="/c2p3" element={<Parent3></Parent3>}></Route>
        <Route path="/c2p4" element={<Parent4></Parent4>}></Route>
        <Route
          path="*"
          element={<Navigate to="/" replace></Navigate>}
        ></Route>{" "}
        {/* replace  does not remember the fake route */}
      </Routes>
      {/* <Child></Child> */}
      <ScienceLab></ScienceLab>
    </BellContextReducer>
  );
}
