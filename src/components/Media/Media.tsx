import * as React from "react";
import Image, { ImageProps } from "next/image";

export interface MediaProps extends ImageProps {
  title: string;
  src: string;
  width?: number;
  height?: number;
}

export default function Media({
  title,
  src,
  width = 500,
  height = 500,
  ...props
}: MediaProps) {
  return (
    <Image
      alt={title}
      width={props.layout === "fill" ? undefined : width}
      height={props.layout === "fill" ? undefined : height}
      objectFit="cover"
      loader={({ src }) => src}
      unoptimized
      {...props}
      src={src}
    />
  );
}
