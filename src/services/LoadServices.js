export default function (axiosClient) {
  return {
    logIn: async params => {
      return axiosClient
        .post('/auth/v2/login', params)
        .then(response => response);
    },
  };
}
