<script setup lang="ts">
  defineProps<{
    label?: string;
    to?: string;
  }>();
</script>
<template>
  <div>
    <NuxtLink
      :to="to"
      class="px-4 py-2 text-white self-start bg-dodgeroll-gold-400 rounded-md text-base lg:text-lg cursor-pointer"
    >
      {{ label }}
    </NuxtLink>
  </div>
</template>
