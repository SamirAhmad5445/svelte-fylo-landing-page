<script>
  import { onMount } from "svelte";
  import Navbar from "./components/Navbar.svelte";
  import HeroSection from "./Sections/HeroSection.svelte";
  import FeaturesSection from "./Sections/FeaturesSection.svelte";
  import WorksSection from "./Sections/WorksSection.svelte";
  import TestimonialsSection from "./Sections/TestimonialsSection.svelte";
  import SignInSection from "./Sections/SignInSection.svelte";
  import Footer from "./components/Footer.svelte";

  export let title;
  onMount(() => (document.title = title));
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Raleway:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<header>
  <Navbar />
</header>
<main>
  <HeroSection />
  <FeaturesSection />
  <WorksSection />
  <TestimonialsSection />
  <SignInSection />
</main>
<Footer />
