const apiKey = `${process.env.REACT_APP_YELP_API_KEY}`;

const generateEndpoint = (term, location, sortBy) => {
  return `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
};

const Yelp = {
  search: (term, location, sortBy) => {
    console.log("key: " + apiKey);
    return fetch(generateEndpoint(term, location, sortBy), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then(
        (response) => {
          console.log(response);
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
            return {
              id: business["id"],
              imageSrc: business["image_url"],
              name: business["name"],
              address: business["location"]["address1"],
              city: business["location"]["city"],
              state: business["location"]["state"],
              zipCode: business["location"]["zip_code"],
              category: business["categories"][0].title,
              rating: business["rating"],
              reviewCount: business["review_count"],
            };
          });
        }
      });
  },
};

export default Yelp;
