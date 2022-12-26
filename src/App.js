import ActionButton from "./components/ActionButon";
import ActionGroup from "./components/ActionGroup";
import "./styles.css";

const ip = `192.168.1.38`;
// const ip = `192.168.1.185`;

export default function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const prefix = `http://${urlParams.get("h") ?? ip}`;
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
          shortcuts={[
            { label: "1", values: [1] },
            { label: "2", values: [2] },
            { label: "3", values: [3] },
            { label: "4", values: [4] },
            { label: "5", values: [5] },
          ]}
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
        <ActionButton label="Snake" url={`${prefix}/animation/snake`} />
        <ActionButton label="MIP" url={`${prefix}/animation/mip`} />
        <ActionButton label="K2000" url={`${prefix}/animation/k2000`} />
        <ActionButton label="STAR WARS" url={`${prefix}/animation/starwars`} />
        <ActionButton label="THX" url={`${prefix}/animation/thx`} />
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
        <ActionButton
          label="Blink"
          url={`${prefix}/animation/blink`}
          params={[
            { label: "Times", type: "number", defaultValue: 2 },
            { label: "R", type: "number", defaultValue: 255 },
            { label: "G", type: "number", defaultValue: 255 },
            { label: "B", type: "number", defaultValue: 255 },
          ]}
          shortcuts={[
            { label: "Orange", values: [2, 255, 65, 0] },
            { label: "White", values: [2, 255, 255, 255] },
            { label: "Red", values: [2, 191, 6, 0] },
          ]}
        />
        <ActionButton label="Simon" url={`${prefix}/animation/simon`} />
        <ActionButton label="None" url={`${prefix}/animation/none`} />
      </ActionGroup>
      <ActionGroup title="Execute">
        <ActionButton
          label="Color"
          url={`${prefix}/animation/execute/color`}
          params={[
            { label: "R", type: "number", defaultValue: 255 },
            { label: "G", type: "number", defaultValue: 65 },
            { label: "B", type: "number", defaultValue: 0 },
          ]}
          shortcuts={[
            { label: "Orange", values: [255, 65, 0] },
            { label: "White", values: [255, 255, 255] },
            { label: "Red", values: [191, 6, 0] },
          ]}
        />
        <ActionButton
          label="Speed"
          url={`${prefix}/animation/execute/speed`}
          params={[{ label: "Value", type: "number", defaultValue: 20 }]}
          shortcuts={[
            { label: "5", values: [5] },
            { label: "10", values: [10] },
            { label: "20", values: [20] },
          ]}
        />
        <ActionButton
          label="Trail"
          url={`${prefix}/animation/execute/trail`}
          params={[{ label: "Value", type: "number", defaultValue: 20 }]}
          shortcuts={[
            { label: "5", values: [5] },
            { label: "10", values: [10] },
            { label: "20", values: [20] },
          ]}
        />
      </ActionGroup>
      <ActionGroup title="Snake">
        <ActionButton
          label="Add snake"
          url={`${prefix}/animation/execute/add-snake`}
          params={[
            { label: "R", type: "number", defaultValue: 255 },
            { label: "G", type: "number", defaultValue: 65 },
            { label: "B", type: "number", defaultValue: 0 },
          ]}
          shortcuts={[
            { label: "Orange", values: [255, 65, 0] },
            { label: "White", values: [255, 255, 255] },
            { label: "Red", values: [191, 6, 0] },
            { label: "Green", values: [0, 170, 0] },
            { label: "Blue", values: [0, 0, 220] },
          ]}
        />

        <ActionButton
          label="Remove snake"
          url={`${prefix}/animation/execute/remove-snake`}
        />
      </ActionGroup>
      <ActionGroup title="Star wars">
        <ActionButton
          label="Star speed"
          url={`${prefix}/animation/execute/star-speed`}
          params={[{ label: "Speed", type: "number", defaultValue: 50 }]}
        />

        <ActionButton
          label="Star trail"
          url={`${prefix}/animation/execute/star-trail`}
          params={[{ label: "Trail", type: "number", defaultValue: 50 }]}
        />
      </ActionGroup>
      <ActionGroup title="Simon">
        <ActionButton
          className="blue"
          label="Blue"
          url={`${prefix}/animation/execute/simon-input/blue`}
        />
        <ActionButton
          className="red"
          label="red"
          url={`${prefix}/animation/execute/simon-input/red`}
        />
        <ActionButton
          className="green"
          label="green"
          url={`${prefix}/animation/execute/simon-input/green`}
        />
        <ActionButton
          className="yellow"
          label="Yellow"
          url={`${prefix}/animation/execute/simon-input/yellow`}
        />
      </ActionGroup>
    </>
  );
}
