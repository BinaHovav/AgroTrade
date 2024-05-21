import styled from 'styled-components/macro';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 20px;
`;

export const Logo = styled.div`
  position: absolute;
  left: 50px;

  img {
    height: 100px;
  }
`;

export const SearchBar = styled.div`
  margin-left: 300px;
  input {
    padding-left: 35px;
    color: #333333;
    box-shadow: 2px 3px 28px 1px rgba(0, 0, 0, 0.1);
    border: 0px solid transparent;
    height: 60px;
    font-size: 32px;
    border-radius: 100px;
    width: 100%;
    &::placeholder {
      color: #b3b3b3;
    }
  }
`;

export const Navbar = styled.nav`
  position: absolute;
  right: 50px;
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
    color: #333333;
    text-decoration: none;
    font-size: 18px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
