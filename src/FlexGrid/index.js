import styled from 'styled-components';

const GUTTER = 10;
const MAX_WIDTH = 1000;

const HALF_GUTTER = GUTTER / 2;

const getColumsInPercent = value => `${value / 12 * 100}%`;

export const Column = styled.div`
  position: relative;
  flex: ${({ flex }) => (flex ? `0 0 ${getColumsInPercent(flex)}` : 1)};
  padding: ${() => `${HALF_GUTTER}px ${HALF_GUTTER}px ${HALF_GUTTER}px`};
  align-self: ${({ flexAlign }) => (flexAlign ? flexAlign : 'auto')};
  margin-left: ${({ push }) => (push ? getColumsInPercent(push) : 0)};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${() => `0 ${-HALF_GUTTER}px 0`};
  align-items: ${({ flexAlign }) => (flexAlign ? flexAlign : 'auto')};
`;

export const Container = styled.div`
  margin: auto;
  overflow: hidden;
  max-width: ${() => `${MAX_WIDTH}px`};

  > ${Row} {
    &:first-child {
      margin: ${() => `${-HALF_GUTTER}px ${-HALF_GUTTER}px 0`};
    }
    &:last-child {
      margin: ${() => `0 ${-HALF_GUTTER}px ${-HALF_GUTTER}px`};
    }
    &:only-child {
      margin: ${() => `${-HALF_GUTTER}px`};
    }
  }
`;
