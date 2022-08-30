import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import tw from "twin.macro";
import { useStateContext } from "../../context/contextProvider";

const ContextData = () => {
  const { currentColor } = useStateContext();

  return currentColor;
};

export const Sidebar_Container = styled.div`
  ${tw`h-screen ml-3 hover:overflow-auto md:overflow-hidden pb-4`}
`;

export const Sidebar_Title = styled.p`
  ${tw`text-gray-400 m-3 mt-1 uppercase`}
`;

export const Sidebar_Link = styled(Link)`
  ${tw`items-center flex ml-3 mt-4 justify-between text-xl gap-3 font-bold`}
`;

export const Sidebar_Link_Container = styled.div`
  ${tw`flex justify-between self-center`}
`;

export const Sidebar_NavLink = styled(NavLink)`
  ${tw`flex items-center pt-3 pb-3 pl-3 gap-4 rounded-lg m-3 text-gray-700 capitalize`}

  &.active {
    background-color: ${(props) => props.currentColor};
    color: white;
  }
`;
