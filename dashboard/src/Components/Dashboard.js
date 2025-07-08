import React from "react";

import { Route, Routes } from "react-router-dom";
import Apps from "./App";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />}></Route>
          <Route exact path="/orders" element={<Orders />}></Route>
          <Route exact path="/holdings" element={<Holdings />}></Route>
          <Route exact path="/positions" element={<Positions />}></Route>
          <Route exact path="/funds" element={<Funds />}></Route>
          <Route exact path="/apps" element={<Apps />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
