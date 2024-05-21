import styled from 'styled-components/macro';

interface IContainer {
  sku: number | string;
}
export const Container = styled.div<IContainer>`
  position: relative;
  text-align: left;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
`;

export const Variety = styled.p`
  padding: 10px;
`;

export const Price = styled.div`
  .val {
    b {
      margin-left: 5px;
    }
  }
`;

export const Val = styled.p`
  padding-left: 5px;
  padding-bottom: 20px;
  b:first-child {
    text-transform: lowercase;
  }
  b {
    margin-left: 5px;
  }
`;
export const SeasonType = styled.p`
  position: absolute;
  writing-mode: vertical-lr;
  top: 50px;
  transform: rotate(180deg);
`;
