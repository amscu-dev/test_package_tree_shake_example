import { StyledButton } from './CustomButton.styles';

interface CustomButtonProps {
  buttonText: string;
  onClickHandler: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText = 'Hi there',
  onClickHandler = () => {},
}) => {
  return <StyledButton onClick={onClickHandler}>{buttonText}</StyledButton>;
};

export default CustomButton;
