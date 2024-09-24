import { Box } from "@mui/material"

import Navbar from "./components/Navbar"
import Content from "./components/ProfileInformation"
import Footer from "./components/Footer"

function App() {
  return (
    <Box sx={{ 
      maxWidth: '1440px',
      margin: '0 auto',
     }}>
      <Navbar />
      <Content />
      <Footer />
    </Box>
  )
}

export default App
