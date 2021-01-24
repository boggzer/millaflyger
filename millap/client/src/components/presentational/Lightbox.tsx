import React, { useEffect, useState, memo, lazy } from 'react';
const ImageCard = lazy(() => import('../presentational/ImageCard'));
import Container from '../presentational/Container';
import styled from 'styled-components';
import usePortal from 'react-cool-portal';
import { ProjectDataType } from '../../utils/global';
import leftArrowIcon from '../../assets/icons/arrow_left.svg';
import rightArrowIcon from '../../assets/icons/arrow_right.svg';
import closeIcon from '../../assets/icons/close.svg';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { initial } from 'lodash';

const StyledLightbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 20;
  .lightbox-buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 9;
    top: 0;
    left: 0;
    & > * {
      display: inline-flex;
    }
    & > .arrows {
      flex-direction: row !important;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;
    }
    & > .close {
      align-self: flex-end;
    }
  }
`;

const StyledButton = styled.button<{ readonly icon: string }>`
  height: 2rem;
  width: 2rem;
  background: unset;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url('${props.icon}')`};
  box-sizing: content-box;
  border: unset;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 2px solid rgb(200, 200, 200);
    border-radius: 1rem;
  }
`;

export interface LightboxProps {
  classes?: string;
  content: ProjectDataType;
  portalId?: string;
  showPortal?: boolean;
  activeIndex?: number;
  handleOpen?: any;
  handleHide?: any;
  setActive?: any;
}

const Lightbox = ({
  activeIndex = -1,
  classes,
  handleOpen,
  setActive,
  handleHide,
  content,
  portalId = 'lightbox-portal',
  showPortal,
}: LightboxProps): React.ReactElement => {
  const { Portal, isShow, show, hide } = usePortal({
    defaultShow: false,
    containerId: portalId,
    internalShowHide: true,
  });

  const action = (type: 'increment' | 'decrement' | 'close') => {
    switch (type) {
      case 'close':
        handleHide();
        break;
      case 'increment':
        activeIndex === content.images.length - 1
          ? setActive(0)
          : setActive(activeIndex + 1);
        break;

      case 'decrement':
        activeIndex === 0
          ? setActive(content.images.length - 1)
          : setActive(activeIndex - 1);
        break;
      default:
        return;
    }
  };

  const isShown = useMemo(() => activeIndex >= 0, [activeIndex]);

  useEffect(() => {
    console.log(isShown);
    isShown ? show() : () => hide();
    return hide;
  }, [isShown, activeIndex]);

  return (
    <Portal>
      <StyledLightbox className={classes}>
        <ImageCard
          imageSource={
            content.images[activeIndex]?.source[0]?.['XL' || 'L' || 'M']
          }
        />
        <Container classes='lightbox-buttons'>
          <StyledButton
            className='close'
            onClick={() => action('close')}
            icon={closeIcon}
          />
          <Container classes='arrows'>
            <StyledButton
              onClick={() => action('decrement')}
              icon={leftArrowIcon}
            />
            <StyledButton
              onClick={() => action('increment')}
              icon={rightArrowIcon}
            />
          </Container>
        </Container>
      </StyledLightbox>
    </Portal>
  );
};

export default Lightbox;
