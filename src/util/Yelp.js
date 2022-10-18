const apiKey = `${process.env.REACT_APP_YELP_API_KEY}`;

const Yelp = {};

const generateEndpoint = (term, location, sortBy) => {
  return `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
};

const search = (term, location, sortBy) => {
  return fetch(generateEndpoint(term, location, sortBy), {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Request failed");
      },
      (networkError) => console.log(networkError)
    )
    .then((jsonResponse) => {
      if (jsonResponse.businesses) {
        console.log(jsonResponse);
        return jsonResponse.businesses.map((business) => {
          return {};
        });
      }
    });
};

export { search };
