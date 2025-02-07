import { useState, ChangeEvent } from "react";

function useInputNote(initialValue: string, maxLength: number = 0) {
  const [value, setValue] = useState(initialValue);
  const charCount = value.length;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLDivElement>
  ) => {
    const inputValue =
      (event.target as HTMLInputElement).value ??
      event.currentTarget.textContent ??
      "";

    if (!maxLength || inputValue.length <= maxLength) {
      setValue(inputValue);
    }
  };

  const resetValue = () => setValue("");

  return {
    value,
    charCount,
    handleChange,
    resetValue,
  };
}

export default useInputNote;
