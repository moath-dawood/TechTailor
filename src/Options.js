import { useState } from "react";
import CustomTabPanel from "./CustomTabPanel";
import { Tab , Box , Tabs } from "@mui/material";
import Table from "./Table";
import { a11yProps } from "./CustomTabPanel";
import LaptopView from "./LaptopView";
export default function Options({PCs , laptops , mobiles}) {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className="box">
        { PCs ? (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, bgcolor: "background.paper" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label=" Option 1  " {...a11yProps(0)} />
              <Tab label="Option 2 " {...a11yProps(1)} />
              <Tab label="Option 3 " {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Table PC={PCs[0].pc } PcPrice={PCs[0].total_price}    />
            </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Table PC={PCs[1].pc } PcPrice={PCs[1].total_price}  />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Table PC={PCs[2].pc } PcPrice={PCs[2].total_price} />
          </CustomTabPanel>
          
        </Box>
        ): null}

        {laptops ? ( 
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, bgcolor: "background.paper" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label=" Option 1  " {...a11yProps(0)} />
              <Tab label="Option 2 " {...a11yProps(1)} />
              <Tab label="Option 3 " {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <LaptopView laptop={laptops[0].laptop} lapPrice={laptops[0].price}/>
            {console.log(laptops[0].laptop)}

          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
          <LaptopView laptop={laptops[1].laptop } lapPrice={laptops[1].price}/>

          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
          <LaptopView laptop={laptops[2].laptop} lapPrice={laptops[2].price}/>

          </CustomTabPanel> 
          </Box>): null}
          {mobiles ? ( 
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, bgcolor: "background.paper" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label=" Option 1  " {...a11yProps(0)} />
              <Tab label="Option 2 " {...a11yProps(1)} />
              <Tab label="Option 3 " {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <LaptopView mobile={mobiles[0]?.mobile} mobilePrice={mobiles[0].price}/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
          <LaptopView mobile={mobiles[1]?.mobile} mobilePrice={mobiles[1].price}/>

          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
          <LaptopView mobile={mobiles[2]?.mobile} mobilePrice={mobiles[2].price}/>

          </CustomTabPanel> 
          </Box>): null}
      </div>
    );
  }
  