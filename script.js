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

const bookingTriggers = document.querySelectorAll('a[href="booking.html"]');

if (bookingTriggers.length) {
  const bookingCalendarUrl = 'https://api.leadconnectorhq.com/widget/booking/o9kDHMNSM46WSdjHf0G5';
  const bookingModal = document.createElement('dialog');
  bookingModal.className = 'booking-modal';
  bookingModal.id = 'booking-modal';
  bookingModal.setAttribute('aria-labelledby', 'booking-modal-title');
  bookingModal.innerHTML = `
    <div class="booking-modal-panel">
      <header class="booking-modal-header">
        <div>
          <p>Free strategy session</p>
          <h2 id="booking-modal-title">Book your free audit call.</h2>
        </div>
        <button class="booking-modal-close" type="button" aria-label="Close booking calendar">
          <span aria-hidden="true">×</span>
        </button>
      </header>
      <div class="booking-modal-frame">
        <p class="booking-modal-loading" role="status">Loading live availability…</p>
        <iframe
          data-src="${bookingCalendarUrl}"
          title="Schedule a free Automarkt Ninja audit call"
          scrolling="no"></iframe>
      </div>
      <p class="booking-modal-note">
        By scheduling, you agree to our <a href="privacy-policy.html">Privacy Policy</a> and
        <a href="terms-of-service.html">Terms of Service</a>.
        Calendar not loading? <a href="${bookingCalendarUrl}" target="_blank" rel="noopener noreferrer">Open it securely</a>.
      </p>
    </div>`;
  document.body.append(bookingModal);

  const bookingPanel = bookingModal.querySelector('.booking-modal-panel');
  const bookingClose = bookingModal.querySelector('.booking-modal-close');
  const bookingFrameWrap = bookingModal.querySelector('.booking-modal-frame');
  const bookingCalendarFrame = bookingModal.querySelector('iframe');
  let hasLoadedBookingCalendar = false;

  const loadBookingCalendar = () => {
    if (hasLoadedBookingCalendar) return;
    hasLoadedBookingCalendar = true;
    bookingCalendarFrame.addEventListener('load', () => {
      bookingFrameWrap.classList.add('is-loaded');
    }, { once: true });
    bookingCalendarFrame.src = bookingCalendarFrame.dataset.src;

    if (!document.querySelector('script[data-booking-embed]')) {
      const bookingEmbedScript = document.createElement('script');
      bookingEmbedScript.fetchPriority = 'high';
      bookingEmbedScript.src = 'https://link.msgsndr.com/js/form_embed.js';
      bookingEmbedScript.dataset.bookingEmbed = '';
      document.body.append(bookingEmbedScript);
    }
  };

  const closeBookingModal = () => {
    if (bookingModal.open) bookingModal.close();
  };

  bookingTriggers.forEach(trigger => {
    trigger.addEventListener('click', event => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        typeof bookingModal.showModal !== 'function'
      ) return;

      event.preventDefault();
      loadBookingCalendar();
      if (!bookingModal.open) bookingModal.showModal();
      document.documentElement.classList.add('booking-modal-open');
      bookingClose.focus();
    });
  });

  bookingClose.addEventListener('click', closeBookingModal);
  bookingModal.addEventListener('close', () => {
    document.documentElement.classList.remove('booking-modal-open');
  });
  bookingModal.addEventListener('click', event => {
    if (event.target !== bookingModal) return;
    const panelBounds = bookingPanel.getBoundingClientRect();
    const clickedOutsidePanel =
      event.clientX < panelBounds.left ||
      event.clientX > panelBounds.right ||
      event.clientY < panelBounds.top ||
      event.clientY > panelBounds.bottom;
    if (clickedOutsidePanel) closeBookingModal();
  });

  loadBookingCalendar();
}

const featuredVideo = document.querySelector('#featured-video');

