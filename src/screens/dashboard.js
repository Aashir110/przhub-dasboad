import Toolbar from "@mui/material/Toolbar";
import {
  Typography,
  Paper,
  Box,
  Select,
  MenuItem,
} from "@mui/material";

// import {Grid} from "@mui/system/Unstable_Grid/Grid";
import { Grid } from "@mui/material";
import SalesChart from ".//..//components/SalesChart";


const Dashboard = ({ averageSales }) => {

  const date = new Date().toLocaleDateString();

  const texts = [
    "product listing",
    "Client Listing",
    "New Request",
    "All Request",
  ];

  return (
    <div
      style={{zIndex: 10009, backgroundColor: 'white'}}

    >
      {/* Your dashboard content */}

      <div style={{ marginTop: "10px" }}>
        <div style={{  }}>
          {/* Sidebar navigation */}

          {/* Main content area */}
          <main
            style={{
              flexGrow: 1,
              // display: "flex",
              // flexDirection: "column",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                marginBottom: "20px",
                padding: "8px",
              }}
            >
              <Typography variant="h6" style={{ color: "1769aa" }}>
                <h3>Dashboard</h3>
              </Typography>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Paper
                  style={{
                    
                    borderRadius: "10px",
                    backgroundColor: "#1769aa",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="subtitle1"> {texts[0]}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  style={{
                    
                    borderRadius: "10px",
                    backgroundColor: "#ff9800",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="subtitle1">{texts[1]}</Typography>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  style={{
                    
                    borderRadius: "10px",
                    backgroundColor: "#1769aa",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                  }}
                >
                  {/* <Typography variant="subtitle1"> Average Sales of Month: {new Intl.NumberFormat('en-US').format(averageSales)}</Typography> */}
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper
                  style={{
                    
                    borderRadius: "10px",
                    backgroundColor: "#ff9800",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100px",
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="subtitle1">{texts[3]}</Typography>
                </Paper>
              </Grid>
            </Grid>
            <Toolbar />
            <Box>
              <SalesChart />
            </Box>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
