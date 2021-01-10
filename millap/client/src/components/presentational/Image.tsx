/* eslint-disable no-unused-vars */
import React from 'react';
import { isObject } from 'lodash';
import { ImageSizes } from '../../utils/constants';
import { ImageCardProps } from './ImageCard';

interface ImageProps extends ImageCardProps {
  pictureClasses?: string;
}

const Image = ({
  classes,
  imageSource,
  ImageProps,
  onClick,
  pictureClasses,
  title,
  size,
  ...props
}: ImageProps): React.ReactElement => {
  const mediaQueries: ImageSizes = {
    XS: '(min-width: 0px) and (max-width: 399px)',
    S: '(min-width: 400px) and (max-width: 699px)',
    M: '(min-width: 700px) and (max-width: 1499px)',
    L: '(min-width: 1500px) and (max-width: 1999px)',
    XL: '(min-width: 2000px)',
  };

  const Shadow = () => (
    <div
      // className={`${styles[`${showShadow}`]} ${styles.etc}`}
      style={{
        position: 'absolute',
        // left: x + 'px',
        // top: y + 'px',
        // opacity: showShadow ? 1 : 0,
        zIndex: -10,
        height: '2px',
        width: '2px',
        borderRadius: '50%',
        backgroundColor: '#787878',
        transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
        boxShadow:
          '0px 0px 3px 2px #787878, 0px 0px 13px 10px #686868, 0px 0px 28px 28px #bebebe',
      }}
    />
  );
  return (
    <picture onClick={onClick} className={pictureClasses}>
      {/* {<Shadow />} */}
      {isObject(imageSource) ? (
        Object.keys(imageSource).map(
          (key: string, i: number, arr: string[]): React.ReactElement =>
            i !== arr.length - 1 ? (
              <React.Fragment key={key}>
                {mediaQueries[key as keyof ImageSizes] && (
                  <source
                    media={`screen and ${
                      mediaQueries[key as keyof ImageSizes]
                    }`}
                    srcSet={imageSource[key as keyof ImageSizes]}
                  />
                )}
              </React.Fragment>
            ) : (
              <img
                // onPointerEnter={(e) => <Shadow x={e.clientX} y={e.clientY} />}
                // onMouseLeave={() => {}}
                key={key}
                className={classes}
                src={imageSource.M}
                title={title}
                {...ImageProps}
              />
            ),
        )
      ) : (
        <img
          className={classes}
          src={imageSource}
          width={size}
          title={title}
          {...ImageProps}
        />
      )}
    </picture>
  );
};

export default Image;
