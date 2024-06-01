import { render } from '@testing-library/react';

import Product from './product';

describe('React', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Product />);
    expect(baseElement).toBeTruthy();
  });
});
