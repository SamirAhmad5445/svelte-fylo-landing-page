<footer>
  <div class="container" style="--container-width: 78rem">
    <img class="logo" src="./assets/logo.svg" alt="" />
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
      <div class="footer-col footer-subgrid" style="--grid-col: 4rem;">
        <div class="footer-col">
          <a href="#">About Us</a>
          <a href="#">Jobs</a>
          <a href="#">Press</a>
          <a href="#">Blog</a>
        </div>
        <div class="footer-col">
          <a href="#">Contact Us</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
      </div>
      <div class="footer-col media-icons">
        <a href="#"><img src="./assets/icons/icon-facebook.svg" alt="" /></a>
        <a href="#"><img src="./assets/icons/icon-twitter.svg" alt="" /></a>
        <a href="#"><img src="./assets/icons/icon-instagram.svg" alt="" /></a>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    background-color: var(--bg-footer);
    padding-block-end: 3rem;
  }
  .logo {
    margin-block-end: 1.5rem;
  }
  .footer-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }
  .footer-grid > * {
    flex-basis: 360px;
  }
  .footer-subgrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 1rem;
  }
  .footer-grid a {
    display: block;
  }
  .even-columns {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5rem 1rem;
    align-content: start;
  }
  .media-icons {
    max-width: 8rem;
    display: flex;
    gap: 0.75rem;
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
  @media (max-width: 48rem) {
    .footer-subgrid {
      grid-template-columns: 1fr;
    }
    .media-icons {
      margin-inline: auto;
    }
  }
</style>
