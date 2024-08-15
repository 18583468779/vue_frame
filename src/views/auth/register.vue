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
                <!-- <form class=" rounded-md shadow-2xl p-5" @submit.prevent="handleOnSubmit">
                    <h1 class="text-gray-800 font-bold text-2xl mb-1">您好!</h1>
                    <p class="text-sm font-normal text-gray-600 mb-8">欢迎回来</p>
                    <xInput v-bind="field" placeholder="请输入邮箱或电话" v-model="formVal.account" />
                    <span class="text-red-600">{{ errorMessage }}</span>
                    <xInput class="mt-6" placeholder="请输入密码" type="password" v-model="formVal.password" />
                    <xInput class="mt-6" placeholder="请确认密码" type="password" v-model="formVal.passwordConfirm" />
                    <xButton text="注册"></xButton>
                    <div class="flex justify-between mt-4">
                        <span
                            class="text-sm ml-2 text-blue-100 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">忘记密码
                            ?</span>

                        <a href="#"
                            class="text-sm ml-2 text-blue-100 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">已有账号</a>
                    </div>
                </form> -->
                <div class=" bg-dark-500   pl-6">
                    <Form @submit="handleOnSubmit">
                        <Field name="account" label="账号" :validate-on-input="true"
                            :rules="{ email: true, required: true }" v-slot="{ field }">
                            <xInput v-bind="field" placeholder="请输入邮箱或电话" v-model="formVal.account" />
                        </Field>
                        <ErrorMessage name="account" />
                        <button class="bg-indigo-500">点击</button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import { reactive } from 'vue';
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, confirmed, email, min, max } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import zh_CN from '@vee-validate/i18n/dist/locale/zh_CN.json'
defineRule('required', required);
defineRule('email', email);

configure({
    generateMessage: localize('zh_CN', zh_CN)
})
const formVal = reactive({
    account: '',
    password: '',
    passwordConfirm: ''
});

const handleOnSubmit = () => {
    console.log('formVal', formVal)
}

</script>

<style>
.login_img_section {
    background: linear-gradient(rgba(2, 2, 2, .7), rgba(0, 0, 0, .7)), url(https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center;
}
</style>