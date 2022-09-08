<script setup lang="ts">
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        class="collapse navbar-collapse"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'home'}"
              class="nav-link pointer text-light text-decoration-none"
            >
              Home
            </RouterLink>
          </li>

          <li class="nav-item">
            <RouterLink
              :to="{ name: 'breaking-bad'}"
              class="nav-link pointer text-decoration-none text-light"
            >
              Breaking Bad
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              :to="{ name: 'better-call-saul'}"
              class="nav-link pointer text-light text-decoration-none"
            >
              Better Call Saul
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>