import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)(() => ({
  color: 'purple',
  backgroundColor: '#00cc66',
  borderRadius: 20,
  padding: '6px 16px',
  border: '1px solid #00cc66',
  '&:focus': {
    outline: 'none',
  },
  '&:hover': {
    backgroundColor: '#00ff99',
    border: '1px solid #00ff99',
  },
}));
