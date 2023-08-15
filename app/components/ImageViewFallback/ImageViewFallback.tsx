import React from 'react';
import ProgressiveFastImage from '@freakycoder/react-native-progressive-fast-image';

export const ImageViewFallback: any = ({source, ...props}: any) => {
  return (
    <ProgressiveFastImage
      //thumbnailSource={{uri: getImageUrl(IMAGE_URL_ENUMS.FALLBACK_IMG)}}
      //errorSource={{uri: getImageUrl(IMAGE_URL_ENUMS.FALLBACK_IMG)}}
      source={source}
      {...(props as any)}
    />
  );
};

ImageViewFallback.displayName = 'Image';
