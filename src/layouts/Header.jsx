import styled from "styled-components";
import Heading from "../ui/Heading";
import RandomQuoteGenerator from "../apps/randomQuoteGenerator/RandomQuoteGenerator";
import TimeClock from "../apps/timeClock/TimeClock";
import DailyWeather from "../apps/dailyWeather/DailyWeather";
import ButtonIcon from "../ui/ButtonIcon";
import LogOut from "../feature/authentication/LogOut";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../feature/authentication/useCurrentUser";
import { HiOutlineUser } from "react-icons/hi2";
import UserAvatar from "../feature/authentication/UserAvatar";

const StyledHeader = styled.div`
  grid-area: 1 / 2 / 2 / 6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
`;

const Wrapper = styled.div`
  width: 50%;
  background-color: var(--color-container);
  border-radius: 2rem;
  padding: 3rem 3rem;
  height: 100%;
  min-height: 140px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const WrapperSmall = styled.div`
  width: 15%;
  background-color: var(--color-container);
  border-radius: 2rem;
  padding: 3rem 3rem;
  height: 100%;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
function Header() {
  const { user, isAuthenticated } = useCurrentUser();
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Wrapper>
        <Heading as="h1">Welcome back {user?.user_metadata?.fullName}</Heading>
        <RandomQuoteGenerator />
      </Wrapper>
      <TimeClock />
      <DailyWeather />
      <WrapperSmall>
        {!isAuthenticated && (
          <FlexWrap>
            <ButtonIcon onClick={() => navigate("/login")}>
              <HiOutlineUser />
              <span>Log in</span>
            </ButtonIcon>
          </FlexWrap>
        )}
        {isAuthenticated && (
          <FlexWrap>
            <UserAvatar />
            <LogOut />
          </FlexWrap>
        )}
      </WrapperSmall>
    </StyledHeader>
  );
}

export default Header;
