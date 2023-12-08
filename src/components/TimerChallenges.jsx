import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [time, setTime] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  const activeTimer = time > 0 && time < targetTime * 1000;

  if (time <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleRestartTimer() {
    dialog.current.close();
    setTime(targetTime * 1000);
  }

  function Start() {
    timer.current = setInterval(() => {
      setTime((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remaningTime={time}
        handleRestartTimer={handleRestartTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        {/* <p>{activeTimer ? "you lost" : ""}</p> */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={activeTimer ? handleStop : Start}>
            {activeTimer ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={activeTimer ? "active" : ""}>
          {activeTimer ? "Timer is Running....." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
