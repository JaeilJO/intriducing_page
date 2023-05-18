import S from './index.styled';

interface SectionProps {
    content: React.ReactNode;
    id: string;
}

const Section = ({ content, id }: SectionProps) => {
    return <S.Section id={id}>{content}</S.Section>;
};

export default Section;
