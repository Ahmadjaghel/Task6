import PageNumber from "./PageNumber.jsx";

const PagesNumbers = ({ data, fun, count }) => {
  const length = Math.ceil(data.length / 6);
  const pageNumber = () => {
    let number = [];
    for (let i = 1; i <= length; i++) {
      number.push(
        <PageNumber value={i} key={i} fun={fun} count={count} length={length} />
      );
    }
    return number;
  };
  return <> {pageNumber()}</>;
};

export default PagesNumbers;
