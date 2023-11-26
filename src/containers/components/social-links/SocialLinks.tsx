"use client";

import { css } from "../../../../styled-system/css";
import { SectionHeader } from "../SectionHeader";
import { vstack } from "../../../../styled-system/patterns";
import { SocialLink } from "../shareable-data/SocialLink";
import { useSocialShareUrl } from "./useSocialShareUrl";

export const SocialLinks = () => {
  const { formatSocialShareUrl } = useSocialShareUrl();

  return (
    <div
      id="socialLinks"
      className={css({
        width: "full",
        maxW: { md: "500px" },
      })}
    >
      <SectionHeader>Social Links</SectionHeader>

      <div className={vstack({ gap: "32px", mt: "24px" })}>
        <SocialLink
          name="Twitter"
          link={formatSocialShareUrl(
            "https://twitter.com/intent/tweet",
            "twitter"
          )}
          type="twitter"
        />

        <SocialLink
          name="Linkedin"
          link={formatSocialShareUrl(
            "https://www.linkedin.com/sharing/share-offsite",
            "linkedin"
          )}
          type="linkedin"
        />

        <SocialLink
          name="Whatsapp"
          link={formatSocialShareUrl("https://wa.me", "whatsapp")}
          type="whatsapp"
        />

        <SocialLink
          name="Pinterest"
          link={formatSocialShareUrl(
            "http://pinterest.com/pin/create/button",
            "pinterest"
          )}
          type="pinterest"
        />
      </div>
    </div>
  );
};
