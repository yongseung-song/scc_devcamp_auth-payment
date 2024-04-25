import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Control, FieldValues } from 'react-hook-form';
import { InputFieldProps } from '../constants/inputFieldsData';

interface Props {
  inputField: InputFieldProps;
  control: Control<FieldValues>;
}

export const FormSelect = ({ inputField, control }: Props) => {
  return (
    <FormField
      control={control}
      name={inputField.id}
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel>{inputField.label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger>
                <SelectValue placeholder={inputField.placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">관리자</SelectItem>
                <SelectItem value="user">일반 사용자</SelectItem>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
