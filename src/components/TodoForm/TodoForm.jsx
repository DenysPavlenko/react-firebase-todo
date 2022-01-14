import { useState } from 'react';
import { useParams } from 'react-router-dom';
// Components
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const TodoForm = ({ onAdd }) => {
  const params = useParams();
  const [title, setTitle] = useState('');

  const handleChange = (e) => setTitle(e.target.value);

  const isValid = title.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onAdd({ title, completed: false, listId: params.listId });
      setTitle('');
    }
  };

  return (
    <Stack component="form" onSubmit={handleSubmit} direction="row" spacing={2}>
      <TextField
        autoFocus
        label="Your todo"
        type="text"
        variant="outlined"
        onChange={handleChange}
        value={title}
        sx={{ flexGrow: 1 }}
      />
      <Button variant="contained" type="submit" disabled={!isValid}>
        Add todo
      </Button>
    </Stack>
  );
};

export default TodoForm;
