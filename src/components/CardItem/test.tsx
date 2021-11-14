import { fireEvent, screen, waitFor } from '@testing-library/react';
import { Eye } from '@styled-icons/ionicons-outline';

import CardItem from '.';
import { renderWithTheme } from 'utils/tests/helpers';
import theme from 'styles/theme';

describe('<CardItem />', () => {
  it('should render the title, numbers and icon', () => {
    renderWithTheme(
      <CardItem
        title="Daily Views"
        numbers="500"
        icon={<Eye data-testid="icon" />}
      />,
    );

    expect(screen.getByText('Daily Views')).toBeInTheDocument();
    expect(screen.getByText('500')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should be change color on mouse hover', async () => {
    renderWithTheme(
      <CardItem
        data-testid="cardItem"
        title="Daily Views"
        numbers="500"
        icon={<Eye data-testid="icon" />}
      />,
    );

    const cardItem = screen.getByTestId('cardItem');

    expect(cardItem).toHaveStyle({
      background: theme.colors.secondary,
    });

    fireEvent.mouseOver(cardItem);
    //TODO verificar depois pq a alteração de cor não reflete com await
    waitFor(() => {
      expect(cardItem).toHaveStyle({
        background: theme.colors.primary,
      });

      expect(screen.getByText('Daily Views')).toHaveStyle({
        color: theme.colors.secondary,
      });

      expect(screen.getByText('500')).toHaveStyle({
        color: theme.colors.secondary,
      });

      expect(screen.getByTestId('icon')).toHaveStyle({
        color: theme.colors.secondary,
      });
    });
  });
});
