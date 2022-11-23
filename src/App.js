import { Box, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/styles.scss';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import SideBar from './components/Layouts/SideBar';
import Chat from './pages/Chat';
import DashBoard from './pages/Dashboard';

function App() {
  return (
    <div className='page-home '>
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
            </Routes>
            <Footer />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
