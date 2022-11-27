import { useCallback, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ActionGroup = ({ title, children }) => {
  return (
    <Wrapper>
      {title ? <h1>{title}</h1> : null}
      <Buttons>{children}</Buttons>
    </Wrapper>
  );
};

export default ActionGroup;
