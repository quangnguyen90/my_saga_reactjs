import AdminHomePage from '../containers/AdminHomePage';
import LoginPage from '../containers/LoginPage';
import TaskBoard from '../containers/TaskBoard';

export const API_ENDPOINT = 'http://localhost:3000';

export const STATUSES = [
  {
    value: 0,
    label: 'READY',
  },
  {
    value: 1,
    label: 'IN PROGRESS',
  },
  {
    value: 2,
    label: 'COMPLETE',
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    path: '/admin',
    name: 'Admin Page',
    exact: true,
    component: AdminHomePage,
  },
  {
    path: '/admin/task-board',
    name: 'Task Management',
    exact: false,
    component: TaskBoard,
  },
];

export const USER_ROUTES = [
  {
    path: '/login',
    name: 'Login',
    exact: true,
    component: LoginPage,
  },
];
