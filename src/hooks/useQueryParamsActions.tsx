import { useRouter, useSearchParams } from "next/navigation";

export const useQueryParamsActions = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const setQueryParam = ({ name, value }: { name: string; value: string }) => {
    const search = new URLSearchParams(searchParams);

    if (!value) {
      search.delete(name);
    } else {
      search.set(name, value);
    }

    router.replace(`/?${search.toString()}`);
  };

  return {
    setQueryParam,
  };
};
