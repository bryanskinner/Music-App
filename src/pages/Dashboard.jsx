import { useState } from "react";
import { Switch } from "@mui/material";
import { Slider, Select, MenuItem } from "@mui/material";
import CustomCardWithChildren from "../components/CustomCardWithChildren";
import "./Dashboard.css"; 

const Dashboard = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [isLoud, setisLoud] = useState(0);
  const [isQuality, setQuality] = useState("medium");

  const handleChange = (event) => {
    setQuality(event.target.value);
  };

  return (
    <div className="dashboard-container">
      <h2>Welcome User</h2>
      <div className="card-container">
        {/* Online Mode Card */}
        <CustomCardWithChildren
          title="Online Mode"
          body="Is this application connected to the internet?"
        >
          <Switch onChange={() => setIsOnline(!isOnline)} />
        </CustomCardWithChildren>

        {/* Master Volume Card */}
        <CustomCardWithChildren
          title="Master Volume"
          body="Overrides all other sound settings in this application"
        >
          <Slider
            onChange={(evt) => setisLoud(evt.target.value)}
            step={10}
            marks
            min={0}
            max={100}
          />
        </CustomCardWithChildren>

      
        <CustomCardWithChildren
          title="Sound Quality"
          body="Manually control the music quality in the event of a poor connection"
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={isQuality}
            label="Sound Quality"
            onChange={handleChange}
          >
            <MenuItem value={"low"}>Low</MenuItem>
            <MenuItem value={"medium"}>Medium</MenuItem>
            <MenuItem value={"high"}>High</MenuItem>
          </Select>
        </CustomCardWithChildren>
      </div>

      
      <h3>System Notifications</h3>
      {isOnline && (
        <p>
          Your application is offline. You won't be able to share or stream
          music to other devices.
        </p>
      )}

      {isLoud >= 80 && (
        <p>Listening to music at a high volume could cause long-term hearing loss.</p>
      )}

      {isQuality === "low" && (
        <p>Music quality is degraded. Increase quality if your connection allows it.</p>
      )}
    </div>
  );
};

export default Dashboard;
