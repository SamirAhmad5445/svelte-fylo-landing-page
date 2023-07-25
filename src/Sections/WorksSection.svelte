<section id="works" class="works-section container" aria-label="Works Section">
  <div aria-hidden="true" class="image">
    <img src="./assets/imgs/illustration-stay-productive.png" alt="" />
  </div>
  <div class="content">
    <h2>Stay productive,<br /> wherever you are</h2>
    <p>
      Never let location be an issue when accessing your files. Fylo has you
      covered for all of your file storage needs.
    </p>
    <p>
      Securely share files and folders with friends, family and colleagues for
      live collaboration. No email attachments required.
    </p>
    <a href="#works">
      See how Fylo works
      <img src="./assets/icons/icon-arrow.svg" alt="" />
    </a>
  </div>
</section>

<style>
  .works-section {
    max-width: 72rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    justify-content: center;
    padding-block: 3rem;
  }
  .image {
    max-width: 30rem;
  }
  .content {
    padding-block: 1.5rem;
  }
  .content > * {
    max-width: 62ch;
    margin-block-end: 0.75em;
  }
  .content > h2 {
    font-size: 2.5em;
  }
  .content > a {
    width: fit-content;
    color: var(--cyan);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
    border-bottom: 0.125rem solid currentColor;
    border-radius: 0;
    margin-block-start: 1.5rem;
  }
  .content > a:hover {
    color: var(--text);
  }
  @media (max-width: 48rem) {
    .works-section {
      grid-template-columns: 1fr;
    }
    .content > h2 {
      font-size: 1.25rem;
    }
    .content > h2 > br {
      display: none;
    }
  }
</style>
