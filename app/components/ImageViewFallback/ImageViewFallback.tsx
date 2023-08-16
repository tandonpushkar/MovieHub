import React from 'react';
import ProgressiveFastImage from '@freakycoder/react-native-progressive-fast-image';

export const ImageViewFallback: any = ({source, ...props}: any) => {
  return (
    <ProgressiveFastImage
      thumbnailSource={{
        uri: 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg',
      }}
      errorSource={{
        uri: 'https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg',
      }}
      source={source}
      {...(props as any)}
    />
  );
};

ImageViewFallback.displayName = 'Image';
