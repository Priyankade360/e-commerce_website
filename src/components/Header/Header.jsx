import React from "react";
import styled from "styled-components";
import demoImage from "../../assets/demoImage.png";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <LogoWrapper>
          <img src={demoImage} alt="logo image" />
        </LogoWrapper>
          </NavLink>
          <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoWrapper = styled.section`
  width: 7rem;
  height: 7rem;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export default Header;
