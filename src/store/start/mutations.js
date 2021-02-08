import MODULE from './types';

export default {
  [MODULE.MUTATE_PACKAGE_NAME]: (state, packageName) => {
    state.packageName = packageName;
  },
  [MODULE.MUTATE_PACKAGES_BY_NAME]: (state, packageByName) => {
    state.packageByName = packageByName;
  },
  [MODULE.MUTATE_PACKAGES_PAGE]: (state, packagesPage) => {
    state.packagesPage = packagesPage;
  },
  [MODULE.MUTATE_DETAILS_DATA]: (state, detailsData) => {
    state.detailsData = detailsData;
  },
};
