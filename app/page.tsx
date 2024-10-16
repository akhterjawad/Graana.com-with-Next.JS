import React from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";  // Material UI Button
import TextField from "@mui/material/TextField";  // Material UI Input
import IconButton from "@mui/material/IconButton";  // Material UI IconButton
import SearchIcon from "@mui/icons-material/Search";  // Material UI Search Icon
import home_main_img from "./asset/HeaderImage main.webp";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Image
          src={home_main_img}
          layout="fill"
          objectFit="cover"
          alt="home_main_img"
          style={{ zIndex: -1 }}
        />

        {/* Content Box */}
        <Box sx={{ px: 3 }}>
          {/* First Typography */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: 30, sm: 40, md: 45, lg: 50 }, // Responsive font sizes
              fontWeight: "bold",
              color: "white",
              mb: 1, // Margin bottom
            }}
          >
            Buy or rent vetted properties at the
          </Typography>

          {/* Second Typography */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: 30, sm: 40, md: 45, lg: 50 }, // Responsive font sizes
              fontWeight: "bold",
              color: "white",
              mb: 3, // Margin bottom
            }}
          >
            most trusted online real estate portal
          </Typography>

          {/* Material UI Buttons */}
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button sx={{
              backgroundColor:'whitesmoke',
              color: 'black'
            }} variant="contained" color="primary" size="large">
              BUY
            </Button>
            <Button sx={{
              backgroundColor:'whitesmoke',
              color: 'black',
border:'none'
            }}  variant="outlined" color="primary" size="large">
              RENT
            </Button>
          </Box>

          {/* Search Box */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%", // Make it responsive
              maxWidth: "600px", // Limit the max width of the search bar
              mx: "auto",
            }}
          >
            {/* Material UI Input */}
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by city or area"
              InputProps={{
                style: {
                  paddingRight: 0, // Remove extra padding for better alignment with button
                },
              }}
              sx={{
                width: "100%",
                bgcolor: "white",
                borderTopLeftRadius: '20px',
                borderBottomLeftRadius: '20px', // Corrected here
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none", // Remove the default border
                  },
                  "&:hover fieldset": {
                    border: "none", // No border on hover
                  },
                  "&.Mui-focused fieldset": {
                    border: "none", // No border when focused
                  },
                },
              }}
            />

            <IconButton
              type="submit"
              sx={{
                p: 2,
                borderTopLeftRadius: '0px',
                borderBottomLeftRadius: '0px', // Corrected here
                backgroundColor: "#ef5350",
                color: "white",
              }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>

          </Box>
        </Box>
      </Box>
      
    </React.Fragment>
  );
}
