import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Adress } from "../pages/adress/Address";
import { Home } from "../pages/home/Home";

export const Navigation: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/address" element={<Adress />} />
      </Routes>
    </>
  );
};
