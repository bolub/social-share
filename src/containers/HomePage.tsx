import { css } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";
import { DisappearingText } from "./components/DisappearingText";
import { ShareableData } from "./components/shareable-data/ShareableData";
import { SocialLinks } from "./components/social-links/SocialLinks";

export const HomePage = () => {
  return (
    <>
      <header className={container()}>
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "40vh",
          })}
        >
          <h1
            className={css({
              fontSize: { base: "4xl", md: "5xl" },
              fontWeight: "bold",
              maxW: "650px",
              lineHeight: "tight",
            })}
          >
            Get Social shareable links for <DisappearingText />
          </h1>
        </div>
      </header>

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
