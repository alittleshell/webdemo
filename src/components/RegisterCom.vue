<template>
    <el-dialog v-model="IsShowRegister" title="注册" width="30%" :before-close="handleClose">
        <el-form :model="form" label-width="120px">
            <el-form-item label="昵称">
                <el-input v-model="form.NickName" />
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="form.UserName" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.Password" type="password" show-password />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="Submit">确定</el-button>
                <el-button @click="CloseRegister">取消</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from 'vuex'
//vuex
const store = useStore()
const IsShowRegister = computed(() => store.state.IsShowRegister)
const handleClose = (done: () => void) => {
    store.commit('CloseRegister')
    done();
};
const form = ref()
form.value = {
    NickName: "",
    UserName: "",
    Password: "",
}
const Submit = () => {
    console.log(form.value)
}
const CloseRegister = () => {
    store.commit('CloseRegister')
}
</script>