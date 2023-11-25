import { Social } from "@/shared/social";
import { useQueryParams } from "../shareable-data/useQueryParams";

export const shareIds = {
  linkedin: {
    text: "title",
    link: null,
    image: null,
  },
  twitter: {
    text: "text",
    link: "url",
    image: null,
  },
  whatsapp: {
    text: "text",
    link: null,
    image: null,
  },
  pinterest: {
    text: "description",
    link: "url",
    image: "media",
  },
};

export const useSocialShareUrl = () => {
  const { text, link, url } = useQueryParams();

  const formatSocialShareUrl = (baseUrl: string, type: Social) => {
    const urlObject = new URL(baseUrl);

    const socialIds = shareIds[type];

    if (socialIds.text && text) {
      urlObject.searchParams.set(socialIds.text, text);
    }

    if (socialIds.link && link) {
      urlObject.searchParams.set(socialIds.link, link);
    }

    if (socialIds.image && url) {
      urlObject.searchParams.set(socialIds.image, url);
    }

    return urlObject.href;
  };

  return {
    formatSocialShareUrl,
  };
};
