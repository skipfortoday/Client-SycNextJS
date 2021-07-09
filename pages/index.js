import React, { useEffect } from "react";
import Admin from "../src/layouts/admin";
import CardStatus from "../src/components/cardStatus";
import BottomNav from "../src/layouts/bottomNav";

const Dashboard = () => {
  return (
    <>
      <CardStatus />
    </>
  );
};
Dashboard.layout = BottomNav;
export default Dashboard;
