import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithTheme } from 'utils/tests/helpers';

import Base from '.';

describe('<Base />', () => {
  it('should be open/close menu', () => {
    renderWithTheme(
      <Base>
        <div data-testid="Mock Children"></div>
      </Base>,
    );

    const menu = screen.getByRole('navigation');
    const toggle = screen.getByLabelText(/open menu/i);

    // verifica se o menu está sendo exibido
    expect(menu.getAttribute('aria-hidden')).toBe('false');
    expect(menu).toHaveStyle({ width: '300px' });

    // clica no botao de fechar o menu e verifica se ele esta escondido

    userEvent.click(toggle);

    expect(menu.getAttribute('aria-hidden')).toBe('true');
    expect(menu).toHaveStyle({ width: '80px' });
  });
});
