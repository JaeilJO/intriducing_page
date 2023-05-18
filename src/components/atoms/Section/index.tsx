import S from './index.styled';

interface SectionProps {
    content: React.ReactNode;
    id: string;
    key: number;
}

const Section = ({ content, id, key }: SectionProps) => {
    return (
        <S.Section id={id} key={key}>
            {content}
        </S.Section>
    );
};

export default Section;
