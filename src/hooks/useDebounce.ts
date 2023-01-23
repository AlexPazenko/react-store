import {useEffect, useState} from "react";

export function useDebounce(value: string, delay: number):string {
  const [debounced, setDebounced] = useState<string>(value);

  useEffect(() => {
    const hendler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(hendler);
  },[value, delay]);

  return debounced;
}