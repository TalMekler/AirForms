import { useState, useEffect } from "react";

const useDebounce = <T,>(value: T, delay: number): T => {
  if (delay < 0) throw new Error("The delay must be a non-negative number.");

  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
