import { useState } from "react";
import CustomTabPanel from "./CustomTabPanel";
import { Tab , Box , Tabs  } from "@mui/material";
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
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, bgcolor: "background.paper" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label=" Personal Computer " {...a11yProps(0)} />
              <Tab label="Laptops" {...a11yProps(1)} />
              <Tab label="SmartPhones" {...a11yProps(2)} />
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