import Sidebar from 'components/Sidebar';
import TopBar from 'components/TopBar';
import { useState } from 'react';
import * as S from './styles';

export type BaseTemplateProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseTemplateProps) => {
  const [toggleActive, setToggleActive] = useState(false);

  function handleToggle() {
    setToggleActive(!toggleActive);
  }
  return (
    <S.Wrapper>
      <Sidebar hasActive={toggleActive} />
      <S.Content hasActive={toggleActive}>
        <TopBar handleToggle={handleToggle} />
        {children}
      </S.Content>
    </S.Wrapper>
  );
};

export default Base;
