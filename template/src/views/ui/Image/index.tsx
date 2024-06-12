import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import FastImage, {FastImageProps, Source} from 'react-native-fast-image';
import mime from 'mime';

import {ActivityIndicator} from '@src/views/ui';
import {colors} from '@src/helpers';

interface Props extends FastImageProps {
  defaultImage?: string;
}

const Image: FC<Props> = ({
  defaultImage = 'https://unsplash.it/400/400?image=1',
  source,
  style,
  ...restprops
}) => {
  if (!source) return <View></View>;

  const [loading, setLoading] = useState(true);
  const [_source, _setSource] = useState<number | Source>(source);

  const handleError = () => {
    _setSource({uri: defaultImage});
  };

  return (
    <View style={style}>
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator color={colors.primary} size={18} />
        </View>
      )}
      {(typeof _source === 'number' ||
        (_source.uri && mime.getType(_source.uri) !== 'image/svg+xml')) && (
        <FastImage
          source={_source}
          style={styles.image}
          resizeMode="contain"
          onLoadEnd={() => setLoading(false)}
          onError={handleError}
          {...restprops}
        />
      )}
      {typeof _source !== 'number' &&
        _source.uri &&
        mime.getType(_source.uri) === 'image/svg+xml' && (
          <SvgUri
            uri={_source.uri}
            style={styles.image}
            onLoad={() => setLoading(false)}
            onError={handleError}
          />
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Image;
