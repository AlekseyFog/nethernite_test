import names from './names';
import paths from './paths';

export default [
  {
    path: paths.index,
    name: names.index,
    component: () => import(/* webpackChunkName: "user" */ '@/views/start/StartView.vue'),
  },
];
