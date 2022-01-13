import { useEffect, useState, forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Store
import { fetchLists, deleteList } from 'store/lists/actions';
import { selectLists } from 'store/lists/selectors';
// Components
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import AddListModal from 'components/AddListModal';
// Icons
import Add from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import ListIcon from '@mui/icons-material/List';
import DeleteIcon from '@mui/icons-material/Delete';

const topList = [
  {
    title: 'All tasks',
    icon: HomeIcon,
    to: '/',
  },
  {
    title: 'Starred',
    icon: StarIcon,
    to: '/starred',
  },
];

const CustomLink = forwardRef((props, ref) => <Link ref={ref} {...props} />);

const Sidebar = ({ width = 240 }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { data } = useSelector(selectLists);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchLists());
  }, [dispatch]);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleDelete = (id) => dispatch(deleteList(id));

  return (
    <>
      <AddListModal open={isModalOpen} onClose={closeModal} />
      <Drawer
        sx={{
          width: width,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: width,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {topList.map(({ title, icon: Icon, to }) => (
            <ListItem
              button
              key={title}
              component={CustomLink}
              to={to}
              selected={to === pathname}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box
          sx={{
            px: 2,
            pt: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography>Projects</Typography>
          <IconButton color="primary" onClick={openModal} edge="end">
            <Add />
          </IconButton>
        </Box>
        <List>
          {data.map(({ title, id }) => (
            <ListItem
              key={id}
              selected={`/${id}` === pathname}
              secondaryAction={
                <IconButton
                  color="primary"
                  edge="end"
                  onClick={() => handleDelete(id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton role={undefined} component={CustomLink} to={id}>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
