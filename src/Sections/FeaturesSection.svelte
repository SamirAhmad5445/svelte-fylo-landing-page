<script>
  import FeaturedCard from "../components/FeaturedCard.svelte";
  import { features } from "../stores/store";
</script>

<section
  id="features"
  class="features | container"
  aria-label="Features Section"
>
  {#each $features as feature}
    <FeaturedCard
      icon={feature.icon}
      title={feature.title}
      content={feature.content}
    />
  {/each}
</section>

<style>
  .features {
    max-width: 60rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    gap: 4rem;
    margin-inline: auto;
    padding-block: 3rem;

    @media (width < 48rem) {
      grid-template-columns: 1fr;
    }
  }
</style>
