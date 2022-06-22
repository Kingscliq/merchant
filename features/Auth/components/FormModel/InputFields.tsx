import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from '@mui/material';

import { TextField, Select } from '@components/index';
import type { FieldConfig } from 'formik';
import { useField, useFormikContext } from 'formik';

interface Props extends FieldConfig {
  label: string;
  // component?: React.ReactNode;
}

interface CheckboxProps extends FieldConfig {
  label?: string;
  name: string;
  legend?: string;
}

export const InputField = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);

  return (
    <>
      <TextField
        label={label}
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    </>
  );
};

export const SelectField = ({ label, children, ...props }: Props): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <Select
      label={label}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    >{ children}</Select>
  );
};

export const CheckboxField = ({
  name,
  label,
  legend,
  ...props
}: CheckboxProps) => {
  const [field, meta] = useField(props);
  const { setFieldValue } = useFormikContext();

  const handleChange = (e): void => {
    setFieldValue(name, e.target.checked);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const configCheckbox = {
    ...field,
    onChange: handleChange,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) configFormControl.error = true;

  return (
    <>
      <FormControl {...configFormControl}>
        {/* <FormLabel component="legend">{legend}</FormLabel> */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox sx={{ padding: '0', m: '0' }} {...configCheckbox} />
            }
          />
        </FormGroup>
      </FormControl>
    </>
  );
};
