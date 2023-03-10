import React, { useState } from 'react';
import Image from 'next/image';

const NewsImage = (props) => {
    
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(false);
    const [oldSrc, setOldSrc] = useState(src);
    if (oldSrc!==src)
    {
        setImgSrc(false)
        setOldSrc(src)
    }
    return (
        <Image
            {...rest}
            src={imgSrc?fallbackSrc:src}
            alt="somosgay"
            onError={() => {
                setImgSrc(true);
            }}
        />
    );
};

export default NewsImage;