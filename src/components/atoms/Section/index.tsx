import S from "./index.styled";

interface SectionProps {
  children: React.ReactNode;
}

const Section = ({ children }: SectionProps) => {
  return <S.Section>{children}</S.Section>;
};

export default Section;
