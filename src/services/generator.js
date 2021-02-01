import { getRequest } from './auth';
import { configs } from '../config';

export const getSkuFullDetails = (data) => {
	// console.log(`${configs.baseURL}(${[...data]})?${configs.secret}`);
	return getRequest(`${configs.baseURL}(${[...data]})?${configs.secret}`, data);
};
