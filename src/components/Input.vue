<script setup lang="ts">
import { ref, watch } from "vue";

const { modelType } = defineProps({
  modelType: String,
  type: String,
  placeholder: String,
});

const emits = defineEmits(["update:modelType"]);

const value = ref(modelType);

watch(value, () => {
  emits("update:modelType", value);
});
</script>

<template>
  <input
    v-if="type !== 'textarea'"
    :placeholder="placeholder"
    :type="type"
    v-model="value"
  />

  <textarea
    v-else
    rows="3"
    :placeholder="placeholder"
    v-model="value"
  ></textarea>

  <p :class="$attrs.class">bebra</p>
</template>
