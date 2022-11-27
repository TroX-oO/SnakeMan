import ActionButton from "./components/ActionButon";
import ActionGroup from "./components/ActionGroup";
import "./styles.css";

const prefix = `https://192.168.1.38`;

export default function App() {
  return (
    <>
      <ActionGroup title="Sound">
        <ActionButton
          label="Play sound"
          url={`${prefix}/sound/play`}
          params={[
            {
              label: "ID",
              type: "number",
              defaultValue: 1,
              tooltip: "1/2/3/4",
            },
          ]}
          shortcuts={[{ label: "1", values: [1] }]}
        />
        <ActionButton
          label="Volume"
          url={`${prefix}/sound/volume`}
          params={[
            {
              label: "Value",
              type: "number",
              defaultValue: 15,
              tooltip: "from 0 to 30",
            },
          ]}
          shortcuts={[
            { label: "0", values: [0] },
            { label: "10", values: [10] },
            { label: "20", values: [20] },
            { label: "30", values: [30] },
          ]}
        />
        <ActionButton label="Stop sound" url={`${prefix}/sound/stop`} />
      </ActionGroup>
      <ActionGroup title="Animations">
        <ActionButton label="MIP" url={`${prefix}/animation/mip`} />
        <ActionButton label="K2000" url={`${prefix}/animation/k2000`} />
        <ActionButton label="Rainbow" url={`${prefix}/animation/rainbow`} />
        <ActionButton
          label="RGB"
          url={`${prefix}/animation/rgb`}
          params={[
            { label: "R", type: "number", defaultValue: 255 },
            { label: "G", type: "number", defaultValue: 65 },
            { label: "B", type: "number", defaultValue: 0 },
          ]}
          shortcuts={[
            { label: "Orange", values: [255, 65, 0] },
            { label: "White", values: [255, 255, 255] },
          ]}
        />
      </ActionGroup>
    </>
  );
}
