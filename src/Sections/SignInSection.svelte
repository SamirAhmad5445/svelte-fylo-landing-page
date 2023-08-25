<script>
  import Button from "../components/Button.svelte";

  $: error = "";
  const validate = () => {
    const input = document.getElementById("si-input").value;
    let emailFormat = new RegExp(
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-z]{2,3}"
    );
    emailFormat.test(input)
      ? (error = "")
      : (error = "Please enter a valid Email address.");
  };
</script>

<section id="sign-in" class="si-section" aria-label="Get early access today">
  <div class="si-wrapper wrapper">
    <h2 class="title">Get early access today</h2>
    <p>
      It only takes a minute to sign up and our free starter tier is extremely
      generous. If you have any questions, our support team would be happy to
      help you.
    </p>
    <form
      on:submit|preventDefault={validate}
      class="si-form"
      data-error={error}
    >
      <input
        id="si-input"
        type="text"
        name="email"
        placeholder="e.g. example@example.com"
        on:keyup={validate}
      />
      <Button>Get Started For Free</Button>
    </form>
  </div>
</section>

<style>
  .si-section {
    padding: 4rem 2rem;
    background-image: linear-gradient(
      to bottom,
      var(--bg-body) 60%,
      var(--bg-footer) 60%
    );
  }
  .si-wrapper {
    --wrapper-width: 52rem;
    background-color: var(--bg-hero);
    margin-inline: auto;
    text-align: center;
    padding: 3rem clamp(1rem, 10dvw, 5rem);
    border-radius: 0.5rem;
  }
  .si-form {
    display: flex;
    gap: 1.25rem;
    position: relative;
  }
  @media (max-width: 48rem) {
    .si-form {
      flex-direction: column;
    }
  }
  .si-form input {
    flex-grow: 999;
    padding: 0.75rem 1.5rem;
    border: 0;
    border-radius: 100vmax;
    background-color: var(--white-1);
    color: var(--dark-blue-4);
    caret-color: var(--cyan);
  }
  .si-form::after {
    --err-msg-spacer: 1.75rem;
    --top: calc(100% + var(--err-msg-spacer) / 4);
    --left: var(--err-msg-spacer);
    content: attr(data-error);
    position: absolute;
    inset: var(--top) auto auto var(--left);
    color: var(--error);
  }
  @media (max-width: 48rem) {
    .si-form::after {
      inset: var(--top) 0 auto;
      text-align: center;
    }
  }
</style>
