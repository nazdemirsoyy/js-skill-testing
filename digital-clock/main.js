class DigitalClock {
  constructor(element) {
    this.element = element;
  }
  start() {
    setInterval(() => {
      this.update();
      this.update();
    }, 500);
  }

  update() {
    const parts = this.getTimeParts();
    const minutFormtted = parts.minutes.toString().padStart(2, "0");
    const timeFormatted = `${parts.hour}:${minutFormtted}`;
    const amPm = parts.isAm ? "AM" : "PM";
    this.element.querySelector(".clock-time").textContent = timeFormatted;
    this.element.querySelector(".clock-ampm").textContent = amPm;
  }

  getTimeParts() {
    const now = new Date();
    return {
      hour: now.getHours() % 12 || 12,
      minutes: now.getMinutes(),
      isAm: now.getHours() < 12,
    };
  }
}

const clockElement = document.querySelector(".clock");
const ClockObject = new DigitalClock(clockElement);

ClockObject.start();
