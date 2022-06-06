import { Container } from '../';
import PageLink from './PageLink';
import React from 'react';
import Text from './Text';
import border from '../../assets/graphics/doodle_border.svg';
import closeIcon from '../../assets/graphics/close-button.svg';
import menuIcon from '../../assets/graphics/menu-button-2.svg';
import styled from 'styled-components';

const StyledNavigation = styled.nav<{ show: boolean }>`
  z-index: 1;
  position: fixed;
  background: ${({ theme }) => theme.main.background};
  display: grid;
  grid-template-columns: 45px 1fr 45px;
  align-items: center;
  padding: ${({ theme }) => `calc(${theme.main.pageMargin.mobile} / 2) ${theme.main.pageMargin.mobile}`};
  height: 45px;

  ${({ theme }) => `
    @media ${theme.utils.mq.min.laptop} {
      margin: 0 ${theme.main.pageMargin.desktop};
    }
  `}

  @media screen and ${({ theme }) => theme.utils.mq.max.tablet} {
    position: sticky;
    top: -0.1px;
  }

  @media screen and ${({ theme }) => theme.utils.mq.max.laptop} {
    .overlay {
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      transition: opacity 150ms cubic-bezier(0.44, 0.96, 0.72, 0.91) 0ms, visibility 0ms linear ${({ show }) => (show ? 0 : 150)}ms;
      background: #000;
      position: fixed;
      ${({ show }) =>
        `opacity: ${show ? 0.66 : 0};
        visibility: ${show ? 'visible' : 'hidden'};`}
    }
  }
`;

const StyledLogo = styled(PageLink)`
  font-size: ${({ theme }) => theme.main.text.sizes.mobile.h4}px;
  font-family: ${({ theme }) => theme.main.text.family.heading};
  text-align: center;
  text-transform: lowercase;
  line-height: 45px;
  height: 100%;
`;

const StyledMenuButton = styled.button.attrs((props) => ({
  'aria-label': props['aria-label'],
  'aria-controls': props['aria-controls'],
}))<{ right?: number }>`
  height: 45px;
  width: 45px;
  z-index: 2;
  ${({ right }) => typeof right === 'number' && `right: ${right}${right === 0 ? '' : 'px'};`}

  @media screen and ${({ theme }) => theme.utils.mq.min.laptop} {
    display: none;
  }
`;

const StyledMenu = styled.ul`
  padding: 0;
  margin: 0;

  li {
    height: 45px;
    font-size: ${({ theme }) => theme.main.text.sizes.desktop.h3}px;
  }

  @media screen and ${({ theme }) => theme.utils.mq.max.laptop} {
    font-family: var(--heading-font-family);
    text-transform: lowercase;
    list-style-type: none;

    li {
      height: 45px;
      font-size: ${({ theme }) => theme.main.text.sizes.mobile.h3}px;
    }
  }
`;

const StyledMobileMenu = styled.div<{ show: boolean }>`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--main-background);
  padding: 2rem 2.5rem 2.5rem;
  transform: translateY(${({ show }) => (show ? 0 : '-15px')});
  transition: transform 150ms ease 0ms, opacity 150ms cubic-bezier(0.44, 0.96, 0.72, 0.91) 0ms, visibility 0ms linear ${({ show }) => (show ? 0 : 150)}ms;
  ${({ show }) =>
    `opacity: ${show ? 1 : 0};
        visibility: ${show ? 'visible' : 'hidden'};`}

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translate(-1rem, 1.5rem);
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${border});
  }
`;

const StyledMenuIcon = styled.img`
  height: 100%;
  width: 100%;
  padding: 11px;
  opacity: 0.8;
  @media screen and ${({ theme }) => theme.utils.mq.min.tablet} {
    display: none;
  }
`;

const Navigation = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  React.useEffect(() => {
    return setShowMenu(false);
  }, []);

  const links = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/all' },
    // ...getProjectLinks,
  ];

  const handleClick = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <StyledNavigation show={showMenu}>
      {!showMenu && (
        <StyledMenuButton aria-label='Open menu' aria-controls='main-navigation' onClick={handleClick}>
          <StyledMenuIcon src={menuIcon} />
        </StyledMenuButton>
      )}
      <div className='overlay' role='presentation' onClick={handleClick}>
        &nbsp;
      </div>
      <StyledLogo to={'/'}>Milla Flyger</StyledLogo>
      {showMenu && (
        <StyledMobileMenu show={showMenu}>
          <StyledMenu id='main-navigation'>
            {links.map((link) => (
              <li key={link.title}>
                <Text textType='a' href={link.href}>
                  {link.title}
                </Text>
              </li>
            ))}
          </StyledMenu>
          <StyledMenuButton aria-label='Close menu' aria-controls='main-navigation' onClick={handleClick} right={-5}>
            <StyledMenuIcon src={closeIcon} />
          </StyledMenuButton>
        </StyledMobileMenu>
      )}
    </StyledNavigation>
  );
};

export default Navigation;
