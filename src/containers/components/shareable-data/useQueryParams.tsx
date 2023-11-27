import { useSearchParams } from "next/navigation";

export const inputIds = {
  link: "link",
  text: "text",
  url: "url",
};

export const useQueryParams = () => {
  const searchParams = useSearchParams();

  const getValue = (param: string) => {
    const rawParamValue = searchParams.get(param) || "";

    return decodeURIComponent(rawParamValue);
  };

  return {
    link: getValue(inputIds.link),
    text: getValue(inputIds.text),
    url: getValue(inputIds.url),
  };
};
