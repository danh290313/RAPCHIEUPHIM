import { Profile } from '~/pages/MenuAccount/components/Profile/Profile';
import { HistoryTransaction } from '~/pages/MenuAccount/components/ProfileDetail/HistoryTransaction';

export const listMenu = [
  {
    title: 'THÔNG TIN CHUNG',
    link: 'profile',
    element: <Profile />,
  },
  {
    title: 'CHI TIẾT TÀI KHOẢN',
    link: 'profiledetails',
    element: <HistoryTransaction />,
  },
  {
    title: 'THẺ THÀNH VIÊN',
    link: 'remembercard',
    element: <HistoryTransaction />,
  },
];
