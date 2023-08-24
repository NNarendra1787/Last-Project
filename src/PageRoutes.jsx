import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Router/Home";
import Store from "./Router/Store";
import IPhone from "./Router/IPhone";
// import IPad from './Router/IPad'
// import Macbook from './Router/Macbook'
// import Accesseries from './Router/Accesseries'
import LoginData from "./Router/LoginData";
import Register from "./Router/Register";
import ClickPage from "./DataComp/ClickPage";
import LinkPage from "./DataComp/LinkPage";
import MyLap from "./Router/MyLap";
import RCarts from "./RDX/RCarts";
import King from "./King";
import RootLayout from "./RDX/RootLayout";
import Navbar from "./Navbar";

function PageRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/iPhone" element={<IPhone />} />
          {/* <Route path="/iPad" element={<IPad />} /> */}
          <Route path="/lap" element={<MyLap />} />
          {/* <Route path="/Access" element={<Accesseries />} /> */}

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginData />} />
          <Route path="/ClickPage/:id" element={<ClickPage />} />
          <Route path="/:category" element={<LinkPage />} />
          <Route path="/king" element={<King />} />
          <Route path="/Cart" element={<RCarts />} />
          <Route  path="/" element={<Navbar />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default PageRoutes;
