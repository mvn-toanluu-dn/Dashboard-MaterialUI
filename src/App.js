import { Box, Button, Grid, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/styles.scss';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import SideBar from './components/Layouts/SideBar';
import Chat from './pages/Chat';
import DashBoard from './pages/Dashboard';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { useState } from 'react';
import { darkTheme, defaultTheme } from './components/Layouts/Theme';
import CssBaseline from '@mui/material/CssBaseline';
import Profile from './pages/Profile';
function App() {
  const [isChange, setIsChange] = useState(false);

  return (
    <ThemeProvider theme={isChange ? darkTheme : defaultTheme}>
      <CssBaseline />
      <div className='page-home'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container>
            <Grid item xs={2.15} className='dashboard-sidebar'>
              <SideBar />
            </Grid>
            <Grid item xs={9.8} className='dashboard-content'>
              <Header />
              <Routes>
                <Route path='/*' element={<DashBoard />} />
                <Route path='/chat' element={<Chat />} />
                <Route path='/profile' element={<Profile />} />
              </Routes>
              <Footer />
            </Grid>
            <Grid>
              <Button
                onClick={() => setIsChange(!isChange)}
                disableTouchRipple={true}
                size='large'
                className='button-theme'
              >
                <ColorLensIcon fontSize='medium' />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
