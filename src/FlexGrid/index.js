import styled from 'styled-components';

const GUTTER = 10;
const MAX_WIDTH = 800;

const HALF_GUTTER = GUTTER / 2;

const getColumsInPercent = value => `${value / 12 * 100}%`;

export const Column = styled.div`
  position: relative;
  flex: ${({ flex }) => (flex ? `0 0 ${getColumsInPercent(flex)}` : 1)};
  align-self: ${({ flexAlign }) => (flexAlign ? flexAlign : 'auto')};
  margin-left: ${({ push }) => (push ? getColumsInPercent(push) : 0)};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ flexAlign }) => (flexAlign ? flexAlign : 'auto')};
`;

export const Container = styled.div`
  margin: auto;
  overflow: hidden;
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : `${MAX_WIDTH}px`)};

  ${Row} {
    margin: ${({ gutter }) =>
      gutter ? `0 ${-gutter / 2}px 0` : `0 ${-HALF_GUTTER}px 0`};

    &:first-child {
      margin: ${({ gutter }) =>
        typeof gutter === 'number'
          ? `${-gutter / 2}px ${-gutter / 2}px 0`
          : `${-HALF_GUTTER}px ${-HALF_GUTTER}px 0`};
    }

    &:last-child {
      margin: ${({ gutter }) =>
        typeof gutter === 'number'
          ? `0 ${-gutter / 2}px ${-gutter / 2}px`
          : `0 ${-HALF_GUTTER}px ${-HALF_GUTTER}px`};
    }

    &:only-child {
      margin: ${({ gutter }) =>
        typeof gutter === 'number' ? `${-gutter / 2}px` : `${-HALF_GUTTER}px`};
    }
  }

  ${Column} {
    padding: ${({ gutter }) =>
      typeof gutter === 'number'
        ? `${gutter / 2}px ${gutter / 2}px ${gutter / 2}px`
        : `${HALF_GUTTER}px ${HALF_GUTTER}px ${HALF_GUTTER}px`};
  }
`;
