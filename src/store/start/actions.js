import chunk from 'lodash/chunk';
import MODULE from './types';
import Api from './api';

export default {
  async [MODULE.FETCH_PACKAGES_BY_NAME]({ dispatch, state: { packageName } }) {
    const { successes, data } = await Api[MODULE.FETCH_PACKAGES_BY_NAME]({ packageName });
    if (successes && data.length) {
      dispatch(MODULE.SET_PACKAGES_BY_NAME, data);
      dispatch(MODULE.SET_PACKAGES_PAGE, 0);
    }
    if (successes && !data.length) {
      alert('Sorry, please try another name!');
    }
  },
  [MODULE.SET_PACKAGES_BY_NAME]({ commit }, packages) {
    const packageList = chunk(packages, 10);
    commit(MODULE.MUTATE_PACKAGES_BY_NAME, packageList);
  },
  [MODULE.SET_PACKAGES_PAGE]({ commit }, packagesPage) {
    commit(MODULE.MUTATE_PACKAGES_PAGE, packagesPage);
  },
  [MODULE.SET_PACKAGE_NAME]({ commit }, packageName) {
    commit(MODULE.MUTATE_PACKAGE_NAME, packageName);
  },
  [MODULE.SET_DETAILS_DATA]({ commit }, detailsData) {
    commit(MODULE.MUTATE_DETAILS_DATA, detailsData);
  },
};
