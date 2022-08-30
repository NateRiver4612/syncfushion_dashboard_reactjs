import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import tw from "twin.macro";

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
import { useStateContext } from "./context/contextProvider";

const App = () => {
  const { activeMenu } = useStateContext();

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
        <Active_Sidebar className="sidebar ">
          <Sidebar />
        </Active_Sidebar>
      ) : (
        <Unactive_Sidebar>
          <Sidebar />
        </Unactive_Sidebar>
      )}
      <div
        className={
          activeMenu
            ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-100  "
            : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
        }
      >
        <Navbar_Container className="navbar">
          <Navbar />
        </Navbar_Container>

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

const Active_Sidebar = styled.div`
  ${tw`w-72 fixed dark:bg-secondary-dark-bg bg-white `}
`;

const Unactive_Sidebar = styled.div`
  ${tw`w-0 dark:bg-secondary-dark-bg h-0`}
`;

const Navbar_Container = styled.div`
  ${tw`fixed md:static bg-main-bg dark:bg-main-dark-bg w-full`}
`;

const App_Container = styled.div`
  overflow-x: hidden;
`;

const Settings_Icon = styled(FiSettings)`
  ${tw`h-8 w-8 text-white`}
`;

const Settings_Icon_Container = styled.div`
  ${tw`fixed right-5 bottom-4 z-10`}
`;

const Settings_Button = styled.button`
  ${tw`text-2xl p-3 rounded-full bg-gray-600`}
`;

export default App;
