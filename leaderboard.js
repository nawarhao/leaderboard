// Array of players in finishing order
const winners = ["Alice", "Bob", "Charlie", "Diana", "Ethan"];

console.log("--- Race Leaderboard ---");

// Using entries() to get [index, player] pairs
for (const [index, player] of winners.entries()) {
  const rank = index + 1;
  console.log(`${rank}. ${player}`);
}