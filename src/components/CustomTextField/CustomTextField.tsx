import { StyledTextField } from './CustomTextField.styles';

interface CustomTextFieldProps {
  label: string;
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label = 'Field label',
  value = 'Hello there',
  onChangeHandler,
}) => {
  return (
    <StyledTextField value={value} onChange={onChangeHandler} label={label} />
  );
};

export default CustomTextField;
