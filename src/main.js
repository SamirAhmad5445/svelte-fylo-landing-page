import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    title: "Fylo • Accessible Anywhere",
  },
});

export default app;
