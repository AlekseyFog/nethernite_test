import MODULE from './types';

export default {
  [MODULE.GET_PACKAGES_NAME]: ({ packageName }) => (packageName),
  [MODULE.GET_PACKAGES_BY_NAME]: ({ packageByName }) => (packageByName),
  [MODULE.GET_PACKAGES_PAGE]: ({ packagesPage }) => (packagesPage),
  [MODULE.GET_DETAILS_DATA]: ({ detailsData }) => (detailsData),
};
