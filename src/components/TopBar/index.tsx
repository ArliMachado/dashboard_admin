import * as S from './styles';

type TopBarProps = {
  handleToggle: () => void;
};

const TopBar = ({ handleToggle }: TopBarProps) => {
  return (
    <S.Wrapper>
      <S.Toogle onClick={handleToggle}>
        <S.MenuIcon aria-label="Open Menu" />
      </S.Toogle>

      <S.SearchContainer>
        <S.SearchContent>
          <S.SearchIcon />
          <input type="text" placeholder="Search here" />
        </S.SearchContent>
      </S.SearchContainer>

      <S.User>
        <img src="img/user.jpg" alt="User image" />
      </S.User>
    </S.Wrapper>
  );
};

export default TopBar;
