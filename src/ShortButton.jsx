import React, { useState } from "react";

const ShortButton = ({ tdata, column, updataval }) => {
  const [data, setData] = useState(false);
  const onHandle = () => {
    if (data) {
      setData(false);
      let sort = tdata.sort((a, b) => (a[column] > b[column] ? 1 : -1));
      // console.log(sort);
      updataval(sort, false);
    } else {
      setData(true);
      let sort = tdata.sort((a, b) => (a[column] < b[column] ? 1 : -1));
      // console.log(sort);
      updataval(sort, true);
    }
  };
  return (
    <>
      {data ? (
        <button onClick={onHandle}>v</button>
      ) : (
        <button onClick={onHandle}>^</button>
      )}
    </>
  );
};
export default ShortButton;
