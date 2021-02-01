const minimumWaitingTime = (queries) => {
  queries.sort((a, b) => a - b);

  const times = [];
  let waitTime = 0;

  for (let i = 0; i < queries.length; i++) {
    waitTime += queries[i];
    times.push(waitTime);
  }

  return times.reduce((a, b) => a + b, 0);
};

const minimumWaitingTime = (queries) => {
  queries.sort((a, b) => a - b);

  let waitTime = 0; 

  for (let i = 0; i < queries.length; i++) {
    waitTime += queries[i] * (queries.length - (i + 1));
  }

  return waitTime;
};