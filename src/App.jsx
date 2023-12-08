import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenges.jsx";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting Tough" targetTime={10} />
        <TimerChallenge title="Pros only" targetTime={15} />
        <Analytics />
      </div>
    </>
  );
}

export default App;
