import React from 'react';
import { SelectValue, Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';

interface SelectComponentProps {
  array: string[];
  onChangeFn: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string
}

function SelectComponent({ array, onChangeFn, placeholder }: SelectComponentProps) {
  return (
    <Select  onValueChange={e => onChangeFn(e)} >
      <SelectTrigger className="w-[180px] ">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {array.map(item => (
          <SelectItem  key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectComponent;
