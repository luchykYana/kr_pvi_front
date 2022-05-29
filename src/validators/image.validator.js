import Joi from 'joi';

export const ImageValidator = Joi.object({
    image: Joi
        .string()
        .trim()
        .required()
        .messages({
            'string.empty': 'поле є обов\'язковим для заповнення',
        }),

    tag1: Joi
        .string()
        .required()
        .messages({
            'string.empty': 'поле є обов\'язковим для заповнення',
        }),
    tag2: Joi
        .string(),
    tag3: Joi
        .string(),
    tag4: Joi
        .string(),
    tag5: Joi
        .string()
});
