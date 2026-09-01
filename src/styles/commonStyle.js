export function foodListHeaderColor(l) {

    return l === 5 ? 'bg-[rgb(244,232,163)]'
        : l === 4 ? 'bg-[rgb(196,142,253)]'
            : l === 3 ? 'bg-[rgb(109,175,246)]'
                : l === 2 ? 'bg-[rgb(114,216,133)]'
                    : l === 1 ? 'bg-[rgb(193,193,193)]'
                        : l === 0 ? 'bg-[rgb(230,230,230)]' : '';
}