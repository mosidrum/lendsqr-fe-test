import user from '../../assets/icons/user-friends.svg';
import guarantor from '../../assets/icons/guarantors.svg';
import loans from '../../assets/icons/loans.svg';
import decision from '../../assets/icons/decision.svg';
import saving from '../../assets/icons/savings.svg';
import request from '../../assets/icons/request.svg';
import whitelist from '../../assets/icons/whitelist.svg';
import karma from '../../assets/icons/karma.svg';
import briefcase from '../../assets/icons/briefcase.svg';
import bank from '../../assets/icons/bank.svg';
import transaction from '../../assets/icons/transaction.svg';
import services from '../../assets/icons/services.svg';
import report from '../../assets/icons/report.svg';
import settle from '../../assets/icons/settle.svg';
import service from '../../assets/icons/service.svg';
import preferances from '../../assets/icons/preferance.svg';
import fees from '../../assets/icons/fees.svg';
import audit from '../../assets/icons/audit.svg';

export interface SideBarTypes {
  title: string;
  icon: string;
}

export const customersSideBarItems: SideBarTypes[] = [
  {
    title: 'User',
    icon: user
  },
  {
    title: 'Guarantors',
    icon: guarantor
  },
  {
    title: 'Loans',
    icon: loans
  },
  {
    title: 'Decision Models',
    icon: decision
  },
  {
    title: 'Savings',
    icon: saving
  },
  {
    title: 'Loan Requests',
    icon: request
  },
  {
    title: 'Whitelist',
    icon: whitelist
  },
  {
    title: 'Karma',
    icon: karma
  }
];

export const businessesSideBarItems: SideBarTypes[] = [
  {
    title: 'Organization',
    icon: briefcase
  },
  {
    title: 'Loan Products',
    icon: loans
  },
  {
    title: 'Savings Product',
    icon: bank
  },
  {
    title: 'Transaction',
    icon: transaction
  },
  {
    title: 'Services',
    icon: services
  },
  {
    title: 'Service Account',
    icon: service
  },
  {
    title: 'Settlements',
    icon: settle
  },
  {
    title: 'Reports',
    icon: report
  }
];

export const settingsSideBarItems: SideBarTypes[] = [
  {
    title: 'Preferences',
    icon: preferances
  },
  {
    title: 'Fees and Pricing',
    icon: fees
  },
  {
    title: 'Audit Logs',
    icon: audit
  }
];
