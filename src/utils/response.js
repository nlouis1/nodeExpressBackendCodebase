export const onSuccess = (res, resp_code, resp_msg, data) => {
    return res.status(resp_code).json({
      resp_code,
      resp_msg,
      data,
    });
  };
  
  export const onError = (res, resp_code, resp_msg) => {
    return res.status(resp_code).json({
      resp_code,
      resp_msg,
    });
  };
  
  export const onServerError = (res) => {
    return res.status(500).json({
      resp_code: 500,
      resp_msg: "Internal Server Error",
    });
  };