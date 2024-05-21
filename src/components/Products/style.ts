import styled from 'styled-components/macro';

export const Container = styled.div`
  background-color: #fff8e7;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints.desktop}) {
    grid-template-columns: repeat(5, 250px);
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 130px;
  margin-left: 20%;
`;

export const CategoryHeading = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
`;
