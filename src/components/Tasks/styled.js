import styled from "styled-components";

export const Container = styled.div`

.checked {
  text-decoration: line-through;
  opacity: 0.5;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 90%;
}

/* & .todo-row:nth-child(4n + 1) {
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
}

&.todo-row:nth-child(4n + 2) {
  background: linear-gradient(
    90deg,
    rgba(255, 12, 241, 1) 0%,
    rgba(250, 0, 135, 1) 100%
  )!important;
}

&.todo-row:nth-child(4n + 3) {
  background: linear-gradient(
    90deg,
    rgba(20, 159, 255, 1) 0%,
    rgba(17, 122, 255, 1) 100%
  ); */
/* } */

button{ 
  font-size: 24px;
  cursor: pointer;
  background: transparent;
  border: none
}
:hover button {
       
    }

`