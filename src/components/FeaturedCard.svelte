<script>
  export let icon, title, content;
</script>

<div class="featured-card">
  <div class="icon"><img src={icon} alt="" /></div>
  <h3 class="title">{title}</h3>
  <p>{content}</p>
</div>

<style>
  .featured-card {
    max-width: 45ch;
    display: grid;
    align-items: center;
    text-align: center;
    @media (width < 48rem) {
      max-width: 38ch;
    }
  }
</style>
