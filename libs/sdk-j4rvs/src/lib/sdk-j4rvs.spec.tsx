import { render } from '@testing-library/react';

import SdkJ4rvs from './sdk-j4rvs';

describe('SdkJ4rvs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SdkJ4rvs />);
    expect(baseElement).toBeTruthy();
  });
});
