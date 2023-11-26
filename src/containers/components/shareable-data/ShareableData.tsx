"use client";

import { css } from "../../../../styled-system/css";
import { vstack } from "../../../../styled-system/patterns";
import { Label } from "@/components/form/Label";
import { SectionHeader } from "../SectionHeader";
import { inputIds, useQueryParams } from "./useQueryParams";
import { useQueryParamsActions } from "@/hooks/useQueryParamsActions";
import { FormControl } from "@/components/form/FormControl";

import { AvailableFor } from "./AvailableFor";
import DebouncedInput from "@/components/form/DebouncedInput";
import DebouncedTextarea from "@/components/form/DebouncedTextarea";

export const ShareableData = () => {
  const { link, text, url } = useQueryParams();
  const { setQueryParam } = useQueryParamsActions();

  return (
    <div
      id="shareableData"
      className={css({
        width: "full",
        maxW: { md: "350px" },
        minW: { md: "350px" },
        h: "fit-content",
      })}
    >
      <div
        className={css({
          width: "full",
          position: "sticky",
          top: "40px",
        })}
      >
        <SectionHeader>Shareable data</SectionHeader>

        <p
          className={css({
            fontSize: "sm",
            mt: "10px",
            color: "gray.600",
          })}
        >
          Add data you&apos;d like to share in this section. Note that fields
          differ by social media
        </p>

        <div className={vstack({ gap: "32px", mt: "32px" })}>
          <FormControl id="link-container">
            <Label htmlFor="link">Link to share</Label>

            <DebouncedInput
              id="link"
              type="link"
              name="link"
              value={link}
              placeholder="https://example.com"
              onChange={(value) => {
                setQueryParam({
                  name: inputIds.link,
                  value: value as string,
                });
              }}
            />

            <AvailableFor twitter linkedIn pinterest />
          </FormControl>

          <FormControl id="text-container">
            <Label htmlFor="text">Text to share</Label>

            <DebouncedTextarea
              id="text"
              name="text"
              value={text}
              placeholder="Checkout this resource at example"
              onChange={(value) => {
                setQueryParam({
                  name: inputIds.text,
                  value: value as string,
                });
              }}
            />

            <AvailableFor twitter linkedIn whatsapp pinterest />
          </FormControl>

          <FormControl id="url-container">
            <Label htmlFor="url">Image url to share </Label>

            <DebouncedInput
              id="url"
              type="url"
              name="url"
              value={url}
              placeholder="https://example.com/image.png"
              onChange={(value) => {
                setQueryParam({
                  name: inputIds.url,
                  value: value as string,
                });
              }}
            />

            <AvailableFor pinterest />
          </FormControl>
        </div>
      </div>
    </div>
  );
};
