import React, {
  ChangeEvent,
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";
import useDebounce from "@/hooks/useDebounce";
import { Textarea } from "./Textarea";

type DebouncedTextareaProps = {
  onChange: (value: string | number | readonly string[]) => void;
  delay?: number;
} & Omit<ComponentPropsWithoutRef<typeof Textarea>, "onChange">;

const DebouncedTextarea = ({
  onChange,
  value,
  delay = 500,
  ...props
}: DebouncedTextareaProps) => {
  const [inputValue, setInputValue] = useState(value || "");
  const debouncedTextareaValue = useDebounce(inputValue, 300);

  const onChangeRef = useRef(onChange);

  useEffect(() => {
    onChangeRef.current(debouncedTextareaValue);
  }, [debouncedTextareaValue]);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Textarea {...props} value={inputValue} onChange={handleInputChange} />
  );
};

export default DebouncedTextarea;
