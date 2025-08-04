

export const recentSearch = () => {

    const getHistory = () => {
        const search = localStorage.getItem('search.History');
        return search ? JSON.parse(search) : [];
    }

    const deleteHistory = (index) => {
        let recent = getHistory();

        recent.splice(index, 1);

        localStorage.setItem('search.History', JSON.stringify(recent));
    }

    const addHistory = (search) => {
        let recent = getHistory();

        recent = recent.filter(item => item !== search);

        recent.unshift(search);

        if (recent.length > 10) {
            recent = recent.slice(0, 10);
        }

        localStorage.setItem('search.History', JSON.stringify(recent));
    }


    return { getHistory, addHistory, deleteHistory };
}


export default recentSearch;