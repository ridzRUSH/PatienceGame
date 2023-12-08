import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remaningTime, handleRestartTimer },
  ref
) {
  const isWon = remaningTime <= 0;
  const timeLeft = parseFloat(remaningTime / 1000).toFixed(2);
  const dialog = useRef();

  const score = Math.round((1 - remaningTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {!isWon && <h2>your score : {score} 🤩</h2>}
      {isWon && <h2>You Lost 😵</h2>}
      <p>
        the target time was <strong>{targetTime}</strong> seconds
      </p>
      <p>
        you stoped the timer with <strong> {timeLeft} sec left</strong>
      </p>

      <form
        action="dialog"
        onSubmit={(e) => {
          e.preventDefault();
          handleRestartTimer();
        }}
      >
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModal;

// she said my sky is vacant
// i thought she is taking about stars
// in the day time
// by being in someones night
// cherissing the weather
// towards blinded horizons of sky
