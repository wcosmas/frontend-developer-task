<template>
  <div class="home">
    <LeftSidebar />
    <MainContent />
    <RightSidebar />
  </div>
</template>

<script>
import RightSidebar from "./components/RightSidebar.vue";
import LeftSidebar from "./components/LeftSidebar.vue";
import MainContent from "./components/MainContent.vue";

export default {
  name: "Home",
  components: {
    RightSidebar,
    LeftSidebar,
    MainContent,
  },
};
</script>
<style scoped>
.home {
  display: flex;
  justify-content: space-around;
}
</style>
