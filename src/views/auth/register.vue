<template>
    <div class="h-screen flex w-full ">
        <div class="hidden lg:flex w-full lg:w-1/2 login_img_section
        justify-around items-center">
            <div class=" 
                bg-black 
                opacity-20 
                inset-0 
                z-0">

            </div>
            <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
                <h1 class="text-white font-bold text-4xl font-sans">HtmlCode</h1>
                <p class="text-white mt-1">简单 深度 学习 dw/html 源码网站</p>
                <div class="flex justify-center lg:justify-start mt-6">
                    <a href="#"
                        class="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">进入广场</a>
                </div>
            </div>
        </div>
        <div class="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
            <div class="w-full px-8 md:px-32 lg:px-24 ">
                <v.Form class=" rounded-md shadow-2xl p-5" @submit.prevent="handleOnSubmit" :validation-schema="schema">
                    <h1 class="text-gray-800 font-bold text-3xl mb-1 text-center">会员注册</h1>
                    <p class="text-sm font-normal text-gray-600 mb-10"></p>
                    <v.Field name="account" label="账号" :validate-on-input="true" v-slot="{ field }">
                        <xInput v-bind="field" placeholder="请输入邮箱或电话" v-model="formVal.account" />
                    </v.Field>
                    <v.ErrorMessage name="account" class="text-red-600" />
                    <v.Field name="password" label="密码" v-slot="{ field }">
                        <xInput type="password" class="mt-6" v-bind="field" placeholder="请输入密码"
                            v-model="formVal.password" />
                    </v.Field>
                    <v.ErrorMessage name="password" class="text-red-600" />
                    <v.Field name="passwordConfirm" label="确认密码" :rules="{
                        required: true
                    }" v-slot="{ field }">
                        <xInput type="password" class="mt-6" v-bind="field" placeholder="请确认密码"
                            v-model="formVal.passwordConfirm" />
                    </v.Field>
                    <v.ErrorMessage name="passwordConfirm" class="text-red-600" />
                    <xButton text="注册"></xButton>
                    <div class="flex justify-center mt-5">
                        <i class="fa-brands fa-weixin bg-green-600 text-white rounded-full p-1 cursor-pointer"></i>
                    </div>
                    <div class="flex justify-between mt-4">
                        <span
                            class="text-sm ml-2 text-blue-400 hover:text-blue-800 cursor-pointer hover:-translate-y-1 duration-500 transition-all">忘记密码
                            ?</span>

                        <a href="#"
                            class="text-sm ml-2 text-blue-400 hover:text-blue-800 cursor-pointer hover:-translate-y-1 duration-500 transition-all">已有账号</a>
                    </div>
                </v.Form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { reactive } from 'vue';
import v from '@/plugins/validate'
import yup from '@/plugins/validate/yup';
const formVal = reactive({
    account: '',
    password: '',
    passwordConfirm: ''
});

const handleOnSubmit = () => {
    console.log('formVal', formVal)
}

// 验证规则
const schema = yup.object({
    account: yup.string().required('请填写账号').email().label('账号'),
    password: yup
        .string()
        .required('请输入密码')
        .min(8, '密码至少8位')
        .max(32, '密码最多32位'),
    passwordConfirm: yup
        .string()
        .required('请再次输入密码')
        .oneOf([yup.ref('password'), null], '两次输入的密码不一致'),

})

</script>

<style>
.login_img_section {
    background: linear-gradient(rgba(2, 2, 2, .7), rgba(0, 0, 0, .7)), url(https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center;
}
</style>