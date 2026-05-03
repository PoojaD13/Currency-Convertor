// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch(
//       `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
//     )
//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//     console.log(data);
//   }, [currency]);
//   console.log(data);
//   return data;
// }

// export default useCurrencyInfo;

import { useEffect, useState } from "react";

import React from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const hardCodedRates = {
      usd: {
        inr: 83,
        eur: 0.92,
        usd: 1,
      },
      inr: {
        usd: 0.012,
        eur: 0.011,
        inr: 1,
      },
      eur: {
        usd: 1.08,
        inr: 90,
        eur: 1,
      },
    };
    setData(hardCodedRates[currency]);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
