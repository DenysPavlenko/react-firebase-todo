import { useState } from 'react';
import { useDispatch } from 'react-redux';
// Store
import { addList } from 'store/lists/actions';
// Components
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AddListModal = ({ open = true, onClose }) => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleInput = (e) => setName(e.target.value);

  const isValid = name.trim().length !== 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      dispatch(
        addList({
          title: name.trim(),
        })
      );
      setName('');
      onClose();
    }
  };

  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add list</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="List name"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleInput}
            value={name}
          />
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={!isValid}>
              Create
            </Button>
          </DialogActions>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddListModal;
