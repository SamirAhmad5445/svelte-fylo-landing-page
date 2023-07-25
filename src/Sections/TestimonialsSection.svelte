<script>
  import { testimonialData } from "../stores/store";
  import ProfileCard from "../components/ProfileCard.svelte";
</script>

<section
  id="testimonials"
  class="testimonials-section container"
  aria-label="Testimonials Section"
>
  {#each $testimonialData as person}
    <ProfileCard
      content={person.opinion}
      pic={person.profilePic}
      username={person.username}
      description={person.position}
    />
  {/each}
</section>

<style>
  .testimonials-section {
    --pd-block: 4rem;
    --pd-inline: 0.5rem;
    --pos-top: var(--pd-block) * 0.5;
    --pos-left: var(--pd-inline) - 0.5rem;
    position: relative;
    max-width: 68rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: var(--pd-block) var(--pd-inline);
  }
  .testimonials-section::before {
    content: url("../assets/imgs/bg-quotes.png");
    position: absolute;
    top: calc(var(--pos-top));
    left: calc(var(--pos-left));
    z-index: -1;
  }
  @media (max-width: 54rem) {
    .testimonials-section {
      --pd-inline: 4rem;
      --pos-left: var(--pd-inline);
      grid-template-columns: 1fr;
    }
  }
</style>
