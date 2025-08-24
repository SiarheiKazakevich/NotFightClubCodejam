let playerName = localStorage.getItem('playerName') || '';
export function setPlayerName(name) {
  playerName = name;
  localStorage.setItem('playerName', name);
}
export function getPlayerName() {
  return playerName;
}