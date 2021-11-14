import {
  Chatbubble,
  Help,
  Home,
  Person,
  Settings,
} from '@styled-icons/ionicons-outline';
import { LogoApple } from '@styled-icons/ionicons-solid';
import SidebarButton from 'components/SidebarButton';
import * as S from './styles';

type SidebarProps = {
  hasActive?: boolean;
};

const Sidebar = ({ hasActive = false }: SidebarProps) => (
  <S.Wrapper hasActive={hasActive} aria-hidden={hasActive}>
    <S.List>
      <S.ListItem>
        <SidebarButton href="#" title="Brand Name" icon={<LogoApple />} />
      </S.ListItem>
      <S.ListItem>
        <SidebarButton href="#" title="Dashboard" icon={<Home />} />
      </S.ListItem>
      <S.ListItem>
        <SidebarButton href="#" title="Customers" icon={<Person />} />
      </S.ListItem>
      <S.ListItem>
        <SidebarButton href="#" title="Message" icon={<Chatbubble />} />
      </S.ListItem>
      <S.ListItem>
        <SidebarButton href="#" title="Help" icon={<Help />} />
      </S.ListItem>
      <S.ListItem>
        <SidebarButton href="#" title="Settings" icon={<Settings />} />
      </S.ListItem>
    </S.List>
  </S.Wrapper>
);

export default Sidebar;
