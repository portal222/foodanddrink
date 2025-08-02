
const PaginationDrink = (cocktails, pageSize) => {
    const pageCount = Math.ceil(cocktails.length / pageSize);
    return Array.from({ length: pageCount}, (_, index) =>
cocktails.slice(index * pageSize, (index + 1) * pageSize)
);
};
export default PaginationDrink;