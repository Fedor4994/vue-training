<script setup lang="ts">
import { ref } from "vue";
import { toBebra } from "../utils/bebrator";
import Button from "./Button.vue";
const count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  Count:
  <Button type="button" @onHover="increment">
    <strong>{{ toBebra(count) }}</strong>
  </Button>
</template>
