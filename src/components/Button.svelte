<button><slot>Click me!</slot></button>

<style>
  button {
    min-width: 28ch;
    display: inline-block;
    border: 0;
    border-radius: 100vmax;
    background-image: linear-gradient(135deg, var(--cta-gradient));
    padding: 0.75rem 1.5rem;
    text-transform: capitalize;
  }
</style>
