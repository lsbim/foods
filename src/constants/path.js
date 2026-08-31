export const imagePath = (type, item) => {
    return `${import.meta.env.BASE_URL}/images/`
        + (type === 'character'
            ? 'character/profile/'
            : `${type}/`)
        + `${item}.webp`;
}
