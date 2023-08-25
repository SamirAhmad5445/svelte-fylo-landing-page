<button class="button"><slot>Click me!</slot></button>

<style>
  .button {
    min-width: 28ch;
    display: inline-block;
    border: 0;
    border-radius: 100vmax;
    background-image: linear-gradient(135deg, var(--cta-gradient));
    background-size: 300%;
    background-position: right;
    transition: background-position 500ms ease-in-out;
    padding: 0.75rem 1.5rem;
    text-transform: capitalize;
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    box-shadow: none;
  }
  .button:hover {
    background-position: left;
  }
</style>
