import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Sidebar_Container = styled.div`
  height: 100vh;
  margin-left: 10px;

  &.hover {
    overflow: auto;
  }

  padding-bottom: 20px;

  @media (max-width: 900px) {
    overflow: hidden;
  }
`;

export const Sidebar_Title = styled.p`
  color: grey;
  opacity: 0.8;
  margin: 12px;
  margin-top: 10px;
  text-transform: uppercase;
`;

export const Sidebar_Link = styled(Link)`
  align-items: center;
  display: flex;
  margin-left: 12px;
  margin-top: 15px;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bolder;

  span {
    padding-left: 13px;
  }
`;

export const Sidebar_Link_Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

export const Sidebar_NavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 0px 10px 15px;
  border-radius: 8px;
  size: 3px;
  margin: 12px;
  color: #424f62;

  &.active {
    background-color: grey;
    color: white;
  }
  span {
    padding-left: 15px;
    text-transform: capitalize;
  }
`;
