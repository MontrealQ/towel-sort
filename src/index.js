module.exports = function towelSort(matrix=[]) {
    return matrix
        .map((element, index) => (index % 2 ? element.reverse() : element))
        .reduce((newArray, currentArray) => [...newArray, ...currentArray] , []);
};
