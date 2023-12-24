import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmAccept = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmAccept({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmAccept>
      <Heading as="h3">Accept {resourceName}</Heading>
      <p>
        Are you sure you want to Accept this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="success" onClick={onConfirm} disabled={disabled}>
          Accept
        </Button>
      </div>
    </StyledConfirmAccept>
  );
}

export default ConfirmAccept;