if (featuredVideo) {
  const videoId = featuredVideo.dataset.videoId;
  const featuredMedia = featuredVideo.querySelector('.youtube-featured-media');
  const featuredFrame = featuredVideo.querySelector('.youtube-featured-frame');
  const featuredPoster = featuredVideo.querySelector('.youtube-featured-poster');
  const featuredCta = featuredVideo.querySelector('.youtube-featured-cta');
  const floatClose = featuredVideo.querySelector('.youtube-float-close');
  const mediaSection = document.querySelector('#media');
  const hero = document.querySelector('.hero');
  const teaser = document.querySelector('.video-teaser');
  const teaserOpen = teaser?.querySelector('.video-teaser-open');
  const teaserClose = teaser?.querySelector('.video-teaser-close');
  const teaserStorageKey = 'featured-video-teaser-dismissed';

  let ytPlayer = null;
  let hasStarted = false;
  let hasEnded = false;
  let floatDismissed = false;
  let mediaInView = false;
  let sectionInView = false;
  let teaserDismissed = false;

  try {
    teaserDismissed = sessionStorage.getItem(teaserStorageKey) === '1';
  } catch (_) {}

  const updateFloating = () => {
    const shouldFloat = hasStarted && !hasEnded && !floatDismissed && !mediaInView;
    featuredFrame.classList.toggle('is-floating', shouldFloat);
    floatClose.hidden = !shouldFloat;
  };

  const updateTeaser = () => {
    if (!teaser) return;
    const pastHero = hero ? hero.getBoundingClientRect().bottom < 0 : window.scrollY > 600;
    teaser.hidden = hasStarted || teaserDismissed || sectionInView || !pastHero;
  };

  const connectPlayerApi = iframe => {
    const attach = () => {
      ytPlayer = new YT.Player(iframe, {
        events: {
          onStateChange: event => {
            if (event.data === YT.PlayerState.PLAYING) {
              hasEnded = false;
              floatDismissed = false;
            }
            if (event.data === YT.PlayerState.ENDED) hasEnded = true;
            updateFloating();
          }
        }
      });
    };

    if (window.YT?.Player) return attach();
    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      attach();
    };
    if (!document.querySelector('script[data-youtube-api]')) {
      const apiScript = document.createElement('script');
      apiScript.src = 'https://www.youtube.com/iframe_api';
      apiScript.dataset.youtubeApi = '';
      document.body.append(apiScript);
    }
  };

  const playFeaturedVideo = () => {
    if (hasStarted) {
      ytPlayer?.playVideo?.();
      return;
    }
    hasStarted = true;
    const params = new URLSearchParams({ rel: '0', autoplay: '1', playsinline: '1', enablejsapi: '1' });
    if (location.protocol.startsWith('http')) params.set('origin', location.origin);
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?${params}`;
    iframe.title = featuredPoster.getAttribute('aria-label').replace('Play video: ', '');
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    featuredPoster.replaceWith(iframe);
    connectPlayerApi(iframe);
    updateTeaser();
    updateFloating();
  };

  featuredPoster.addEventListener('click', playFeaturedVideo);
  featuredCta?.addEventListener('click', playFeaturedVideo);

  floatClose.addEventListener('click', () => {
    ytPlayer?.pauseVideo?.();
    floatDismissed = true;
    updateFloating();
  });

  teaserOpen?.addEventListener('click', () => {
    featuredVideo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    playFeaturedVideo();
  });

  teaserClose?.addEventListener('click', () => {
    teaserDismissed = true;
    try {
      sessionStorage.setItem(teaserStorageKey, '1');
    } catch (_) {}
    updateTeaser();
  });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      mediaInView = entry.isIntersecting;
      updateFloating();
    }, { threshold: 0.35 }).observe(featuredMedia);

    if (mediaSection) {
      new IntersectionObserver(([entry]) => {
        sectionInView = entry.isIntersecting;
        updateTeaser();
      }).observe(mediaSection);
    }
  } else {
    mediaInView = true;
  }

  window.addEventListener('scroll', updateTeaser, { passive: true });
  updateTeaser();
}
