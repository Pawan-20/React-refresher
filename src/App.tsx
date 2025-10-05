import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import "./index.css";
import LearnPage from "./LearnPage";

import { DataVerificationPage } from "./DataVerificationPage";
import Test from "./Test";
import Loader from "./components/loaders/Loader2";
import Parent1 from "./components/passingFromChildToParent/Parent";
import Parent2 from "./components/passingFromChildToParent/Parent2";
import Parent3 from "./components/passingFromChildToParent/Parent3";
import Parent4 from "./components/passingFromChildToParent/Parent4";

import ScienceLab from "./advancedContext/bell-reducer/ScienceLab";
import BellContextReducer from "./advancedContext/bell-reducer/BellContextReducer";
import Child from "./contextComponents/Child";
import RTKIndex from "./rtk/RTKIndex";
import RTKIndex2 from "./rtkLevel2/RTKIndex2";
import RTKIndex3 from "./rtkLevel3/RTKIndex3";
import Index4 from "./learning rtk advanced/Index4";
import UseStateHook from "./hooks/UseStateHook";
import UseEffectHook from "./hooks/UseEffectHook";
import UseMemoHook from "./hooks/UseMemoHook";
import UseCallbackHook from "./hooks/useCallbackHook";
import CustomHookExample from "./hooks/CustomHookExample";
import UseLayoutEffectHook from "./hooks/UseLayoutEffectHook";
import UseTransitionHook from "./hooks/UseTransitionHook";
import UseDeferredValueHook from "./hooks/UseDeferredValueHook";
import UseImperativeHandle from "./hooks/UseImperativeHandle";
import UseHook from "./hooks/UseHook";
import { Suspense } from "react";
import UseFormStateHook from "./hooks/UseFormStateHook";
import UseOptimisticHook from "./hooks/UseOptimisticHook";
import UseActionState from "./hooks/UseActionState";
import CenterADiv from "./small-concepts/CenterADiv";
import Debouncer from "./small-concepts/Debouncer";
import Throtller from "./small-concepts/Throttler";

export default function App() {
  return (
    <Routes>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="/learn" element={<LearnPage></LearnPage>}></Route>
      <Route
        path="/data-verification"
        element={<DataVerificationPage></DataVerificationPage>}
      ></Route>
      <Route path="/loader" element={<Loader></Loader>}></Route>
      <Route path="/c2p1" element={<Parent1></Parent1>}></Route>
      <Route path="/c2p2" element={<Parent2></Parent2>}></Route>
      <Route path="/c2p3" element={<Parent3></Parent3>}></Route>
      <Route path="/c2p4" element={<Parent4></Parent4>}></Route>
      <Route path="/test" element={<Test />}></Route>
      <Route path="/rtk" element={<RTKIndex />}></Route>
      <Route path="/rtk2" element={<RTKIndex2 />}></Route>
      <Route path="/rtk3" element={<RTKIndex3 />}></Route>
      <Route path="/rtk4" element={<Index4 />}></Route>
      <Route path="/hook1" element={<UseStateHook />}></Route>
      <Route path="/hook2" element={<UseEffectHook />}></Route>
      <Route path="/hook3" element={<UseMemoHook />}></Route>
      <Route path="/hook4" element={<UseCallbackHook />}></Route>
      <Route path="/hook5" element={<CustomHookExample />}></Route>
      <Route path="/hook6" element={<UseLayoutEffectHook />}></Route>
      <Route path="/hook7" element={<UseTransitionHook />}></Route>
      <Route path="/hook8" element={<UseDeferredValueHook />}></Route>
      <Route path="/hook9" element={<UseImperativeHandle />}></Route>
      <Route
        path="/hook10"
        element={
          <Suspense fallback={<p>Loading Hook10...</p>}>
            <UseHook url="https://jsonplaceholder.typicode.com/comments/1" />
          </Suspense>
        }
      />
      <Route path="/hook11" element={<UseFormStateHook />}></Route>
      <Route path="/hook12" element={<UseOptimisticHook />}></Route>
      <Route path="/hook13" element={<UseActionState />}></Route>
      <Route element={<CenterADiv></CenterADiv>} path="/center"></Route>
      <Route element={<Debouncer></Debouncer>} path="/debouncer"></Route>
      <Route element={<Throtller></Throtller>} path="/throttler"></Route>

      <Route path="*" element={<Navigate to="/" replace></Navigate>}></Route>
      {/* replace  does not remember the fake route */}
    </Routes>
  );
}
