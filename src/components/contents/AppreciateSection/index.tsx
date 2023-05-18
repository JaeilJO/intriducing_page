import S from './index.styled';

const AppreciateSection = () => {
    return (
        <S.AppreciateSection>
            <div style={{ flexGrow: '1' }}>Icon</div>
            <S.TextSet>
                <S.SubTitle>I appreciate</S.SubTitle>
                <S.Title>Well-organized code</S.Title>
                <S.Body>
                    I often find myself contemplating folder structures <br />
                    and clean coding practices.
                </S.Body>
            </S.TextSet>
        </S.AppreciateSection>
    );
};

export default AppreciateSection;
