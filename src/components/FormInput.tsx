import { Control, FieldValues } from 'react-hook-form';
import { InputFieldProps } from '../constants/inputFieldsData';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';

interface Props {
  inputField: InputFieldProps;
  control: Control<FieldValues>;
}

export const FormInput = ({ inputField, control }: Props) => {
  return (
    <FormField
      control={control}
      name={inputField.id}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel>{inputField.label}</FormLabel>
          <FormControl>
            <Input
              type={inputField.inputType}
              placeholder={inputField.placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
