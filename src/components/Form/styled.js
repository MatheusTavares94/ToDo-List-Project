import styled from "styled-components";

export const Container = styled.form`
margin-bottom: 32px;

input {
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #00918b;
  outline: none;
  width: 20rem;
  background: transparent;
  color: #fff;
}

::placeholder {
  color: #e2e2e2;
}

button {
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: linear-gradient(90deg, rgba(0,145,139,1) 0%, rgba(2,119,84,1) 100%);
  color: #fff;
  text-transform: capitalize;
}

.input.edit {
  border: 2px solid #149fff;
}

.button.edit {
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  );
  padding: 16px 22px;
}

`