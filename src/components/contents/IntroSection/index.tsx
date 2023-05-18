import Section from '@/components/atoms/Section';
import S from './index.styled';

import myface from '../../../../public/images/myface.png';
import Image from 'next/image';

const IntroSection = () => {
    return (
        <S.IntroSection>
            <S.TextBox>
                <S.MainText>Hello</S.MainText>
                <S.SubText>
                    My name is Jaeil Jo
                    <br /> I'm a Frontend developer
                </S.SubText>
            </S.TextBox>
            <S.Image>
                <Image src={myface} width={500} height={300} alt={'myface'} />
            </S.Image>
        </S.IntroSection>
    );
};

export default IntroSection;
