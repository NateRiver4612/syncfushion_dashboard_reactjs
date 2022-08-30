import styled from "styled-components";
import tw from "twin.macro";

export const Navbar_Container = styled.div`
  ${tw`flex justify-between p-2 md:ml-6 md:mr-6 relative `}
`;

export const Navbar_Body = styled.div`
  ${tw`flex`}
`;

export const Profile_Container = styled.div`
  ${tw`flex items-center gap-2 pl-2 pr-1 cursor-pointer rounded-lg hover:bg-light-gray`}
`;
