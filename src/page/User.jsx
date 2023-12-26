import styled from "styled-components";

import UpdatePasswordForm from "../feature/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../feature/authentication/UpdateUserDataForm";
import UserHealthDataForn from "../feature/UserHealthData/UserHealthDataForm";

const StyledUser = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin: 0 auto;
`;
const UserData = styled.div`
  display: flex;
  width: 47%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 3rem;
`;
function User() {
  return (
    <StyledUser>
      <UserData>
        <UserHealthDataForn />
      </UserData>
      <UserData>
        <UpdatePasswordForm />
        <UpdateUserDataForm />
      </UserData>
    </StyledUser>
  );
}

export default User;
