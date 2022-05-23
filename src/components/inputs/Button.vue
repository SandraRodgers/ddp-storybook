<template>
  <button class="dg-button">{{ label }}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
.dg-button {
  @apply flex justify-center items-center;
  @apply font-bold;
  @apply text-base;
  @apply leading-4;
  @apply outline-none;
  height: 42px;
  @apply py-2 px-6;
  /* @apply rounded-md; */
  @apply whitespace-nowrap;
  @apply bg-meadow;
  @apply text-darkCharcoal;
  width: fit-content;
}
</style>
