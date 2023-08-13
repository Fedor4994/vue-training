<script setup lang="ts">
import { computed } from "vue";

type ButtonType = "submit" | "button" | "reset";

type IProps = {
  type?: ButtonType;
};

const emit = defineEmits<{
  (e: "onHover"): void;
}>();

const props = defineProps<IProps>();
const type = computed<ButtonType>(() => props.type ?? "submit");
</script>

<template>
  <button :type="type" @mouseenter="emit('onHover')">
    <slot></slot>
  </button>
</template>
