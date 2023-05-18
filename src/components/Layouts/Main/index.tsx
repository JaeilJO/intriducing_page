import anchors from '@/utils/anchors';
import S from './index.styled';
import Section from '@/components/atoms/Section';

const Main = () => {
    return (
        <S.Main>
            {anchors.map((anchor) => (
                <Section id={anchor.target_id} key={anchor.key} content={anchor.content} />
            ))}
        </S.Main>
    );
};

export default Main;
