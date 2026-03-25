

export const getAccoState = () => {

    const saved = localStorage.getItem('AccodionState');
    return saved ? JSON.parse(saved) : {};
};

export const updateAccoState = (accoState) => {

    localStorage.setItem('AccodionState', JSON.stringify(accoState));
}
