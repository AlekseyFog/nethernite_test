import axios from 'axios';
import get from 'lodash/get';
import { start } from '@/store/request-url';
import MODULE from './types';

export default {
  async [MODULE.FETCH_PACKAGES_BY_NAME]({ packageName }) {
    const apiUrl = start.fetchPackageByName;
    try {
      const params = { text: packageName, size: 250 };
      const response = await axios.get(apiUrl, { params });
      const data = get(response, 'data.objects', null);
      return { successes: true, data };
    }
    catch {
      return { successes: false };
    }
  },
};
