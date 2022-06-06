import React, { useTransition } from 'react';

import styled from 'styled-components';

interface GridProps extends React.HTMLProps<HTMLDivElement> {
  containerClasses?: string;
  columns?: Record<'desktop' | 'mobile', number>;
  flex?: boolean;
  gap?: boolean;
}

const StyledGrid = styled.div<Pick<GridProps, 'columns' | 'flex' | 'gap'>>`
  ${({ theme, flex, columns, gap }) =>
    flex
      ? `
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      `
      : `
        display: grid;
        grid-template-columns: repeat(
          ${columns && columns.mobile},
          1fr
        );
        grid-template-rows: repeat(auto-fit, 1%);

        @media screen and ${theme.utils.mq.min.laptop} {
          grid-template-columns: repeat(
            ${columns && columns.desktop},
            1fr
          );
        }
      `}
  ${({ gap, theme }) =>
    gap &&
    `
        margin: 0 0 0 -${theme.main.gap.mobile};

        > * {
          padding-left: ${theme.main.gap.mobile};
          margin-bottom: ${theme.main.gap.mobile};
        }
        @media screen and ${theme.utils.mq.min.laptop} {
         margin: 0 0 0 -${theme.main.gap.desktop};
          > * {
            padding-left: ${theme.main.gap.desktop};
            margin-bottom: ${theme.main.gap.desktop};
          }
        }
        `}
`;

const Grid: React.FunctionComponent<GridProps> = ({
  children,
  flex = false,
  columns,
  gap = false,
}): React.ReactElement => {
  const childrenWithProps = React.useMemo(
    () =>
      flex &&
      React.Children.map(
        children,
        (child) =>
          React.isValidElement(child) &&
          React.cloneElement(child as React.ReactElement, {
            className: 'grid__cell',
          }),
      ),
    [React.Children],
  );
  return (
    <StyledGrid columns={columns} flex={flex} gap={gap}>
      {children}
    </StyledGrid>
  );
};
export default Grid;
