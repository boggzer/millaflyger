import React from 'react';
/// <reference path="../../utils/declarations.d.ts" />
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION,
  MagnifierZoom,
  MagnifierPreview,
  MagnifierContainer,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from 'react-image-magnifiers';

const HoverZoom = () => {
  return (
    <MagnifierContainer>
      <div>
        <MagnifierPreview />
      </div>
      <MagnifierZoom />
    </MagnifierContainer>
  );
};

export default HoverZoom;
