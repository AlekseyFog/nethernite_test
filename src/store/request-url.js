const npmApiUrl = process.env.VUE_APP_NPM_API_URL;
const apiUrl = process.env.VUE_APP_API_URL;

export const start = {
  fetchPackageByName: `${npmApiUrl}/-/v1/search`,
  fetchData2: `${apiUrl}/package/npm/`,
};
