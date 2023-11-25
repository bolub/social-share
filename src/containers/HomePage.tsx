import { css } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";
import { Header } from "./components/Header";
import { ShareableData } from "./components/shareable-data/ShareableData";
import { SocialLinks } from "./components/social-links/SocialLinks";

export const HomePage = () => {
  return (
    <>
      <Header />

      <main>
        <section
          id="content"
          className={container({ display: "flex", pb: "40px" })}
        >
          <div
            className={css({
              mx: "auto",
              width: "full",
              maxW: "900px",
              display: "flex",
              flexDir: { base: "column", md: "row" },
              justifyContent: "space-between",
              gap: "80px",
            })}
          >
            <ShareableData />

            <SocialLinks />
          </div>
        </section>
      </main>
    </>
  );
};
