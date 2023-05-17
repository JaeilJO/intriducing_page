import Logo from '../../atoms/Logo';
import S from './index.styled';
import Navigtaion from '../../Navigation';
import { Anchors } from '@/components/Navigation/index.types';

const Header = () => {
    const anchors: Anchors[] = [
        { key: 1, title: 'Skills', target_id: 'skills' },
        { key: 2, title: 'Projects', target_id: 'projects' },
        { key: 3, title: 'Experience', target_id: 'experience' },
        { key: 4, title: 'Contact', target_id: 'contact' },
    ];
    return (
        <S.Header>
            <Logo />
            <Navigtaion anchors={anchors} />
        </S.Header>
    );
};

export default Header;
