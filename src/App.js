import './app.css';
import Box from '@mui/material/Box';
import Sidebar from './components/Sidebar';

const sidebarWidth = 240;

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar width={sidebarWidth}></Sidebar>
      <Box sx={{ flexGrow: 1, p: 2 }}>cont</Box>
    </Box>
  );
}
