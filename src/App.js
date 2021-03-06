import React from "react";
import Weather from "./components/Weather.jsx";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, rgba(69, 4, 33),rgba(237, 183, 152), rgba(59, 219, 206,0.2), rgba(42, 74, 87))",
        color: "white",
      }}
    >
      <div
        style={{
          textAlign: "center",
          letterSpacing: 55,
          fontSize: "calc(19px + (33 - 19) * ((100vw - 768px) / (1600 - 768)))",
          fontFamily: "Quicksand",
          color: "black",
          fontWeight: "bold",
        }}
      >
        <br />
        <ParticlesBg
          type="circles"
          bg={true}
          style={{
            position: "absolute",
            zIndex: -1,
            top: 0,
            float: "center",
            size: {
              value: 1,
            },
          }}
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyLjA0OCA1MTIuMDQ4IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMi4wNDggNTEyLjA0OCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBkPSJtNTQuOTMyIDI5My41MDZjLTc3LjkwOS0zOC44NTUtNjcuOTY4LTEzOC42MDYgNS45NzMtMTYzLjYzIDMuNjQtMS4yMzIgNi4yMTctNC41MzMgNi40MDktOC4zNzEgNi42MjMtMTMyLjQ1MiAxNzkuMDktMTY1Ljc1MyAyMzcuMzYzLTUxLjM5MiA1MC4zNDEtNDAuODQ2IDEyMS44NjItNS4yMSAxMjMuMTAyIDU2LjYxOCA4Ny45MSAxOC4yMjYgOTUuNDY5IDEyNS4wOTMgMjMuMjM0IDE2NC40MTgiIGZpbGw9IiMwODQ3NWUiLz48cGF0aCBkPSJtNDM0LjE5MSAxMjguMTUyYy0zLjcwNy0uOTExLTYuNC00LjAzNS02Ljc4LTcuODM0LTMuNzktMzcuOTA5LTM1Ljc2Ny02Ny41MTItNzQuNjc1LTY3LjUxMi0xNC44NjYgMC0yOC43MTkgNC4zMjYtNDAuMzc4IDExLjc4Mi00LjE3NyAyLjY3Mi05Ljc2MiAxLjM5NS0xMi4yOS0yLjg3MS0xMC44MDQtMTguMjMxLTI2LjA3Ni0zMy42NTMtNDQuMy00NC4zOHYyNjYuMjA0YzAgNC44OTEgMy45OCA4Ljg0NyA4Ljg3MSA4LjgxOGwxODQuMTAxLTEuMDk2YzEuNDkyLS4wMDkgMi45NjctLjM3OSA0LjI1OS0xLjEyNSAyNi4yMzgtMTUuMTQgNDcuNDI4LTQ1LjE2NSA0Ny40MjgtNzcuNDIxIDAtNDAuOTA5LTI4LjIxLTc1LjIyMy02Ni4yMzYtODQuNTY1eiIgZmlsbD0iIzA1MzAzZCIvPjxwYXRoIGQ9Im00NDMuOTQzIDI4OS4yMDdjLjAxNi0uODM4LjAzMi0xLjY3Ni4wMzItMi41MTggMC03MC44NjItNTcuNDQ1LTEyOC4zMDgtMTI4LjMwOC0xMjguMzA4LTQ3Ljk1IDAtODkuNzUgMjYuMzA3LTExMS43NzEgNjUuMjcyLTEuNzc1IDMuMTQxLTUuODY5IDQuMTEyLTguODM2IDIuMDU5LTEyLjQxMi04LjU5My0yNy40NzItMTMuNjMyLTQzLjcxMS0xMy42MzItNDAuNTYyIDAtNzMuNzcyIDMxLjQwNy03Ni42NzkgNzEuMjI3LS4xOTUgMi42NjgtMi4xMzYgNC45MTItNC43NDggNS40OS0zOS45NzIgOC44MzUtNjkuODc0IDQ0LjQ3NC02OS44NzQgODcuMTAzIDAgNDkuMjcgMzkuOTQyIDg5LjIxMiA4OS4yMTIgODkuMjEyaDMzMy41NzZjNDkuMjcgMCA4OS4yMTItMzkuOTQyIDg5LjIxMi04OS4yMTIgMC00MS45OTgtMjkuMDIzLTc3LjIxMS02OC4xMDUtODYuNjkzeiIgZmlsbD0iIzBhNjE3ZCIvPjxjaXJjbGUgY3g9IjE1My43NyIgY3k9IjEwMy44MjMiIGZpbGw9IiMwYTYxN2QiIHI9IjE1Ii8+PGNpcmNsZSBjeD0iMTYwLjU3MSIgY3k9IjM4NS43ODkiIGZpbGw9IiMwODQ3NWUiIHI9IjE1Ii8+PGNpcmNsZSBjeD0iMTUiIGN5PSI0OTYuNDg5IiBmaWxsPSIjMDg0NzVlIiByPSIxNSIvPjxjaXJjbGUgY3g9IjQ3NC41OTkiIGN5PSIyOS40ODkiIGZpbGw9IiMwNTMwM2QiIHI9IjE1Ii8+PHBhdGggZD0ibTQ0My43NjMgMjc5Ljg3NGMtNS4wMzgtOTUuMTM5LTEwNy4yMDQtMTQ5LjQ0NS0xODcuOTk0LTEwNi42NjJ2MjkxLjljLjAzNS0uMDIxIDkwLjA5LjAxNSAxMzguMDMgMCAyNS40MjYtLjE2IDIxLjIwNi4zNjIgMzYuMjM3LS4yODYgMTAwLjk5Ny0xMS4yNTcgMTA4LjM4MS0xNDIuNDY5IDIyLjU4NS0xNzIuOTY5LTUuMTIxLTEuODE5LTguNTcxLTYuNTU3LTguODU4LTExLjk4M3oiIGZpbGw9IiMwODQ3NWUiLz48Y2lyY2xlIGN4PSIzMjkuNjgzIiBjeT0iMjg5Ljk1NSIgZmlsbD0iIzA1MzAzZCIgcj0iMTUiLz48L2c+PC9zdmc+"
          width="66px"
          height="56px"
          alt=""
          style={{ marginRight: 10 }}
        />
        WARMTH
      </div>
      <br />
      <Weather />
    </div>
  );
}

export default App;
