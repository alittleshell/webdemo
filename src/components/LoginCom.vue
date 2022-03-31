<template>
  <el-dialog v-model="IsShowLogin" title="登录" width="30%" :before-close="handleClose">
    
  </el-dialog>
</template>
<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from 'vuex'
//vuex
const store = useStore()
const IsShowLogin = computed(() => store.state.IsShowLogin)
const handleClose = (done: () => void) => {
  store.commit('CloseLogin')
  done();
};
</script>