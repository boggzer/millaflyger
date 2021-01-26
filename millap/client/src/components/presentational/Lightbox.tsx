import React, { useEffect, useMemo, lazy } from 'react';
const ImageCard = lazy(() => import('../presentational/ImageCard'));
import Container from '../presentational/Container';
import Text from '../presentational/Text';
import styled, { css } from 'styled-components';
import usePortal from 'react-cool-portal';
import { ProjectDataType } from '../../utils/global';
import leftArrowIcon from '../../assets/icons/arrow_left.svg';
import rightArrowIcon from '../../assets/icons/arrow_right.svg';
import closeIcon from '../../assets/icons/close.svg';

const StyledLightbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 20;
  overflow: hidden;
  padding: 5rem;
  background: rgba(10, 10, 0, 0.8);
  box-sizing: border-box;
  .container > div:first-of-type {
    height: 100%;
    min-height: 150px;
    max-width: 1200px;
    width: auto;
    min-width: 300px;
  }
  & > div:first-of-type {
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .lightbox-buttons {
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    width: 100vw;
    z-index: 9;
    top: 0;
    left: 0;
    & > * {
      display: inline-flex;
    }
    & > div {
      flex-direction: row !important;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 100%;
    }
    & > div:last-of-type {
      height: fit-content;
      width: fit-content;
      flex-basis: 10px;
      position: absolute;
      height: ;
    }
  }
`;

const StyledButton = styled.button<{
  readonly icon: string;
  readonly iconType: LightboxReducerType;
}>`
  padding: unset;
  box-sizing: border-box;
  flex: 0 0 auto;
  height: ${({ iconType }) => (iconType === 'close' ? 2 : 2)}rem;
  width: ${({ iconType }) => (iconType === 'close' ? 2 : 2)}rem;
  background: rgba(255, 255, 255, 0);
  background-size: ${({ iconType }) =>
    iconType === 'close' ? 'contain' : '2rem 3rem'};
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url('${props.icon}')`};
  box-sizing: content-box;
  color: rgb(240, 240, 220);
  border: unset;
  border-radius: 1rem;
  ${({ iconType }) =>
    iconType === 'close' &&
    css`
      align-self: flex-end;
      margin: unset;
      position: relative;
      top: -3rem;
      right: -3rem;
    `}
  &:hover {
    &::after {
      content: '';
      width: 4rem;
      height: 4rem;
      transform: ${({ iconType }) =>
        `translate(${iconType === 'close' ? '-1rem, -1rem' : '-2rem, -2rem'})`};
      position: absolute;
      display: inline-block;
      border-radius: 50%;
      z-index: -1;
      background: rgba(0, 0, 0, 0.4);
      box-shadow: 0;
    }
    cursor: pointer;
  }
  &:focus {
    &::after {
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 0 0.05rem rgba(255, 255, 255, 0.3);
    }
    outline: unset;
  }
`;

type LightboxReducerType = 'next' | 'previous' | 'close';

export interface LightboxProps {
  classes?: string;
  content: ProjectDataType;
  portalId?: string;
  activeIndex?: number;
  handleHide: () => void;
  setActive?: any;
  imageCount: number;
}

const Lightbox = ({
  activeIndex = -1,
  classes,
  setActive,
  handleHide,
  imageCount,
  content,
  portalId = 'lightbox-portal',
}: LightboxProps): React.ReactElement => {
  const { Portal, show, hide } = usePortal({
    defaultShow: false,
    containerId: portalId,
    internalShowHide: true,
  });

  const reducer = ({ actionType }: { actionType: LightboxReducerType }) => {
    switch (actionType) {
      case 'close':
        handleHide();
        break;
      case 'next':
        activeIndex === content.images.length - 1
          ? setActive(0)
          : setActive(activeIndex + 1);
        break;

      case 'previous':
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
    isShown ? show() : () => hide();
    return hide;
  }, [isShown, activeIndex]);

  return (
    <Portal>
      <StyledLightbox className={classes}>
        <Container classes='lightbox-buttons fl-col'>
          <StyledButton
            aria-label='Close'
            className='close'
            onClick={() => reducer({ actionType: 'close' })}
            iconType='close'
            icon={closeIcon}
          />
          <Container>
            {imageCount > 1 && (
              <StyledButton
                aria-label='Previous'
                onClick={() => reducer({ actionType: 'previous' })}
                iconType='previous'
                icon={leftArrowIcon}
              />
            )}
            <ImageCard
              imageSource={
                content.images[activeIndex]?.source[0]?.['XL' || 'L' || 'M']
              }
            />
            {imageCount > 1 && (
              <StyledButton
                aria-label='Next'
                onClick={() => reducer({ actionType: 'next' })}
                iconType='next'
                icon={rightArrowIcon}
              />
            )}
          </Container>
          <Text>{`${activeIndex + 1}/${content.images.length}`}</Text>
        </Container>
      </StyledLightbox>
    </Portal>
  );
};

export default Lightbox;
