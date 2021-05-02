<script lang="ts">
  export let timeLimit = 30;
  export let start = false;

  // [todo] try to not use this var
  let timesUp = true;

  $: {
    console.log(start, timeLimit, "timer");
    if (start) {
      start = false;
      startTimer();
    }
  }
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD,
    },
  };

  let timePassed = 0;
  $: timeLeft = timeLimit;
  let timerInterval: any = null;
  let remainingPathColor = COLOR_CODES.info.color;

  let circleDasharray = "283";

  //     document.getElementById("app").innerHTML = `
  // <div class="base-timer">
  //   <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  //     <g class="base-timer__circle">
  //       <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
  //       <path
  //         id="base-timer-path-remaining"
  //         stroke-dasharray="283"
  //         class="base-timer__path-remaining ${remainingPathColor}"
  //         d="
  //           M 50, 50
  //           m -45, 0
  //           a 45,45 0 1,0 90,0
  //           a 45,45 0 1,0 -90,0
  //         "
  //       ></path>
  //     </g>
  //   </svg>
  //   <span id="base-timer-label" class="base-timer__label">${formatTime(
  //       timeLeft
  //   )}</span>
  // </div>
  // `;

  function onTimesUp() {
    clearInterval(timerInterval);
    timesUp = true;
    timePassed = 0;
    circleDasharray = "283";
  }

  function startTimer() {
    timesUp = false;
    if (timerInterval) {
      clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = timeLimit - timePassed;
      // document.getElementById("base-timer-label").innerHTML = formatTime(
      //     timeLeft
      // );
      setCircleDasharray();
      // setRemainingPathColor(timeLeft);

      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }

  function formatTime(time: number) {
    const minutes = Math.floor(time / 60);
    let seconds: any = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  }

  // function setRemainingPathColor(timeLeft) {
  //     const { alert, warning, info } = COLOR_CODES;
  //     if (timeLeft <= alert.threshold) {
  //         document
  //             .getElementById("base-timer-path-remaining")
  //             .classList.remove(warning.color);
  //         document
  //             .getElementById("base-timer-path-remaining")
  //             .classList.add(alert.color);
  //     } else if (timeLeft <= warning.threshold) {
  //         document
  //             .getElementById("base-timer-path-remaining")
  //             .classList.remove(info.color);
  //         document
  //             .getElementById("base-timer-path-remaining")
  //             .classList.add(warning.color);
  //     }
  // }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / timeLimit;
    return rawTimeFraction - (1 / timeLimit) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    circleDasharray = `${(calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(
      0
    )} 283`;

    // document
    //     .getElementById("base-timer-path-remaining")
    //     .setAttribute("stroke-dasharray", circleDasharray);
  }
</script>

<div class="base-timer" class:times-up={!!timesUp}>
  <svg
    class="base-timer__svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
      <path
        id="base-timer-path-remaining"
        stroke-dasharray={circleDasharray}
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
      />
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label"
    >{formatTime(timeLeft)}</span
  >
</div>

<style lang="scss">
  .base-timer {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }

  .base-timer__svg {
    transform: scaleX(-1);
  }

  .base-timer__circle {
    fill: none;
    stroke: none;
  }

  .base-timer__path-elapsed {
    stroke-width: 7px;
    /* stroke: grey; */

    stroke: rgba(65, 184, 131, 0.1);
  }

  .base-timer__path-remaining {
    stroke-width: 7px;
    stroke-linecap: round;
    transform: rotate(90deg);
    transform-origin: center;
    transition: 1s linear all;
    fill-rule: nonzero;
    stroke: currentColor;

    color: rgba(65, 184, 131, 0.5);
    backdrop-filter: blur(10px);
  }

  .base-timer__path-remaining.green {
    color: rgb(65, 184, 131);
  }

  .base-timer__path-remaining.orange {
    color: orange;
  }

  .base-timer__path-remaining.red {
    color: red;
  }

  .base-timer__label {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: #fff;
  }
  .times-up {
    .base-timer__label {
      opacity: 0;
    }
    .base-timer__path-remaining {
      color: rgba(65, 184, 131, 0.1);
    }
  }
</style>
