import { Route, Routes } from 'react-router-dom';
import './app.css';
import Box from '@mui/material/Box';
import Sidebar from 'components/Sidebar';
import TodoList from 'components/TodoList';

const sidebarWidth = 240;

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar width={sidebarWidth} />
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/starred" element={<TodoList />} />
          <Route path="list/:listId" element={<TodoList />} />
        </Routes>
      </Box>
    </Box>
  );
}
