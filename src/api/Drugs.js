// http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList

import  axios from "../utils/axios";

export const getDrugsData = async () => {
  const response = await axios.post("/getDrugList", {
    headers: {
      "content-type": "application/json",
    },
  });
  return response;
};
