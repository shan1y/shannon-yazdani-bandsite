axios
  .request(`${BaseURL}/comments/?api_key=${apiKey}`)
  .then(function (response) {
    console.log(response.data);
  });

axios
  .request(`${BaseURL}/showdates/?api_key=${apiKey}`)
  .then(function (response) {
    console.log(response.data);
  });
