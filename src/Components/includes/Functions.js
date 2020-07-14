export const removeHTML = (arg) => {
    const replaced = arg.replace(/(<([^>]+)>)/ig, "")
    return replaced
}