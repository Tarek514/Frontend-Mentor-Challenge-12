const timeData = {
  Work: { daily: "5hrs", weekly: "32hrs", monthly: "128hrs" },
  Play: { daily: "1hr", weekly: "10hrs", monthly: "40hrs" },
  Study: { daily: "2hrs", weekly: "4hrs", monthly: "56hrs" },
  Exercise: { daily: "1hr", weekly: "4hrs", monthly: "16hrs" },
  Social: { daily: "1hr", weekly: "5hrs", monthly: "20hrs" },
  SelfCare: { daily: "0.5hr", weekly: "2hrs", monthly: "12hrs" },
};

function updateTimeframe(timeframe) {
  Object.keys(timeData).forEach((activity) => {
    document.getElementById(`${activity}hours`).textContent =
      timeData[activity][timeframe];
    document.getElementById(
      `${activity}previous`
    ).textContent = `Last ${timeframe} - ${timeData[activity][timeframe]}`;
  });
}

function daily() {
  updateTimeframe("daily");
  return false;
}

function weekly() {
  updateTimeframe("weekly");
  return false;
}

function monthly() {
  updateTimeframe("monthly");
  return false;
}
