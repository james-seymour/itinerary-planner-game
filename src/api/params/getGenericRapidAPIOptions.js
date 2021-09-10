
export default function getGenericRapidAPIOptions(baseURL, endpointURL, params) {
  return ({
    method: "GET",
    url: endpointURL,
    params: params,
    headers: {
      'x-rapidapi-host': baseURL,
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    }
  })
}