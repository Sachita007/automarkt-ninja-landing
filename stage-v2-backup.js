const iframe = document.querySelector('#hero-player');
const playButton = document.querySelector('#hero-play');
const wrap = document.querySelector('#hero-player-wrap');

if (iframe && window.Vimeo) {
  const player = new Vimeo.Player(iframe);
  const muteButton = document.querySelector('#hero-mute');
  const clickSurface = document.querySelector('#hero-click-toggle');
  const progress = document.querySelector('#hero-progress');
  const fullscreenButton = document.querySelector('#hero-fullscreen');
  let duration = 0;
  let seeking = false;

  const renderTimeline = percent => {
    if (progress && !seeking) progress.value = percent;
    progress?.style.setProperty('--progress', `${percent}%`);
  };

  const setPlayingState = isPlaying => {
    wrap?.classList.toggle('is-playing', isPlaying);
    clickSurface?.setAttribute('aria-label', isPlaying ? 'Pause video' : 'Play video');
  };

  player.ready().then(async () => {
    duration = await player.getDuration();
    renderTimeline(0);
  });

  playButton?.addEventListener('click', async () => {
    wrap?.classList.add('has-started');
    setPlayingState(true);
    try {
      await player.play();
    } catch (_) {
      wrap?.classList.remove('has-started');
      setPlayingState(false);
    }
  });

  player.on('play', () => {
    wrap?.classList.add('has-started');
    setPlayingState(true);
  });

  player.on('pause', () => setPlayingState(false));

  player.on('ended', () => {
    wrap?.classList.remove('has-started');
    setPlayingState(false);
    renderTimeline(0);
  });

  player.on('timeupdate', data => {
    duration = data.duration;
    if (!seeking) renderTimeline(data.percent * 100);
  });

  clickSurface?.addEventListener('click', async () => {
    const wasPlaying = wrap?.classList.contains('is-playing');
    setPlayingState(!wasPlaying);
    try {
      if (wasPlaying) await player.pause(); else await player.play();
    } catch (_) {
      setPlayingState(wasPlaying);
    }
  });

  progress?.addEventListener('input', () => {
    seeking = true;
    const percent = Number(progress.value);
    progress.style.setProperty('--progress', `${percent}%`);
  });

  progress?.addEventListener('change', async () => {
    if (duration) await player.setCurrentTime(duration * Number(progress.value) / 100);
    seeking = false;
  });

  muteButton?.addEventListener('click', async () => {
    const current = await player.getVolume();
    const next = current > 0 ? 0 : 1;
    await player.setVolume(next);
    muteButton.classList.toggle('is-muted', next === 0);
    muteButton.setAttribute('aria-label', next === 0 ? 'Unmute video' : 'Mute video');
  });

  fullscreenButton?.addEventListener('click', async () => {
    try {
      await player.requestFullscreen();
    } catch (_) {
      await wrap?.requestFullscreen?.();
    }
  });
}
