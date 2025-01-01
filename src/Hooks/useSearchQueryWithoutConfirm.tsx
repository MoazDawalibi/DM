import debounce from "lodash/debounce";
import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function useSearchQueryWithoutConfirm({
  queryParams,
}: {
  queryParams: string;
}): {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
} {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState(
    searchParams.get(queryParams) || "",
  );
  const updateParams = (page: string) => {
    const params = searchParams.get(queryParams);

    if (params) {
      searchParams.set(queryParams, page.toString());

      setSearchParams(searchParams, { replace: true });
      return;
    }
    searchParams.append(queryParams, page.toString());

    setSearchParams(searchParams, { replace: true });
  };

  const debouncedSetSearchParams = useCallback(
    debounce((value) => {
      updateParams(value);
    }, 500),
    [],
  );
  useEffect(() => {
    if (!inputValue || !inputValue.trim()) {
      return;
    }
    debouncedSetSearchParams(inputValue.trim());
    return () => {
      debouncedSetSearchParams.cancel();
    };
  }, [inputValue, debouncedSetSearchParams]);
  return {
    inputValue,
    setInputValue,
  };
}
