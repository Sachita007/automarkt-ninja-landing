const iframe = document.querySelector('#hero-player');
const playButton = document.querySelector('#hero-play');
const wrap = document.querySelector('#hero-player-wrap');

if (iframe && window.Vimeo) {
  const player = new Vimeo.Player(iframe);
  const muteButton = document.querySelector('#hero-mute');
  const volume = document.querySelector('#hero-volume');
  const toggleButton = document.querySelector('#hero-toggle');
  const thumbnailInput = document.querySelector('#thumbnail-input');
  const thumbnail = document.querySelector('#hero-thumbnail');

  playButton?.addEventListener('click', async () => {
    await player.play();
    wrap.classList.add('is-playing');
  });

  player.on('play', () => { wrap.classList.add('is-playing'); toggleButton.textContent = '❚❚'; });
  player.on('pause', () => { wrap.classList.remove('is-playing'); toggleButton.textContent = '▶'; });
  player.on('ended', () => { wrap.classList.remove('is-playing'); toggleButton.textContent = '▶'; });

  toggleButton?.addEventListener('click', async () => {
    if (await player.getPaused()) await player.play(); else await player.pause();
  });

  document.querySelectorAll('.speed').forEach(button => {
    button.addEventListener('click', async () => {
      try { await player.setPlaybackRate(Number(button.dataset.speed)); } catch (_) {}
      document.querySelectorAll('.speed').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
    });
  });

  volume?.addEventListener('input', async () => {
    await player.setVolume(Number(volume.value));
    muteButton.textContent = Number(volume.value) === 0 ? '🔇' : '🔊';
  });

  muteButton?.addEventListener('click', async () => {
    const current = await player.getVolume();
    const next = current > 0 ? 0 : 1;
    await player.setVolume(next);
    volume.value = next;
    muteButton.textContent = next === 0 ? '🔇' : '🔊';
  });

  thumbnailInput?.addEventListener('change', () => {
    const file = thumbnailInput.files?.[0];
    if (file) thumbnail.src = URL.createObjectURL(file);
  });
}
