import React from "react";

import { UploadableImage } from "./UploadableImage";
import { Image } from "./Image";

type Props = {
    imageUrl: string,
    width: string,
    className: string,
    onImageClick: () => void,
};

const defaultProps = {
    imageUrl: "",
    width: "36px",
}

export function Thumbnail({
    imageUrl,
    width,
    className,
    onImageClick,
}: Props) {

    return (
        <Image
            src={imageUrl}
            alt={""}
            width={width}
            height={width}
            circle={true}
            inline={true}
            className={className}
            onClick={onImageClick}
        />
    )
}

Thumbnail.defaultProps = defaultProps;
