import { Validator } from 'vee-validate';
const isMobile = {
    validate: (value, args) => {
        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
}
Validator.extend('mobile', isMobile); // 添加手机号验证规则