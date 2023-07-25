import { writable } from "svelte/store";

export let features = writable([
  {
    icon: "./assets/icons/icon-access-anywhere.svg",
    title: "Access your files, anywhere",
    content:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    icon: "./assets/icons/icon-security.svg",
    title: "Security you can trust",
    content:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    icon: "./assets/icons/icon-collaboration.svg",
    title: "Real-time collaboration",
    content:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    icon: "./assets/icons/icon-any-file.svg",
    title: "Store any type of file",
    content:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
]);

export const testimonialData = writable([
  {
    opinion:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    profilePic: "./assets/imgs/profile-1.jpg",
    username: "Satish Patel",
    position: "Founder & CEO, Huddle",
  },
  {
    opinion:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    profilePic: "./assets/imgs/profile-2.jpg",
    username: "Bruce McKenzie",
    position: "Founder & CEO, Huddle",
  },
  {
    opinion:
      "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
    profilePic: "./assets/imgs/profile-3.jpg",
    username: "Iva Boyd",
    position: "Founder & CEO, Huddle",
  },
]);
