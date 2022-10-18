import camelCase from "lodash/camelCase";
import get from "lodash/get";
import has from "lodash/has";
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import mapKeys from "lodash/mapKeys";
import merge from "lodash/merge";

import Request from "superagent";
import qs from "qs";

const ABSOLUTE_URL = new RegExp("^(?:[a-z]+:)?//", "i");

const DEFAULT_OPTIONS = {
  url: "http://www.mytest.com/data",
  endpoint: "",
  method: "GET",
  query: {},
  headers: {},
  file: null,
  fileFieldName: "content",
  fileParams: null,
  isRaw: false,
  withoutAuthorization: false,
  types: null,
  paged: false,
};

const sendMethod = (HTTPMethod) =>
  HTTPMethod === "post" ||
  HTTPMethod === "put" ||
  HTTPMethod === "patch" ||
  HTTPMethod === "delete"
    ? "send"
    : "query";

const sendArguments = (HTTPMethod, query) =>
  HTTPMethod === "post" ||
  HTTPMethod === "put" ||
  HTTPMethod === "patch" ||
  HTTPMethod === "delete"
    ? JSON.stringify(query)
    : qs.stringify(query, { arrayFormat: "brackets" });

export default (options) => async (dispatch) => {
  const {
    url,
    endpoint,
    headers,
    method,
    query,
    types,
    file,
    fileFieldName,
    fileParams,
    payload,
    isRaw,
    withoutAuthorization,
    paged,
  } = merge({}, DEFAULT_OPTIONS, options);

  const authHeader = Auth.getCoreApiHeader();

  const HTTPMethod = method.toLowerCase();

  const getUrl = () => {
    return url;
  };

  const fullUrl = ABSOLUTE_URL.test(endpoint) ? endpoint : getUrl() + endpoint;

  const request = Request[HTTPMethod](fullUrl);

  if (file) {
    request.attach(fileFieldName, file);
    request.query(fileParams);
    if (!isEmpty(query)) request.field(query);
  } else {
    request[sendMethod(HTTPMethod)](sendArguments(HTTPMethod, query));
  }

  if (authHeader && !withoutAuthorization) {
    headers.authorization = authHeader;
  }

  if (dispatch && has(types, "REQUEST")) {
    dispatch({
      type: types.REQUEST,
      payload,
      request,
    });
  }

  return new Promise((resolve) => {
    request
      .set({
        ...(!file && { "Content-Type": "application/vnd.api+json" }),
        ...headers,
      })
      .on("progress", (event) => {
        if (event.direction === "upload") {
          if (dispatch && has(types, "PROGRESS") && has(event, "percent")) {
            dispatch({
              type: types.PROGRESS,
              percent: event.percent,
              payload,
            });
          }
        }
      })
      .end((error, data) => {
        if (error) captureException(error);

        if (isEmpty(data) || data.body === null) {
          merge(data, { body: { data: [] } });
        }

        const meta = {
          endpoint,
        };

        if (error) {
          if (get(data, ["error", "status"]) === 401 && url === api?.rubyUrl) {
            resolve(Auth.logOut());
          }

          const failureData = {
            ok: false,
            meta,
            payload,
            error: get(data, ["body", "errors"]) || [],
            data,
          };

          if (dispatch && has(types, "FAILURE")) {
            dispatch({ type: types.FAILURE, ...failureData });
          }

          resolve(failureData);
        } else {
          const body = get(data, "body");

          const normalized = !isRaw
            ? normalize(body, {
                endpoint,
                camelizeKeys: true,
              })
            : body;

          const successData = {
            ok: true,
            meta,
            isRaw,
            payload: { ...payload, data: normalized },
          };

          if (paged) {
            let params = get(normalized, ["meta", endpoint, "meta"]);

            params = mapKeys(params, (value, key) => camelCase(key));

            const records = map(
              get(normalized, ["meta", endpoint, "data"]),
              (item) => Number(item.id),
            );

            successData.paged = {
              ...params,
              records,
            };
          }

          if (dispatch && has(types, "SUCCESS")) {
            dispatch({ type: types.SUCCESS, ...successData });
          }

          resolve(successData);
        }
      });
  });
};
