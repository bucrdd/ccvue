<template>
  <el-menu @select="handleSelected">
    <el-menu-item
      v-for="(menu, index) in menus"
      :key="menu"
      :index="index.toString()">
      {{ menu }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "CcMenu",
  data() {
    return {
      // menus: [{ "name": "Index" }, { "name": "Users" }, { "name": "Roles" }, { "name": "Me" }],
      menus: ["Index", "Users", "Roles", "Me"],
    };
  },
  methods: {
    handleSelected(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
