<script>
  import Button from "../components/Button.svelte";
  const handleFormInput = () => {
    const input = document.getElementById("si-input").value;
    if (
      input &&
      input.indexOf("@") !== -1 &&
      input.indexOf(".") !== -1 &&
      input.split("@").length === 2 &&
      input.lastIndexOf(".") > input.indexOf("@")
    ) {
      console.log("ok");
    } else {
      console.log("err");
    }
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
    <form on:submit|preventDefault={handleFormInput} class="si-form">
      <input id="si-input" type="text" placeholder="e.g. example@example.com" />
      <Button>Get Started For Free</Button>
    </form>
  </div>
</section>

<style>
  .si-section {
    padding-block: 4rem;
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
</style>
