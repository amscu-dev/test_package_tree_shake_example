import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const StyledTextField = styled(TextField)(() => ({
  "& .MuiFormLabel-root": {
    color: "#00cc66",
    "&.MuiInputLabel-shrink": {
      color: "#00cc66",
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "purple !important",
    "&.Mui-focused": {
      borderColor: "purple",
    },
  },
  "& .MuiInputBase-root": {
    color: "#00cc66",
  },
}));
