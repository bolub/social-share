import { useSearchParams } from "next/navigation";

export const inputIds = {
  link: "link",
  text: "text",
  url: "url",
};

export const useQueryParams = () => {
  const searchParams = useSearchParams();

  return {
    link: searchParams.get(inputIds.link) || ("" as string),
    text: searchParams.get(inputIds.text) || ("" as string),
    url: searchParams.get(inputIds.url) || ("" as string),
  };
};
