import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
// Icons
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ title, completed, onCheck, onDelete }) => {
  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton color="primary" edge="end" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      }
      divider
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={completed}
            onChange={(e) => onCheck(e.target.checked)}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': 1 }}
          />
        </ListItemIcon>
        <ListItemText id={1} primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export default TodoItem;
