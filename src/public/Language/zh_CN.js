import { Validator } from 'vee-validate';
const messageCN = {
    custom: {
        email: {
            required: '邮箱不能为空'
        },
        name: {
            required: '名称不能为空',
            max: '最多不超过6个字符',
            mobile: '手机号格式不正确'
        }
    }
};
Validator.localize('zh_CN', messageCN);