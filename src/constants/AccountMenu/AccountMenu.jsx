import { Profile } from '~/pages/MenuAccount/components/Profile/Profile';
import { ProfileDetail } from '~/pages/MenuAccount/components/ProfileDetail/ProfileDetail';

export const  listMenu =[
    {
        title: 'THÔNG TIN CHUNG',
        link: 'profile',
        element: <Profile/>,
    },
    {
        title: 'CHI TIẾT TÀI KHOẢN',
        link: 'profiledetails',
        element: <ProfileDetail/>,
    },
    {
        title: 'THẺ THÀNH VIÊN',
        link: 'remembercard',
        element: <ProfileDetail/>,
    }
]