<script>
  export let content, pic, username, description;
</script>

<div class="profile-card">
  <p class="content">{content}</p>
  <div class="info">
    <div class="image"><img src={pic} alt={`${username}'s profile pic`} /></div>
    <p class="username">{username}</p>
    <small class="description">{description}</small>
  </div>
</div>

<style>
  .profile-card {
    background-color: var(--bg-testimonial);
    padding: 1.5rem 1rem 1rem;
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 0.75rem;
    box-shadow: 0.375rem 0.375rem 0 var(--bg-hero);
    border-radius: 0.25rem;
  }
  .info {
    display: grid;
    grid-template-columns: 2rem 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0.125rem 0.5rem;
    line-height: 1;
  }
  .image {
    width: 2rem;
    display: grid;
    place-content: center;
    grid-row: 1 / -1;
  }
  .image > img {
    border-radius: 50%;
    object-fit: cover;
  }
  .username {
    font-weight: var(--fw-bold);
  }
  .description {
    font: 0.375rem;
    opacity: 0.7;
  }
</style>
