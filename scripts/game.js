import { getPlayerName } from './player.js';

export function initGameScreen() {
  const playerDisplay = document.getElementById('player-display');
  if (playerDisplay) {
    playerDisplay.textContent = getPlayerName();
  }
}