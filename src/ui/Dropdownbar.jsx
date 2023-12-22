import styled, { css } from "styled-components";

const size = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    width: 50%;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    width: 75%;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
    width: 100%;
  `,
};

const variation = {
  primary: css`
    color: var(--color-blue-100);
    background-color: var(--color-blue-600);

    &:hover {
      background-color: var(--color-blue-700);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  success: css`
    color: var(--color-green-100);
    background-color: var(--color-green-600);

    &:hover {
      background-color: var(--color-green-700);
    }
  `,
};

const Dropdownbar = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => size[props.size]}
  ${(props) => variation[props.variation]}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Dropdownbar.defaultProps = {
  size: "medium",
  variation: "primary",
};

export default Dropdownbar;
