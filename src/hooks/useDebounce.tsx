import { useState, useEffect } from "react";

/**
 * A custom React hook that debounces a value. The hook delays updating the returned value
 * until after a specified delay has passed since the last time the value was changed.
 *
 * @template T - The type of the value to debounce.
 * @param {T} value - The value to debounce.
 * @param {number} delay - The debounce delay in milliseconds. Must be a non-negative number.
 * @returns {T} - The debounced value.
 *
 * @throws {Error} If the delay is a negative number.
 *
 * @example
 * ```tsx
 * const [searchTerm, setSearchTerm] = useState("");
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 * useEffect(() => {
 *   if (debouncedSearchTerm) {
 *     // Perform a search or API call with the debounced value
 *   }
 * }, [debouncedSearchTerm]);
 * ```
 */
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
