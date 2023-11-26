import { useRouter } from "next/navigation";

export const useQueryParamsActions = () => {
  const router = useRouter();

  const setQueryParam = ({ name, value }: { name: string; value: string }) => {
    const search = new URLSearchParams(window.location.search);

    if (!value) {
      search.delete(name);
    } else {
      search.set(name, value);
    }

    router.replace(`/?${search.toString()}`, { scroll: false });
  };

  return {
    setQueryParam,
  };
};
