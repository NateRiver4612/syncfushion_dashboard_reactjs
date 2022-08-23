import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

const App = () => {
  const activeMenu = true;

  return (
    <App_Container>
      <Settings_Icon_Container>
        <Tooltip title="Settings">
          <Settings_Button>
            <Settings_Icon></Settings_Icon>
          </Settings_Button>
        </Tooltip>
      </Settings_Icon_Container>

      {activeMenu ? (
        <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
          <Sidebar />
        </div>
      ) : (
        <div className="w-0 dark:bg-secondary-dark-bg h-0">
          <Sidebar />
        </div>
      )}
      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
          <Navbar />
        </div>

        {/* Routes of application */}
        <div>
          <Routes>
            {/* dashboard  */}
            <Route path="/" element={<Ecommerce />} />
            <Route path="/ecommerce" element={<Ecommerce />} />

            {/* pages  */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/customers" element={<Customers />} />

            {/* apps  */}
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/color-picker" element={<ColorPicker />} />

            {/* charts  */}
            <Route path="/line" element={<Line />} />
            <Route path="/area" element={<Area />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/color-mapping" element={<ColorMapping />} />
            <Route path="/pyramid" element={<Pyramid />} />
            <Route path="/stacked" element={<Stacked />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </App_Container>
  );
};

const App_Container = styled.div`
  /* overflow-x: hidden; */
`;

const Settings_Icon = styled(FiSettings)`
  height: 31px;
  width: 31px;
  color: white;
`;

const Settings_Icon_Container = styled.div`
  position: fixed;
  right: 30px;
  bottom: 20px;
  z-index: 1;
`;

const Settings_Button = styled.button`
  size: 500px !important;
  padding: 12px;
  border-radius: 50px;
  background-color: grey;
`;

export default App;
