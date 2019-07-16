export const getWinner = (gameState) => {
  let sum;

  for (let i = 0; i < 3; i += 1) {
    sum = gameState[i][0] + gameState[i][1] + gameState[i][2];

    if (sum === 3) return 1;
    if (sum === -3) return -1;
  }

  for (let i = 0; i < 3; i += 1) {
    sum = gameState[0][i] + gameState[1][i] + gameState[2][i];

    if (sum === 3) return 1;
    if (sum === -3) return -1;
  }

  sum = gameState[0][0] + gameState[1][1] + gameState[2][2];
  if (sum === 3) return 1;
  if (sum === -3) return 1;

  sum = gameState[2][0] + gameState[1][1] + gameState[0][2];
  if (sum === 3) return 1;
  if (sum === -3) return 1;

  return 0;
};
