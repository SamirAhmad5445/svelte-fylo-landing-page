<script>
  // imported components
  import Button from "../components/Button.svelte";
</script>

<section id="hero" class="hero" aria-label="Hero Section">
  <div class="wrapper | container">
    <div class="image">
      <img src="./assets/imgs/illustration-intro.png" alt="" />
    </div>
    <h1 class="title">
      All your files in one secure location, accessible anywhere.
    </h1>
    <p class="description">
      Fylo stores all your most important files in one secure location. Access
      them wherever you need, share and collaborate with friends family, and
      co-workers.
    </p>
    <div class="cta"><Button>get started</Button></div>
  </div>
</section>

<style>
  .hero {
    background-color: var(--bg-hero);
    background-image: url("../assets/svgs/bg-curvy-desktop.svg");
    background-size: 100%;
    background-position: bottom left;
    background-repeat: no-repeat;
    padding-block: 1.5rem 3rem;
    text-align: center;
  }
  @media (max-width: 48rem) {
    .hero {
      background-image: url("../assets/svgs/bg-curvy-mobile.svg");
    }
  }
  .title {
    font-size: 2em;
  }
  .description {
    padding-inline: 2rem;
  }
</style>
