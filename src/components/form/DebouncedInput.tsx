import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import useDebounce from "@/hooks/useDebounce";
import { Input } from "./Input";

type DebouncedInputProps = {
  onChange: (value: string | number | readonly string[]) => void;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<typeof Input>, "onChange">;

const DebouncedInput = ({
  onChange,
  value,
  delay = 500,
  ...props
}: DebouncedInputProps) => {
  const [inputValue, setInputValue] = useState(value || "");
  const debouncedInputValue = useDebounce(inputValue, 300);

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current(debouncedInputValue);
  }, [debouncedInputValue]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return <Input {...props} value={inputValue} onChange={handleInputChange} />;
};

export default DebouncedInput;
