import { test, expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import CalendarPreview from '../../CalendarPreview/CalendarPreview';

test('renders calendar with recurring dates highlighted', () => {
  const recurringDates = [new Date(2025, 6, 5)];

  const { getByText } = render(
    <CalendarPreview recurringDates={recurringDates} />
  );

  expect(getByText('5')).toBeTruthy();
});
