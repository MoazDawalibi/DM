import { useSearchParams } from "react-router-dom";

export default function useUpdateSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParams = (query: string, value: string) => {
    const params = searchParams.get(query);
    if (params) {
      searchParams.set(query, value);
      setSearchParams(searchParams, { replace: true });
      return;
    }
    searchParams.append(query, value);
    setSearchParams(searchParams, { replace: true });
  };

  return { updateParams };
}
