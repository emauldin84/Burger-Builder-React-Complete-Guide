export const checkValidity =(value, rules) => {
    let isValid = true

    if(!rules) {
        return true
    }
    if (rules.required) {
        isValid = value.trim() !== '' && isValid
    }
    // other option for validating inputs
    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }
    return isValid
}