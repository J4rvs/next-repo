import { render } from '@testing-library/react';

import Locomotora from './locomotora';

describe('Locomotora', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Locomotora />);
    expect(baseElement).toBeTruthy();
  });
});
