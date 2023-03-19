import React, { useEffect } from "react";
import { listProducts } from "./slices";
import { useAppDispatch } from "./hooks/customHooks";
import FlowboxLogo from "./assets/svg/FlowboxLogo";
import Dashboard from "./sections/dashboard/Dashboard";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    <React.Fragment>
      <div className="App-header">
        <FlowboxLogo />
        <div className="App-header-title">Photoslurp</div>
      </div>
      <Dashboard />
    </React.Fragment>
  );
}

export default App;
