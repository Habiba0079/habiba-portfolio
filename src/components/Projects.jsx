import { useEffect, useRef, useState } from 'react';
import Level from './Level.jsx';
import Joystick from './Joystick.jsx';
import Keywords from './Keywords.jsx';
import { resolveImage } from './ImageSlot.jsx';
import { PROJECTS } from '../data.js';

const wrap = (i, n) => (i + n) % n;

// YouTube and Google Drive links are embedded; anything else is played as a video file.
function embedUrl(src) {
  const yt = src.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0`;
  const drive = src.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (drive) return `https://drive.google.com/file/d/${drive[1]}/preview`;
  return null;
}

// A project shows a video only when its `display` is "video" and it has a video source.
function getVideo(project) {
  if (project.display !== 'video' || !project.video) return null;
  const v = typeof project.video === 'string' ? { src: project.video } : project.video;
  if (!v.src) return null;
  return { src: v.src, poster: v.poster || null, embed: /^https?:\/\//.test(v.src) ? embedUrl(v.src) : null };
}

const previewOf = (project) => getVideo(project)?.poster || project.images.find(Boolean) || null;

// Shown on the arcade screen until a real image is added.
function NoSignal({ hint }) {
  return (
    <div className="nosignal">
      <div className="bars" aria-hidden="true" />
      <div className="nosignal-box">
        <span className="nosignal-title">No image yet</span>
        <span className="nosignal-hint">{hint}</span>
      </div>
    </div>
  );
}

function Picture({ project, src, index, dim = false }) {
  const url = resolveImage(src);
  return (
    <div className={`media${dim ? ' dim' : ''}`}>
      {url ? (
        <img className="shot" src={url} alt={`${project.title} screenshot ${index + 1}`} />
      ) : (
        <NoSignal hint={`images/projects/${project.id}-${index + 1}.png`} />
      )}
    </div>
  );
}

function Menu({ game, onPick }) {
  const project = PROJECTS[game];
  return (
    <>
      <Picture project={project} src={previewOf(project)} index={0} dim />
      <div className="menu">
        <p className="menu-title">Select game</p>
        <ol className="menu-list">
          {PROJECTS.map((p, i) => (
            <li key={p.id}>
              <button type="button" className="menu-item" aria-current={i === game} onClick={() => onPick(i)}>
                <span className="cursor" aria-hidden="true" />
                {p.title}
              </button>
            </li>
          ))}
        </ol>
        <p className="menu-hint">Press A to start</p>
      </div>
    </>
  );
}

function Slides({ project, slide }) {
  return (
    <>
      <Picture project={project} src={project.images[slide]} index={slide} />
      <span className="screen-tag">{project.title}</span>
      <span className="screen-count">
        {slide + 1}/{project.images.length}
      </span>
      <span className="screen-dots" aria-hidden="true">
        {project.images.map((_, i) => (
          <i key={i} className={i === slide ? 'on' : ''} />
        ))}
      </span>
    </>
  );
}

function Movie({ project, video, videoRef }) {
  return (
    <>
      <div className="media">
        {video.embed ? (
          <iframe
            className="shot"
            src={video.embed}
            title={`${project.title} demo video`}
            allow="fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        ) : (
          <video
            ref={videoRef}
            className="shot"
            src={resolveImage(video.src)}
            poster={resolveImage(video.poster) || undefined}
            controls
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}
      </div>
      <span className="screen-tag">{project.title}</span>
    </>
  );
}

// The project arcade: pick a game with the joystick, start it, then flip through its screenshots
// (or watch its video, for projects set to display "video").
export default function Projects() {
  const [mode, setMode] = useState('menu'); // 'menu' | 'play'
  const [game, setGame] = useState(0);
  const [slide, setSlide] = useState(0);
  const [flash, setFlash] = useState(0);
  const [tilt, setTilt] = useState(null);
  const tiltTimer = useRef();
  const swipe = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => () => clearTimeout(tiltTimer.current), []);

  const project = PROJECTS[game];
  const video = getVideo(project);
  const fileVideo = video && !video.embed;
  const count = Math.max(1, project.images.length);
  const bump = () => setFlash((n) => n + 1);

  // Starting a game with a video file plays it (muted, so the browser allows it).
  useEffect(() => {
    if (mode === 'play' && fileVideo) videoRef.current?.play()?.catch(() => {});
  }, [mode, game, fileVideo]);

  const goGame = (delta) => {
    setGame((g) => wrap(g + delta, PROJECTS.length));
    setSlide(0);
    bump();
  };
  const goSlide = (delta) => {
    setSlide((s) => wrap(s + delta, count));
    bump();
  };
  const start = (index = game) => {
    setGame(index);
    setSlide(0);
    setMode('play');
    bump();
  };
  const back = () => {
    setMode('menu');
    bump();
  };
  const seek = (seconds) => {
    const el = videoRef.current;
    if (el) el.currentTime = Math.max(0, el.currentTime + seconds);
  };
  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (el.paused) el.play().catch(() => {});
    else el.pause();
  };

  const press = (dir) => {
    setTilt(dir);
    clearTimeout(tiltTimer.current);
    tiltTimer.current = setTimeout(() => setTilt(null), 160);
    const prev = dir === 'up' || dir === 'left';
    if (mode === 'menu') goGame(prev ? -1 : 1);
    else if (fileVideo && (dir === 'left' || dir === 'right')) seek(dir === 'left' ? -5 : 5);
    else if (video) goGame(prev ? -1 : 1); // an embedded video can't be seeked from here
    else if (dir === 'left' || dir === 'right') goSlide(dir === 'left' ? -1 : 1);
    else goGame(dir === 'up' ? -1 : 1);
  };
  const pressA = () => {
    if (mode === 'menu') start();
    else if (fileVideo) togglePlay();
    else if (!video) goSlide(1);
  };

  const onKeyDown = (event) => {
    const dirs = { ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right' };
    if (dirs[event.key]) {
      event.preventDefault();
      press(dirs[event.key]);
    } else if (event.key === 'Enter' && event.target === event.currentTarget) {
      event.preventDefault();
      pressA();
    } else if (event.key === 'Escape' && mode === 'play') {
      event.preventDefault();
      back();
    }
  };

  // Swipe on the screen works like the joystick (left/right), except over a video.
  const onPointerDown = (event) => {
    swipe.current = mode === 'play' && video ? null : event.clientX;
  };
  const onPointerUp = (event) => {
    if (swipe.current === null) return;
    const dx = event.clientX - swipe.current;
    swipe.current = null;
    if (Math.abs(dx) > 40) press(dx < 0 ? 'right' : 'left');
  };

  const labels =
    mode === 'menu'
      ? { up: 'Previous game', down: 'Next game', left: 'Previous game', right: 'Next game' }
      : fileVideo
        ? { up: 'Previous game', down: 'Next game', left: 'Rewind 5 seconds', right: 'Forward 5 seconds' }
        : video
          ? { up: 'Previous game', down: 'Next game', left: 'Previous game', right: 'Next game' }
          : { up: 'Previous game', down: 'Next game', left: 'Previous image', right: 'Next image' };

  const status = mode === 'menu' ? 'Select game' : video ? 'Video' : `Playing ${slide + 1}/${count}`;
  const aLabel = mode === 'menu' ? 'Start' : fileVideo ? 'Play' : video ? 'Start' : 'Next';

  return (
    <Level id="projects" world="1-3" title="Projects" wide>
      <div
        className="arcade"
        role="group"
        aria-label="Project arcade"
        aria-describedby="arcade-help"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <p className="sr-only" id="arcade-help">
          Use the arrow keys to move, Enter to start a game or play a video, and Escape to go back to the game list.
        </p>
        <p className="sr-only" aria-live="polite">
          {mode === 'play'
            ? video
              ? `${project.title}, demo video`
              : `${project.title}, image ${slide + 1} of ${count}`
            : `Selected ${project.title}`}
        </p>

        <div className="arcade-screen">
          <div className="bezel">
            <div className="screen" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
              <div className="screen-inner flick" key={flash}>
                {mode === 'menu' ? (
                  <Menu game={game} onPick={start} />
                ) : video ? (
                  <Movie project={project} video={video} videoRef={videoRef} />
                ) : (
                  <Slides project={project} slide={slide} />
                )}
              </div>
              <div className="crt" aria-hidden="true" />
            </div>
          </div>
        </div>

        <div className="arcade-info">
          <div className="info-head">
            <h3 className="info-title">{project.title}</h3>
            <p className="info-status">{status}</p>
          </div>
          <p className="info-line">
            <Keywords>{project.tagline}</Keywords>
          </p>
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="controls">
          <Joystick tilt={tilt} labels={labels} onPress={press} />

          <div className="buttons">
            <button type="button" className="abtn abtn--b" onClick={back} disabled={mode === 'menu'} aria-label="B: back to the game list">
              <span className="abtn-cap">B</span>
              <span>Menu</span>
            </button>
            <button
              type="button"
              className="abtn abtn--a"
              onClick={pressA}
              aria-label={mode === 'menu' ? 'A: start game' : fileVideo ? 'A: play or pause' : 'A: next image'}
            >
              <span className="abtn-cap">A</span>
              <span>{aLabel}</span>
            </button>
          </div>

          {(project.links.live || project.links.code) && (
            <div className="controls-links">
              {project.links.live && (
                <a className="pixel-link" href={project.links.live} target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              )}
              {project.links.code && (
                <a className="pixel-link" href={project.links.code} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </Level>
  );
}
