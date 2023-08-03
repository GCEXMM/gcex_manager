import DashboardIcon from '@mui/icons-material/DashboardRounded';
import PeopleIcon from '@mui/icons-material/PeopleRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import Asset from './pages/asset';
import FeeStatus from './pages/FeeStatus';
import FundSummary from './pages/FundSummary';
import Market from './pages/Market';
import MarketStatus from './pages/MarketStatus';
import SmsList from './pages/SmsList';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';

const routes = [
  {
    type: 'collapse',
    label: 'Dashboard',
    key: 'dashboard',
    icon: <DashboardIcon fontSize="medium" />,
    route: '/dashboard',
    items: [
      {
        type: 'collapse',
        label: 'Asset',
        key: 'asset',
        icon: 'A',
        route: '/dashboard/asset',
        component: <Asset />,
      },
      {
        type: 'collapse',
        label: 'Market',
        key: 'market',
        icon: 'M',
        route: '/dashboard/market',
        component: <Market />,
      },
      {
        type: 'collapse',
        label: 'Market Status',
        key: 'market_status',
        icon: 'M',
        route: '/dashboard/market_status',
        component: <MarketStatus />,
      },
      {
        type: 'collapse',
        label: 'Fee Status',
        key: 'fee_status',
        icon: 'F',
        route: '/dashboard/fee_status',
        component: <FeeStatus />,
      },
      {
        type: 'collapse',
        label: 'Fund Summary',
        key: 'fund_summary',
        icon: 'F',
        route: '/dashboard/fund_summary',
        component: <FundSummary />,
      },
      {
        type: 'collapse',
        label: 'SMS List',
        key: 'sms_list',
        icon: 'S',
        route: '/dashboard/sms_list',
        component: <SmsList />,
      },
    ],
  },
  {
    type: 'collapse',
    label: 'Users',
    icon: <PeopleIcon fontSize="medium" />,
    key: 'users',
    route: '/users',
    items: [
      {
        type: 'collapse',
        label: 'List',
        key: 'list',
        icon: 'L',
        route: '/users/list',
      },
      {
        type: 'collapse',
        label: 'Query',
        key: 'query',
        icon: 'Q',
        route: '/users/query',
      },
      {
        type: 'collapse',
        label: 'Order History',
        key: 'order_history',
        icon: 'O',
        route: '/users/order_history',
      },
      {
        type: 'collapse',
        label: 'Open Orders',
        key: 'open_orders',
        icon: 'O',
        route: '/users/open_orders',
      },
    ],
  },
  {
    type: 'collapse',
    label: 'Wallets',
    icon: <CreditCardRoundedIcon fontSize="medium" />,
    key: 'wallets',
    route: '/wallets',
    items: [
      {
        type: 'collapse',
        label: 'Wallets',
        key: 'wallets',
        icon: 'W',
        route: '/',
      },
      {
        type: 'collapse',
        label: 'Deposit',
        key: 'deposit',
        icon: 'D',
        route: '/',
      },
      {
        type: 'collapse',
        label: 'Withdraws',
        key: 'withdraws',
        icon: 'W',
        route: '/',
      },
      {
        type: 'collapse',
        label: 'Update',
        key: 'update',
        icon: 'C',
        route: '/',
      },
    ],
  },
  {
    type: 'collapse',
    label: 'IEO',
    icon: <ShoppingBasketRoundedIcon fontSize="medium" />,
    key: 'ieo',
    route: '/ieo',
    items: [
      {
        type: 'collapse',
        label: 'Summary',
        key: 'summary',
        icon: 'S',
        route: '/',
      },
      {
        type: 'collapse',
        label: 'Orders',
        key: 'orders',
        icon: 'O',
        route: '/',
      },
      {
        type: 'collapse',
        label: 'Wait To Pay',
        key: 'wait_to_pay',
        icon: 'W',
        route: '/',
      },
    ],
  },
  {
    type: 'collapse',
    label: 'Management',
    icon: <ManageAccountsRoundedIcon fontSize="medium" />,
    key: 'management',
    route: '/management',
    items: [
      {
        type: 'collapse',
        label: 'List',
        key: 'list',
        icon: 'L',
        route: '/',
      },
      {
        type: 'collapse',
        label: 'Add Admin',
        key: 'add_admin',
        icon: 'A',
        route: '/',
      },
    ],
  },
];

export default routes;
