import React from "react";
import { className } from "@/shared/lib/className";
import { useState } from "react";
import { TextTags } from "../model/textTags";
import { catLongText } from "@/shared/lib/catLongText";

import styles from "./Text.module.scss";

interface ITextProps {
  tag?: keyof typeof TextTags;
  className?: string;
  children: string;
  maxLetters?: number;
  showMoreBtn?: boolean;
}

export const Text: React.FC<ITextProps> = ({
  tag: Tag = "p",
  className: propsClass = "",
  maxLetters,
  showMoreBtn = false,
  children,
}) => {
  const [showMore, setShowMore] = useState(false);

  let cattedText = "";

  if (maxLetters) {
    cattedText = catLongText(children, maxLetters);
  }

  return (
    <Tag className={className(styles.text, Tag, propsClass)}>
      {maxLetters && !showMore ? cattedText : children}

      <br />

      {maxLetters && (
        <span onClick={() => setShowMore((value) => !value)}>
          {showMore && showMoreBtn ? "Свернуть" : "Развернуть"}
        </span>
      )}
    </Tag>
  );
};
