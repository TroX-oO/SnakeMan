import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 10px;
`;

const RectangleButton = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 65px;
  cursor: pointer;
  text-align: left;
  margin-bottom: 10px;
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
`;

const InputParam = styled.label`
  display: flex;
  margin: 5px 0;
`;
const ToolTip = styled.div`
  display: block;
  margin: 5px 0;
  text-align: right;
  font-style: italic;
`;

const Shortcut = styled.div`
  display: inline-block;
  margin: 5px 0;
`;

const ActionButton = ({ label, url, params, shortcuts }) => {
  const [disabled, setDisabled] = useState(false);
  const [values, setValues] = useState(
    params?.map((p) => p.defaultValue) || null
  );

  const onButtonClick = useCallback(async () => {
    setDisabled(true);
    try {
      let finalUrl = url;

      if (values !== null) {
        console.log(values);
        finalUrl += `/${values.join("/")}`;
      }
      console.log(`Calling: ${finalUrl}`);
      await fetch(finalUrl);
    } catch (e) {
      console.log(e);
    }
    setDisabled(false);
  }, [url, values]);

  const onValueChange = useCallback(
    (index) => (event) => {
      const newValue = event.target.value;
      const newValues = [...values];
      newValues[index] = newValue;
      setValues(newValues);
    },
    [setValues, values]
  );

  return (
    <Wrapper>
      <RectangleButton disabled={disabled} onClick={onButtonClick}>
        {label}
        {shortcuts ? shortcuts.map() : null}
      </RectangleButton>
      {params?.map((p, idx) => (
        <React.Fragment key={`param-${idx}`}>
          <InputParam>
            {p.label}:&nbsp;
            <input
              style={{ flex: 1 }}
              type={p.type || "text"}
              name={p.label}
              value={values?.[idx]}
              onChange={onValueChange(idx)}
            />
          </InputParam>
          {p.tooltip ? <ToolTip>{p.tooltip}</ToolTip> : null}
        </React.Fragment>
      ))}
    </Wrapper>
  );
};

export default ActionButton;
