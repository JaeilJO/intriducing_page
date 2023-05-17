import S from './index.styled';
import { NavigationProps } from './index.types';

const Navigtaion = ({ anchors }: NavigationProps) => {
    return (
        <>
            <S.Navigation>
                <S.AnchorList>
                    {anchors.map((anchor) => (
                        <S.Anchor key={anchor.key}>
                            <a target="_self" href={`#${anchor.target_id}`}>
                                {anchor.title}
                            </a>
                        </S.Anchor>
                    ))}
                </S.AnchorList>
            </S.Navigation>
        </>
    );
};
export default Navigtaion;
