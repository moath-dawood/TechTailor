import { useState } from "react";
import CustomTabPanel from "./CustomTabPanel";
import { Tab, Box, Tabs } from "@mui/material";
import { a11yProps } from "./CustomTabPanel";
import PCUse from "./PCUse";
import LapTopUse from "./LapTopUse";
import PhoneUse from "./PhoneUse";

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="box">
      <Box sx={{ width: "100%", borderRadius: "15px", bgcolor: "#ffffff" }}>
        <Box sx={{ borderBottom: 0, display:"flex", justifyContent:"space-around" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            textColor="inherit"
            indicatorColor="#138A5F"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#138A5F",
              }
            }}
            sx={{
              width:"100%",
              padding:"15px",
              "& button": {
                fontSize: "13px",
                marginTop:"5px",
              },
              "& button:hover": {
                bgcolor:"#d0d0d0",
                borderRadius: "10px",
                color:"#138A5F"
              },
              "& button:focus": {
                border:"1px solid",
                color: "black",
                borderRadius: "10px"
              },
              "& button.Mui-selected":{
                color: "#138A5F",
                border:"1px solid",
                borderRadius: "10px",
                marginBottom:"5px",
              },
              "& button:active": {
                color: "#138A5F",
                borderRadius: "10px"
                },
              fontFamily:"'Open Sans', sans-serif;"
            }}
          >
            <Tab sx={{ width: "30%", fontWeight:"700", marginRight:"10px" }} label="Personal Computer" {...a11yProps(0)} />
            <Tab sx={{ width: "30%", fontWeight:"700", marginRight:"10px" }} label="Laptop" {...a11yProps(1)} />
            <Tab sx={{ width: "30%", fontWeight:"700" }} label="Smartphone" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <PCUse />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <LapTopUse />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <PhoneUse />
        </CustomTabPanel>
      </Box>
    </div>
  );
}