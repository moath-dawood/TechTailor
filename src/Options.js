import { useState } from "react";
import CustomTabPanel from "./CustomTabPanel";
import { Tab, Box, Tabs } from "@mui/material";
import Alert from '@mui/material/Alert';
import Table from "./Table";
import { a11yProps } from "./CustomTabPanel";
import LaptopView from "./LaptopView";
export default function Options({ PCs, laptops, mobiles }) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="OPbox">
      {PCs ? (
        PCs.length ? (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ border: " 2px solid #138A5F", borderTop: "0px", borderRight: "0px", borderLeft: "0px", bgcolor: "background.paper" }}>
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
                width: "100%",
                padding: "10px",
                "& button": {
                  fontSize: "13px",
                  marginTop: "5px",
                },
                "& button:hover": {
                  bgcolor: "#d0d0d0",
                  borderRadius: "10px",
                  color: "#138A5F"
                },
                "& button:focus": {
                  border: "1px solid",
                  color: "black",
                  borderRadius: "10px"
                },
                "& button.Mui-selected": {
                  color: "#138A5F",
                  border: "1px solid",
                  borderRadius: "10px",
                  marginBottom: "5px",
                },
                "& button:active": {
                  color: "#138A5F",
                  borderRadius: "10px"
                },

                fontFamily: "'Open Sans', sans-serif;"
              }}
            >
              {PCs.map((option, index) => (
                <Tab sx={{ marginRight: "15px" }} key={index} label={`Option ${index + 1}`} {...a11yProps(index)} />
              ))}
            </Tabs>
          </Box>
          {PCs.map((pcItem, index) => (
            <CustomTabPanel key={index} value={value} index={index}>
              <Table PC={pcItem.pc} PcPrice={pcItem.total_price} />
            </CustomTabPanel>
          ))}
        </Box>) : <Alert severity="error">The inputted budget is not suitable.</Alert>
      ) : null
      }
      {laptops ? (
        laptops.length ? (
          <Box sx={{ width: "100%" }}>
            <Box sx={{ border: " 2px solid #138A5F", borderTop: "0px", borderRight: "0px", borderLeft: "0px", bgcolor: "background.paper" }}>
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
                  width: "100%",
                  padding: "10px",
                  "& button": {
                    fontSize: "13px",
                    marginTop: "5px",
                  },
                  "& button:hover": {
                    bgcolor: "#d0d0d0",
                    borderRadius: "10px",
                    color: "#138A5F"
                  },
                  "& button:focus": {
                    border: "1px solid",
                    color: "black",
                    borderRadius: "10px"
                  },
                  "& button.Mui-selected": {
                    color: "#138A5F",
                    border: "1px solid",
                    borderRadius: "10px",
                    marginBottom: "5px",
                  },
                  "& button:active": {
                    color: "#138A5F",
                    borderRadius: "10px"
                  },

                  fontFamily: "'Open Sans', sans-serif;"
                }}
              >
                {laptops.map((option, index) => (
                  <Tab sx={{ marginRight: "15px" }} key={index} label={`Option ${index + 1}`} {...a11yProps(index)} />
                ))}
              </Tabs>
            </Box>
            {laptops.map((LapItem, index) => (
              <CustomTabPanel key={index} value={value} index={index}>
                <LaptopView laptop={LapItem.device} lapPrice={LapItem.price} />
              </CustomTabPanel>
            ))}
          </Box>) : <Alert severity="error">The inputted budget is not suitable.</Alert>
      ) : null
      }

      {mobiles ? (
        mobiles.length ? (
          <Box sx={{ width: "100%" }}>
            <Box sx={{ border: " 2px solid #138A5F", borderTop: "0px", borderRight: "0px", borderLeft: "0px", bgcolor: "background.paper", width: "100%" }}>
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
                  width: "100%",
                  padding: "10px",
                  "& button": {
                    fontSize: "13px",
                    marginTop: "5px",
                  },
                  "& button:hover": {
                    bgcolor: "#d0d0d0",
                    borderRadius: "10px",
                    color: "#138A5F"
                  },
                  "& button:focus": {
                    border: "1px solid",
                    color: "black",
                    borderRadius: "10px"
                  },
                  "& button.Mui-selected": {
                    color: "#138A5F",
                    border: "1px solid",
                    borderRadius: "10px",
                    marginBottom: "5px",
                  },
                  "& button:active": {
                    color: "#138A5F",
                    borderRadius: "10px"
                  },
                  fontFamily: "'Open Sans', sans-serif;"
                }}
              >
                {mobiles.map((option, index) => (
                  <Tab sx={{ marginRight: "15px" }} key={index} label={`Option ${index + 1}`} {...a11yProps(index)} />
                ))}
              </Tabs>
            </Box>
            {mobiles.map((mobileItem, index) => (
              <CustomTabPanel key={index} value={value} index={index}>
                <LaptopView mobile={mobileItem.mobile} mobilePrice={mobileItem.price} />
              </CustomTabPanel>
            ))}
          </Box>) : <Alert severity="error">The inputted budget is not suitable.</Alert>
      ) : null
      }

    </div>
  );
}
