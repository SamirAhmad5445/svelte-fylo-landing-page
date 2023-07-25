<div class="navbar-wrapper">
  <nav class="navbar | container">
    <div class="nav-logo">
      <a href="/"><img src="./assets/logo.svg" alt="Fylo Home Page" /></a>
    </div>
    <ul class="nav-links">
      <li><a href="#features" class="nav-item">Features</a></li>
      <li><a href="#testimonials" class="nav-item">Team</a></li>
      <li><a href="#sign-in" class="nav-item">Sign In</a></li>
    </ul>
  </nav>
</div>

<style>
  .navbar-wrapper {
    background-color: var(--bg-hero);
  }
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1rem 0;
  }

  .nav-logo img {
    inline-size: 8rem;
    @media (width < 48rem) {
      inline-size: 5rem;
    }
  }

  .nav-links {
    display: flex;
    gap: 1.25rem;
  }

  .nav-item {
    background-image: linear-gradient(currentColor, currentColor);
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: 0% 0.0625rem;
    transition: 250ms;
  }

  .nav-item:is(:hover, :focus) {
    color: var(--white-1);
    background-size: 100% 0.0625rem;
  }

  .nav-links:has(.nav-item:is(:hover, :focus))
    .nav-item:not(:is(:hover, :focus)) {
    opacity: 0.5;
  }
</style>
