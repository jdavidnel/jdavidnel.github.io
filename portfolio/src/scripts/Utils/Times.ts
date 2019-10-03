

function launchAndClearInterval(lambda: Promise<void>, timeloop: number): void {
  let clearing: any = null;

  clearing = setInterval(async () => {
    await lambda;
    clearInterval(clearing);
  }, timeloop);
}

export {
  launchAndClearInterval,
};
