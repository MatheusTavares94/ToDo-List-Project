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

.content{
  width: 80%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;  
}

button{ 
  font-size: 24px;
  cursor: pointer;
  background: transparent;
  border: none
}
`