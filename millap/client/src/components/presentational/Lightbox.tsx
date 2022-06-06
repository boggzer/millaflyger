import React, { useEffect, useMemo, lazy, useState } from 'react';
const Image = lazy(() => import('./Image'));
import Container from '../presentational/Container';
import Text from '../presentational/Text';
import styled, { css } from 'styled-components';
import { useUnmount, usePrevious } from 'react-use';
import usePortal from 'react-cool-portal';
import { ProjectDataType } from '../../utils/global';
import leftArrowIcon from '../../assets/icons/arrow_left.svg';
import rightArrowIcon from '../../assets/icons/arrow_right.svg';
import closeIcon from '../../assets/icons/close.svg';
import useRefChange from '../../hooks/useRefChange';
import { useTransition, config } from 'react-spring';

const StyledLightbox = styled.div`
  // opacity: 0;
  &.out {
    opacity: 0;
  }
  &.in {
    opacity: 1;
  }
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 20;
  overflow: hidden;
  padding: 5rem;
  background: rgba(10, 10, 0, 0.85);
  box-sizing: border-box;
  .container > .container {
    height: 100%;
    min-height: 150px;
    max-width: 1200px;
    // width: auto;
    min-width: 300px;
    column-gap: 1rem;
    top: -1.2rem;
    position: relative;
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
      user-select: none;
      transition: color 200ms cubic-bezier(0.67, 0.91, 0.64, 0.68);
      height: fit-content;
      width: fit-content;
      position: relative;
      padding: 0.5rem 0.8rem;
      border-radius: 0.2rem;
      flex: 0 0 1rem;
      background: rgba(10, 10, 0, 0.8);
      color: rgba(233, 231, 230, 0.3);
      &:hover {
        color: rgba(233, 231, 230, 0.9);
      }
    }
  }
`;

const StyledButton = styled.button<{
  readonly icon: string;
  readonly iconType: LightboxReducerType;
}>`
  padding: 1rem;
  margin: 1rem;
  box-sizing: border-box;
  flex: 0 0 auto;
  height: 4rem;
  width: 4rem;
  background: rgba(255, 255, 255, 0);
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url('${props.icon}')`};
  color: rgb(240, 240, 220);
  border: unset;
  transition: background-color 300ms cubic-bezier(0.67, 0.91, 0.64, 0.68);
  border-radius: 50%;
  ${({ iconType }) =>
    iconType === 'close' &&
    css`
      align-self: flex-end;
      margin: unset;
      position: relative;
      top: -3.5rem;
      right: -3.5rem;
    `}
  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }
  &:focus {
    border: 0.05rem solid rgba(255, 255, 255, 0.3);
    outline: none;
  }
  &:focus-visible {
    border: none;
    outline: 0.25rem solid rgb(51, 147, 255);
  }
`;

type LightboxActionType = 'next' | 'previous';

type LightboxReducerType = LightboxActionType | 'close';

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

export interface LightboxProps {
  classes?: string;
  content: ProjectDataType;
  portalId?: string;
  activeIndex: number;
  handleHide: () => void;
  setActive: (_index: number) => void;
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

  const [fade, setFade] = useState<'in' | 'out'>('out');
  const [ref, setRef] = useState<HTMLElement>();
  const [direction, setDirection] = useState<LightboxActionType>('next');
  const prevIndex = usePrevious(activeIndex);
  const refChange = useRefChange(setRef);
  const isShown = useMemo(() => activeIndex >= 0, [activeIndex]);
  let closeTimer: NodeJS.Timeout;

  useUnmount(() => {
    clearTimeout(closeTimer);
  });

  useEffect(() => {
    isShown ? show() : () => hide();
    return hide;
  }, [isShown, activeIndex]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (ref) {
      timer = setTimeout(() => {
        setFade('in');
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [ref]);

  const reducer = ({ actionType }: { actionType: LightboxReducerType }) => {
    actionType !== 'close' && setDirection(actionType);
    switch (actionType) {
      case 'close':
        setFade('out');
        closeTimer = setTimeout(() => {
          handleHide();
        }, 300);
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

  const translations: Record<Readonly<LightboxActionType>, string[]> = {
    next: ['50%', '0%', '-50%'],
    previous: ['-50%', '0%', '50%'],
  };

  const transitions = useTransition(activeIndex, (p) => p, {
    from: {
      opacity: 0,
      position: 'absolute',
      transform: `translate3d(${translations[direction]?.[0] || 0},0,0)`,
    },
    enter: {
      opacity: 1,
      position: 'relative',
      transform: `translate3d(${translations[direction]?.[1] || 0},0,0)`,
    },
    leave: {
      position: 'absolute',
      opacity: 0,
      transform: `translate3d(${translations[direction]?.[2] || 0},0,0)`,
    },
    config: config.gentle,
  });
  console.log(content);
  return (
    <Portal>
      <StyledLightbox ref={refChange} className={`${classes} ${fade}`}>
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
            {transitions.map(({ item, props, key }) => (
              <Image
                //containerClasses='lightbox-image-card'
                key={key}
                // ContainerProps={{
                //   ...props,
                //   height: '100%',
                //   width: '100%',
                //   // flex: '0 0 auto',
                // }}
                //imageSource={{ source: content.images[item]?.['imageRow'][0]['file'], order: 1 }}
              />
            ))}
            {imageCount > 1 && (
              <StyledButton
                tabIndex={0}
                aria-label='Next'
                onClick={() => reducer({ actionType: 'next' })}
                iconType='next'
                icon={rightArrowIcon}
              />
            )}
          </Container>
          <Text>{`${activeIndex + 1}/${
            content.images.length
          }`}</Text>
        </Container>
      </StyledLightbox>
    </Portal>
  );
};

export default Lightbox;
