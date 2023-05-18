import KoreaMap from '@/components/atoms/KoreaMap';
import S from './index.styled';

const FromSection = () => {
    return (
        <S.FromSection>
            <S.TextSet>
                <S.SubTitle>I'm from</S.SubTitle>
                <S.Title>Republic of Korea</S.Title>
            </S.TextSet>
            <S.Map>
                <KoreaMap />
            </S.Map>
        </S.FromSection>
    );
};

export default FromSection;
