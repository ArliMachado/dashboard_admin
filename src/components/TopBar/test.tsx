import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { renderWithTheme } from 'utils/tests/helpers';

import TopBar from '.';

describe('<TopBar />', () => {
  it('should render the search input and user image', async () => {
    const handleToggle = jest.fn();

    renderWithTheme(<TopBar handleToggle={handleToggle} />);

    expect(screen.getByPlaceholderText(/search here/i)).toBeInTheDocument();

    expect(screen.getByRole('img', { name: /user image/i })).toHaveAttribute(
      'src',
      'img/user.jpg',
    );

    expect(handleToggle).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(handleToggle).toHaveBeenCalledTimes(1);
    });
  });
});
