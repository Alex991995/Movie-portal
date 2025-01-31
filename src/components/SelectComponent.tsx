import React, { useState } from 'react';
import { SelectValue, Select, SelectContent, SelectItem, SelectTrigger } from './ui/select';

interface SelectComponentProps {
  array: string[];
  onChangeFn: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  value: string;
}

function SelectComponent({ array, onChangeFn, placeholder, value }: SelectComponentProps) {
  return (
    <Select value={value} onValueChange={e => onChangeFn(e)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {array.map(item => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default SelectComponent;
