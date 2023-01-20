import React from "react";
import { Route, Routes } from "react-router-dom";
import Capsules from "../pages/Capsules/Capsules";
import Rockets from "../pages/Rockets/Rockets";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Capsules />}></Route>
        <Route path="/rockets" element={<Rockets />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
