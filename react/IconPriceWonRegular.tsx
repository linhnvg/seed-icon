import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPriceWonRegular = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string,
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.5.4"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25332 5.73086C5.10472 5.31477 4.64694 5.09793 4.23086 5.24653C3.81477 5.39513 3.59793 5.85291 3.74653 6.26899L5.15044 10.2H3.5002C3.05837 10.2 2.7002 10.5581 2.7002 11C2.7002 11.4418 3.05837 11.8 3.5002 11.8H5.72187L8.03225 18.269C8.14998 18.5987 8.46838 18.8135 8.81815 18.7993C9.16793 18.785 9.46782 18.5451 9.5584 18.2069L11.2745 11.8H12.7253L14.4415 18.2069C14.532 18.5451 14.8319 18.785 15.1817 18.7993C15.5315 18.8135 15.8499 18.5987 15.9676 18.269L18.278 11.8H20.5002C20.942 11.8 21.3002 11.4418 21.3002 11C21.3002 10.5581 20.942 10.2 20.5002 10.2H18.8494L20.2533 6.26899C20.4019 5.85291 20.1851 5.39513 19.769 5.24653C19.3529 5.09793 18.8951 5.31477 18.7465 5.73086L17.1504 10.2H13.9531L12.7727 5.79294C12.679 5.44316 12.362 5.19993 11.9999 5.19993C11.6378 5.19993 11.3209 5.44316 11.2272 5.79294L10.0467 10.2H6.84942L5.25332 5.73086ZM7.42085 11.8L8.67645 15.3156L9.61814 11.8H7.42085ZM11.7031 10.2H12.2967L11.9999 9.09188L11.7031 10.2ZM14.3817 11.8L15.3234 15.3156L16.579 11.8H14.3817Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPriceWonRegular);
export default ForwardRef;
