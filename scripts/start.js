import { setPlayerName } from './player.js';
export function initStartScreen() {
  const startBtn = document.getElementById('start-game');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const name = document.getElementById('player-name').value.trim();

      if (name) {
        setPlayerName(name);
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('game-screen').style.display = 'block';
      } else {
        alert('Введите имя!');
      }
    });
  }
}