import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import CardBox from '.';

describe('<CardBox />', () => {
  it('should render the card itens', () => {
    renderWithTheme(<CardBox />);

    expect(screen.getByText('Daily Views')).toBeInTheDocument();
    expect(screen.getByText('Sales')).toBeInTheDocument();
    expect(screen.getByText('Comments')).toBeInTheDocument();
    expect(screen.getByText('Earning')).toBeInTheDocument();
  });
});
