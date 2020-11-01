export function groupBy(array: Object[], key: string) {
    if (Array.isArray(array) && array.length > 0) {
        return array.reduce((accumulator, item) => {
            accumulator[item[key]] = [ ...(accumulator[item[key]] || []), item ];
            return accumulator;
        }, {});
    }

    return {};
}

export function groupDistinctBy(array: Object[], key: string, returnField?: string) {
    if (Array.isArray(array) && array.length > 0) {
        return array.reduce((accumulator, item) => {
            if (!accumulator[item[key]]) {
                accumulator[item[key]] = returnField ? item[returnField] : item;
            }
            return accumulator;
        }, {});
    }

    return {};
}

export function sumBy(array: any[], key: string, multiply: number = 1) {
    if (Array.isArray(array) && array.length > 0) {
        return array.reduce((accumulator, item) => accumulator + (parseFloat(item[key]) * multiply), 0);
    }

    return 0;
}

const arrayMoveMutate = (array, from, to) => {
	const startIndex = to < 0 ? array.length + to : to;
	const item = array.splice(from, 1)[0];
	array.splice(startIndex, 0, item);
};

export const arrayMove = (array, from, to) => {
	array = array.slice();
	arrayMoveMutate(array, from, to);
	return array;
};
