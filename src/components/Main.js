import { useState } from "react";
import { Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Container, AppBar, Tabs, Tab } from "@material-ui/core";

import Dashboard from "./Dashboard";
import UserManager from "./UserManager";
import SpotManager from "./SpotManager";
import BookingManager from "./BookingManager";
import Statistics from "./Statistics";

import {
  MenuBook as MenuBookIcon,
  Room as RoomIcon,
  PeopleOutline as PeopleOutlineIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  Equalizer as EqualizerIcon,
} from "@material-ui/icons";

function Main(props) {
  const [value, setValue] = useState(0);
  const [redirect, setRedirect] = useState();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "transparent", // theme.palette.background.paper
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {redirect}

      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Dashboard" icon={<DashboardIcon />} />
          <Tab label="User Manager" icon={<PeopleOutlineIcon />} />
          <Tab label="Spot Manager" icon={<RoomIcon />} />
          <Tab label="Booking Manager" icon={<MenuBookIcon />} />
          <Tab label="Statistics" icon={<EqualizerIcon />} />
          <Tab
            label="Log Out"
            icon={<ExitToAppIcon />}
            onClick={() => {
              localStorage.removeItem("token");
              setRedirect(<Redirect to="/" />);
            }}
          />
        </Tabs>
      </AppBar>
      <Container maxWidth="lg" spacing={10}>
        {value === 0 && <Dashboard />}
        {value === 1 && <UserManager />}
        {value === 2 && <SpotManager />}
        {value === 3 && <BookingManager />}
        {value === 4 && <Statistics />}
      </Container>
    </div>
  );
}

export default Main;
