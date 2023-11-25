"use client";

import { css } from "../../../../styled-system/css";
import { vstack } from "../../../../styled-system/patterns";
import { Input } from "@/components/form/Input";
import { Label } from "@/components/form/Label";
import { Textarea } from "@/components/form/Textarea";
import { SectionHeader } from "../SectionHeader";
import { inputIds, useQueryParams } from "./useQueryParams";
import { useQueryParamsActions } from "@/hooks/useQueryParamsActions";
import { FormControl } from "@/components/form/FormControl";

import { AvailableFor } from "./AvailableFor";

export const ShareableData = () => {
  const { link, text, url } = useQueryParams();
  const { setQueryParam } = useQueryParamsActions();

  return (
    <div
      className={css({
        width: "full",
        maxW: "350px",
        minW: "350px",
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
          <FormControl>
            <Label htmlFor="link">Link to share</Label>

            <Input
              id="link"
              type="link"
              name="link"
              value={link}
              onChange={(e) => {
                setQueryParam({
                  name: inputIds.link,
                  value: e.target.value,
                });
              }}
              placeholder="https://example.com"
            />

            <AvailableFor twitter pinterest />
          </FormControl>

          <FormControl>
            <Label htmlFor="text">Text to share</Label>

            <Textarea
              id="text"
              name="text"
              value={text}
              placeholder="Checkout this resource at example"
              onChange={(e) => {
                setQueryParam({
                  name: inputIds.text,
                  value: e.target.value,
                });
              }}
            />

            <AvailableFor twitter linkedIn whatsapp pinterest />
          </FormControl>

          <FormControl>
            <Label htmlFor="url">Image url to share </Label>

            <Input
              id="url"
              type="url"
              name="url"
              value={url}
              placeholder="https://example.com/image.png"
              onChange={(e) => {
                setQueryParam({
                  name: inputIds.url,
                  value: e.target.value,
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
