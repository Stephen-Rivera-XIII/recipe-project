<script setup lang="ts">
  import { NuxtLoadingIndicator } from '#components';
</script>
<template>
  <nav data-testid="navigation">
    <header class="py-4 border-b">
      <nav class="flex container items-center">
        <NuxtLink to="/" class="flex gap-1 items-center">
          <NuxtImg
            width="56px"
            src="/icon-green.png"
            format="webp"
            alt=""
          />
          <span class="text-3xl font-bold">Nuxtcipes</span>
        </NuxtLink>
        <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
          <li>
            <NuxtLink to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
  </nav>
</template>
