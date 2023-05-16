import S from "./index.styled";

interface NavigationProps {
  anchors: Anchors[];
}

interface Anchors {
  key: number;
  title: string;
  target_id: string;
}

const Navigtaion = ({ anchors }: NavigationProps) => {
  return (
    <>
      <S.Navigation>
        <S.AnchorList>
          {anchors.map((anchor) => (
            <S.Anchor key={anchor.key}>
              <a href={`#${anchor.target_id}`}>{anchor.title}</a>
            </S.Anchor>
          ))}
        </S.AnchorList>
      </S.Navigation>
    </>
  );
};
export default Navigtaion;
