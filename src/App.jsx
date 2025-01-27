import { useState } from 'react'
import './App.css'
import React from "react";
import { Notifications, AccountCircle } from '@mui/icons-material';
import { Box,Divider,AppBar,Typography,Paper, TextField,Toolbar,IconButton,Button, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, Dialog,DialogActions,DialogContent,DialogTitle, } from "@mui/material";
function App() {
  const [selectedOption, setSelectedOption] = useState(""); 
  return (
    // SideBar
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Box
        sx={{
          width: 240,
          backgroundColor: "#021c33",
          color: "#fff",
          padding: 2,
          display: { xs: "none", md: "flex" }, 
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ marginBottom: 2, fontSize:"14px", textAlign:"left", fontWeight:"bold" }}>
            Students
          </Typography>
          <List>
            {["Dashboard", "Pages", "Courses", "Announcements"].map((item) => (
              <ListItem
                key={item}
                button
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                }}
              >
               <ListItemText
          primary={item}
          primaryTypographyProps={{
            fontSize: "13px", // Explicitly set font size here
          }}
        />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ backgroundColor: "rgba(255,255,255,0.5)", marginBottom: 2 }} />

          <Typography variant="h6" sx={{  marginBottom: 1, fontSize:"14px",textAlign:"left", fontWeight:"bold" }}>
            Instructor
          </Typography>
          <List>
            {["Dashboard", "Pages", "Courses","Announcements"].map((item) => (
              <ListItem
                key={item}
                button
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" }, }}>
              <ListItemText
          primary={item}
          primaryTypographyProps={{
            fontSize: "13px", // Explicitly set font size here
          }}
        /></ListItem>
            ))}
          </List>
        </Box>
        <Box>
         
          <List>
            {["Settings","Keyboard Shortcuts", "Logout"].map((item) => (
              <ListItem
                key={item}
                button
                sx={{
                  color: "#fff",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
                }}
              >
              <ListItemText
          primary={item}
          primaryTypographyProps={{
            fontSize: "13px", 
          }}
        />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 2,
          overflow: "auto",
          backgroundColor: "#f9f9f9",
        }}
      >
<Box 
      sx={{display: 'flex', alignItems: 'center', maxWidth: 500,padding: 2, justifyContent: 'space-between',
    '@media (max-width: 600px)': {justifyContent: 'flex-end', backgroundColor: '#021c33', },}}>
      <Typography 
        sx={{  flex: 1, color: 'black', fontSize: '16px',  fontWeight: 'bold',display: { xs: 'none', sm: 'block' },  whiteSpace: 'nowrap', 
        }}
      >
        Module 1
      </Typography>

      <TextField variant="outlined" size="small" placeholder="Search" sx={{marginRight: 2, width: 180,  borderRadius: '50px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '50px', 
          },
          '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '50px', 
          },
          padding: '0 12px', 
          display: { xs: 'none', sm: 'inline-block' }, 
        }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        sx={{marginRight: 2, paddingX: 1, textTransform: 'none', backgroundColor: "#063565",borderRadius: '50px',  fontSize: '10px', height: '40px',display: { xs: 'none', sm: 'inline-block' }, minWidth:"150px"}}>
        Collect Daily Rewards
      </Button>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
  <IconButton 
    sx={{ 
      color: '#021c33', 
      marginRight: 2, 
      '@media (max-width: 600px)': {
        color: '#ffffff',
      },
    }}
  >
    <Notifications />
  </IconButton>

  <IconButton 
    sx={{ 
      color: '#021c33', 
      '@media (max-width: 600px)': {
        color: '#ffffff',
      },
    }}
  >
    <AccountCircle />
  </IconButton>
</Box>
    </Box>
  {/* Main question box here */}
 <Paper
          elevation={3}
          sx={{ padding: 3,maxWidth: 500,margin: "20px auto",textAlign: "center",    borderRadius: '16px'  }}>
<Box
  sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start',  }}
>
  <Typography variant="h6" gutterBottom sx={{fontWeight:"bold", fontSize:"12px"}}>
  MODULE 1 &gt; Chapter
  </Typography>
  <Typography variant="h6" gutterBottom sx={{fontWeight:"bold", fontSize:"32px"}}>
    MegaScholarship
  </Typography>
  <Typography variant="h6" gutterBottom sx={{color:"grey", fontSize:"16px", textAlign:"left"}}>
    When you land on a sample web page or open an email and see content at the beginning with lorem ipsum, the page creator apparently placed the gibberish on purpose.
  </Typography>
</Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginTop: 2, borderRadius:16 }}>
           {["24", "60%", "15 min", "10/24"].map((option) => (
  <Button
    key={option}
    variant={selectedOption === option ? "contained" : "outlined"}
    sx={{
      textTransform: "none",color:"black",width: "100%",display: 'flex',justifyContent: 'space-between',  padding: '8px 16px',   }} >
    <span>{option}</span>
    <span style={{ marginLeft: 'auto', color:"grey" }}>
      {option === "24" ? "Questions" : ""}
      {option === "60%" ? "Pass Rate" : ""}
      {option === "15 min" ? "Duration" : ""}
      {option === "10/24" ? "Score" : ""}
    </span>
  </Button>
))}
<Box sx={{ display: 'flex', gap: 1, width: '100%', flexDirection: { xs: 'column', sm: 'row' } }}>
  <Button
    variant="contained"
    color="primary"
    sx={{
      backgroundColor: "#021c33",
      minWidth: "100px",
      flex: 1,  
      fontSize: '16px',  fontWeight:"bold"
    }}
  >
    Start Quiz
  </Button>
  <Button
    variant="contained"
    color="secondary"
    sx={{
      backgroundColor: "white",
      color: "#021c33",
      flex: 1, 
      fontSize: '16px',  fontWeight:"bold"
    }}
  >
    View Previous Result
  </Button>
</Box>
          </Box>
          {selectedOption && (
            <Typography
              variant="body1"
              sx={{
                marginTop: 3,
                fontWeight: "bold",
                color: "#4caf50",
              }}
            >
            </Typography>
          )}
        </Paper>
        
      </Box>
    </Box>
  );
}
export default App