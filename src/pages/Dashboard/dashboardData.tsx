import user from '../../assets/icons/dash-users.svg';
import active from '../../assets/icons/active-users.svg';
import loan from '../../assets/icons/users-loan.svg';
import savings from '../../assets/icons/user-savings.svg';
import { CardProps, User } from '../../types';

const storedUsers = localStorage.getItem('users');
const users = storedUsers ? JSON.parse(storedUsers) : [];
const activeUsers = users.filter((eachUser: User) => eachUser.status === 'active').length;
const hasSavings = users.filter((eachUser: User) => eachUser.status === 'inactive').length;
const hasLoanToPay = users.filter((eachUser: User) => eachUser.status === 'pending').length;
const owing = users.filter((eachUser: User) => eachUser.status === 'blacklisted').length;

export const dashboardCardData: CardProps[] = [
  {
    title: 'USERS',
    count: users?.length,
    icon: user,
    background: '#fce8ff'
  },
  {
    title: 'ACTIVE USERS',
    count: activeUsers,
    icon: active,
    background: '#eee8ff'
  },
  {
    title: 'USERS WITH LOANS',
    count: hasLoanToPay + owing,
    icon: loan,
    background: '#feefec'
  },
  {
    title: 'USERS WITH SAVINGS',
    count: hasSavings,
    icon: savings,
    background: '#ffebf0'
  }
];
