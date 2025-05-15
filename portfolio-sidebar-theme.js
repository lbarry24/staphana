import { css } from 'lit';
import '@haxtheweb/scroll-button/scroll-button.js';

export const portfolioSidebarStyles = css`
  :host {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  nav {
    width: 200px;
    background: #222;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em 1em;
    gap: 1.5em;
  }
  nav button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    width: 100%;
    padding: 0.8em;
    font-size: 1em;
  }
  nav button:hover {
    background: #444;
  }
  main {
    flex: 1;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
  }
  section {
    height: 100vh;
    scroll-snap-align: start;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    text-align: center;
  }
  .profile-pic {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 1em;
  }
  .scroll-top-btn {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background: #b60909;
    color: white;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  .download-resume-btn {
    position: fixed;
    top: 1rem;
    right: 1rem;
    background: #a60505;
    color: white;
    text-decoration: none;
    font-size: 1rem;
    padding: 0.5em 1em;
    border-radius: 20px;
    border: 1px solid white;
    transition: background 0.3s;
  }
  .download-resume-btn:hover {
    background: #444;
  }
  iframe {
    border: none;
    max-width: 90%;
    height: 600px;
  }
  .about-text {
    max-width: 700px;
    font-size: 1.2rem;
    line-height: 1.8;
    padding: 0 1rem;
  }
`;
