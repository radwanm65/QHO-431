self.onmessage = function () {
  let total = 0;

  for (let i = 0; i < 1000000000; i++) {
    total += i;
  }

  postMessage("Finished Calculation");
};
