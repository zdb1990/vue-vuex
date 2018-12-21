import { Validator } from 'vee-validate';
const messageEn = {
    custom: {
        email: {
            required: 'Your email is empty'
        },
        name: {
            required: 'Your name is empty'
        }
    }
}
Validator.localize('en', messageEn);