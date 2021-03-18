<template>
  <cc-menu style="width: 15%" />
  <router-view />
</template>

<script>
import CcMenu from "../components/CcMenu.vue";
export default {
  name: "CcMain",
  components: {
    CcMenu,
  },
  methods: {
  }
};
</script>