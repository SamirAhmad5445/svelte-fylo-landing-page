<footer>
  <div
    class="container"
    style="--container-width: 78rem;--container-padding: 3rem"
  >
    <a href="/" class="logo"
      ><img src="./assets/logo.svg" alt="Fylo Home Page" /></a
    >
    <div class="footer-grid" style="margin-inline: auto;">
      <div class="footer-col even-columns">
        <img src="./assets/icons/icon-location.svg" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div class="footer-col even-columns">
        <img src="./assets/icons/icon-phone.svg" alt="" />
        <p>+1-543-123-4567</p>
        <img src="./assets/icons/icon-email.svg" alt="" />
        <a href="mailto:samirahmad5445@gmail.com">example@fylo.com</a>
      </div>
      <nav class="footer-col footer-nav">
        <ul class="stack">
          <li><a href="#About">About Us</a></li>
          <li><a href="#Jobs">Jobs</a></li>
          <li><a href="#Press">Press</a></li>
          <li><a href="#Blog">Blog</a></li>
        </ul>
      </nav>
      <nav class="footer-col footer-nav">
        <ul class="stack">
          <li><a href="#Contact">Contact Us</a></li>
          <li><a href="#Terms">Terms</a></li>
          <li><a href="#Privacy">Privacy</a></li>
        </ul>
      </nav>
      <div class="footer-col media-icons">
        <a href="#facebook"
          ><img src="./assets/icons/icon-facebook.svg" alt="" /></a
        >
        <a href="#twitter"
          ><img src="./assets/icons/icon-twitter.svg" alt="" /></a
        >
        <a href="#instagram"
          ><img src="./assets/icons/icon-instagram.svg" alt="" /></a
        >
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    --footer-spacer: 3rem;
    background-color: var(--bg-footer);
    padding-block-end: 3rem;
  }
  .logo {
    display: block;
    margin-block-end: var(--footer-spacer);
  }
  .media-icons {
    display: flex;
    justify-content: center;
    gap: calc(var(--footer-spacer) / 4);
  }
  .media-icons a {
    width: 2rem;
    height: 2rem;
    border: 0.0625rem solid currentColor;
    border-radius: 50%;
  }
  .media-icons img {
    aspect-ratio: 1;
    object-fit: contain;
    margin: 0.375rem;
  }
  /* footer layout */
  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    gap: var(--footer-spacer);
  }
  .even-columns {
    display: grid;
    grid-template-columns: auto 1fr;
    place-content: start;
    gap: 0.5rem 1.5rem;
  }
  .stack {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
  @media (min-width: 50rem) {
    .footer-grid {
      grid-auto-flow: column;
      grid-auto-columns: 1fr;
      gap: 2rem;
    }
    .footer-col:first-child {
      grid-column: span 2;
    }
  }
</style>
