import React, { useCallback, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 10px;
`;

const RectangleButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1px solid black;
  width: 200px;
  min-height: 65px;
  cursor: pointer;
  text-align: left;
  margin-bottom: 10px;
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;

  :hover {
    background-color: #f1e3ce;
  }
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

const ShortcutsBlock = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  bottom: 5px;
`;

const Shortcut = styled.div`
  display: inline;
  border: 1px solid black;
  min-width: 20px;
  height: 10px;
  line-height: 10px;
  cursor: pointer;
  text-align: center;
  padding: 5px;
  margin: 5px 2px;
  font-weight: bold;
  text-transform: uppercase;

  :hover {
    background-color: #ffce85;
  }
`;

const ActionButton = ({ className, label, url, params, shortcuts }) => {
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
    } catch (e) {}
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

  const onShortCutClick = useCallback((values) => (e) => {e.preventDefault(); e.stopPropagation(); setValues(values)});

  return (
    <Wrapper >
      <RectangleButton className={className} disabled={disabled} onClick={onButtonClick}>
        {label}
        {shortcuts ? (
          <ShortcutsBlock>
            {shortcuts.map((s, idx) => (
              <Shortcut key={`sc-${idx}`} onClick={onShortCutClick(s.values)}>
                {s.label}
              </Shortcut>
            ))}
          </ShortcutsBlock>
        ) : null}
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
