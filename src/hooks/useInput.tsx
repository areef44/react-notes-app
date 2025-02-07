import { useState, ChangeEvent } from "react";

function useInput<T>(
  defaultValue: T
): [T, (event: ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState<T>(defaultValue);

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value as T);
  };

  return [value, handleValueChange];
}

export default useInput;
