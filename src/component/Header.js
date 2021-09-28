import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a href>
          <img src='/images/home-icon.svg' alt='' />
          <span>Home</span>
        </a>
        <a href>
          <img src='/images/search-icon.svg' alt='' />
          <span>Search</span>
        </a>
        <a href>
          <img src='/images/watchlist-icon.svg' alt='' />
          <span>WatchList</span>
        </a>
        <a href>
          <img src='/images/original-icon.svg' alt='' />
          <span>Original</span>
        </a>
        <a href>
          <img src='/images/movie-icon.svg' alt='' />
          <span>Movies</span>
        </a>
        <a href>
          <img src='/images/series-icon.svg' alt='' />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src='https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/242275955_1143742756156526_3358791990985163394_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=XvXNH_T3lGYAX-1PSO6&tn=tDrmP6i2dLiU__cL&_nc_ht=scontent.fhan2-4.fna&oh=1456ea494257e96759afc718fa7d857c&oe=61757590' />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #040714;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      letter-spacing: 1.42px;
      font-size: 13px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        transform-origin: left center;
        bottom: -6px;
        transform: scaleX(0);
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-radius: 50%;
`;
