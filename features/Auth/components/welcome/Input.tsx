import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useField } from 'formik';
import { TextField, Select as SelectField } from '@/components';

export const Input = ({ label, ...props }: any) => {
  // const [field, meta] = useField(props);

  return (
    <TextField
      label={label}
      {...props}
    />
  );
};

export const Select = ({ label, children, ...props }: any): JSX.Element => {
  // const [field, meta] = useField(props);

  return (
    <SelectField
      label={label}
      // {...field}
      {...props}
      // error={meta.touched && Boolean(meta.error)}
      // helperText={meta.touched && meta.error}
    >
      {children}
    </SelectField>
  );
};

export const RadioInput = ({ children, newValue, handleChange }: any) => {
  return (
    <FormControl>
      {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={handleChange}
        value={newValue}
      >
        {children}
      </RadioGroup>
    </FormControl>
  );
};
