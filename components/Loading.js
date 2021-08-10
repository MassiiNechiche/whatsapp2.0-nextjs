import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <center style={{ display: "grid", placeItems: "center" }}>
      <div
        style={{
          display: "flex",
          height: "100vH",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Circle color="#3CBC28" size={60} />
      </div>
    </center>
  );
};

export default Loading;
