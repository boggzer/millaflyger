import React, { useEffect, useMemo, lazy } from 'react';
const ImageCard = lazy(() => import('../presentational/ImageCard'));
import Container from '../presentational/Container';
import Text from '../presentational/Text';
import styled from 'styled-components';
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
  background: rgba(10, 10, 0, 0.7);
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
    & > .close {
      align-self: flex-end;
      margin: unset;
    }
  }
`;

const StyledButton = styled.button<{
  readonly icon: string;
  readonly iconType: LightboxReducerType;
}>`
  height: ${({ iconType }) => (iconType === 'close' ? 2 : 3)}rem;
  width: ${({ iconType }) => (iconType === 'close' ? 2 : 3)}rem;
  background: #fff;
  background-size: ${({ iconType }) =>
    iconType === 'close' ? 'contain' : '2rem 3rem'};
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url('${props.icon}')`};
  box-sizing: content-box;
  color: rgb(240, 240, 220);
  border: unset;
  border-radius: ;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: 2px solid rgb(200, 200, 200);
    border-radius: 1rem;
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
}

const Lightbox = ({
  activeIndex = -1,
  classes,
  setActive,
  handleHide,
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
            className='close'
            onClick={() => reducer({ actionType: 'close' })}
            iconType='close'
            icon={closeIcon}
          />
          <Container>
            <StyledButton
              aria-label='Previous'
              onClick={() => reducer({ actionType: 'previous' })}
              iconType='previous'
              icon={leftArrowIcon}
            />
            <ImageCard
              imageSource={
                content.images[activeIndex]?.source[0]?.['XL' || 'L' || 'M']
              }
            />
            <StyledButton
              aria-label='Next'
              onClick={() => reducer({ actionType: 'next' })}
              iconType='next'
              icon={rightArrowIcon}
            />
          </Container>
          <Text>{`${activeIndex + 1}/${content.images.length}`}</Text>
        </Container>
      </StyledLightbox>
    </Portal>
  );
};

export default Lightbox;
