import qs from "querystring";

export const getUrlParams = url => {
  let query;
  if (url) {
    [, query] = url.split("?");
  } else {
    query = "";
  }
  return qs.parse(query);
};
/**
 * params = [{key,value}]
 * */
// eslint-disable-next-line no-undef
export const createUrlFromParams = (params, url) => {
  const current_params = url ? getUrlParams(url) : {};
  params.forEach(param => {
    if (param.value != null && param.value !== "") {
      current_params[param.key] = param.value;
    } else {
      delete current_params[param.key];
    }
  });
  let query = "";
  const arr = Object.keys(current_params);
  arr.forEach((k, index) => {
    query += `${k}=${current_params[k]}`;
    if (index < arr.length - 1) {
      query += "&";
    }
  });
  return query;
};
