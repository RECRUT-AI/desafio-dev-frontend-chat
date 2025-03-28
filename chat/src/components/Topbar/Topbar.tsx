"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Topbar = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      className="shadow-none! border-b-1 border-[#c8c8c8] p-2"
    >
      <Toolbar className="justify-between">
        <Typography variant="h5">Recruit.AI Chat</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
