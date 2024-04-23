import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Control, FieldValues } from 'react-hook-form';
import { InputFieldProps, SIGNUP_ROLE } from '../_constants/inputFieldsData';

interface Props {
  inputField: InputFieldProps;
  control: Control<FieldValues>;
}

export const InputField = ({ inputField, control }: Props) => {
  return (
    <FormField
      control={control}
      name={inputField.id}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{inputField.label}</FormLabel>
          <FormControl>
            {inputField.id !== SIGNUP_ROLE.id ? (
              <Input
                type={inputField.inputType}
                placeholder={inputField.placeholder}
                {...field}
              />
            ) : (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="역할을 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">관리자</SelectItem>
                  <SelectItem value="user">일반 사용자</SelectItem>
                </SelectContent>
              </Select>
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
