const baseURL = import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
<<<<<<< HEAD
    throw new Error('Bad Response', res);
=======
    throw { name: 'servicesError', message: jsonResponse };
>>>>>>> origin/main
  }
}

export async function getProductsByCategory(category) {
<<<<<<< HEAD
  const response = await fetch(baseURL + `products/search/${category}`);
=======
  const response = await fetch(baseURL + `/products/search/${category}`);
>>>>>>> origin/main
  const data = await convertToJson(response);
  return data.Result;
}

export async function findProductById(id) {
<<<<<<< HEAD
  const response = await fetch(baseURL + `product/${id}`);
  const data = await convertToJson(response);
  console.log(data.Result)
  return data.Result;
}

export async function checkout(payload) {
=======
  const response = await fetch(baseURL + `/product/${id}`);
  const product = await convertToJson(response);
  return product.Result;
}

export async function checkout(order) {
>>>>>>> origin/main
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
<<<<<<< HEAD
    body: JSON.stringify(payload),
  };
  return await fetch(baseURL + "checkout/", options).then(convertToJson);
}
=======
    body: JSON.stringify(order),
  };
  return await fetch(baseURL + "/checkout/", options).then(convertToJson);
}

export async function loginRequest(user){
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };
  const response = await fetch(baseURL + "/login", options).then(convertToJson);
  return response.accessToken;
}

export async function getOrders(token) {
  const options ={
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(baseURL + "/orders", options).then(convertToJson);
  return response;
}





>>>>>>> origin/main
