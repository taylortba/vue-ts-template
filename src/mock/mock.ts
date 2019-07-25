/**
 * Created by TaylorTang on 2019/7/3.
 */
import Mock from 'mockjs';
import mockDataAPI from './mockData';

Mock.setup({
    timeout: '1300-1600',
});
Mock.mock('/api/info', 'post', mockDataAPI.info);
