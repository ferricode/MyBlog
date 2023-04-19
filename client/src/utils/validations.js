export const validatePost = (values) => {
    const errors = {
        title: "",
        content: "",
    };
    if (values.title.length < 2 || values.title.length > 30) {
        errors.title = 'Заглавието трябва да е поне с 2 символа и не повече от 30 символа!';
    }
    if (values.content.length < 4 || values.content.length > 2000) {
        errors.content = 'Съдържанието трябва да е поне с 4 символа и не повече от 2000 символа!';
    }
    return errors;
};
export const validatePhoto = (values) => {
    const errors = {
        title: "",
        imageUrl: "",
    };
    if (values.title.length < 2 || values.title.length > 30) {
        errors.title = 'Заглавието трябва да е поне с 2 символа и не повече от 30 символа!';
    }
    if (!/^https?:\/\//i.test(values.imageUrl)) {
        errors.imageUrl = 'URL-то трябва да започва с "http://" или "https://"';
    }
    return errors;
};