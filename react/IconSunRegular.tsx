import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconSunRegular = (
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
    data-seed-icon-version="0.5.8"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g clipPath="url(#clip0_15552_3476)">
      <g>
        <path
          d="M12 0.763672C12.482 0.763672 12.8728 1.15441 12.8728 1.6364V4.90913C12.8728 5.39112 12.482 5.78185 12 5.78185C11.518 5.78185 11.1273 5.39112 11.1273 4.90913V1.6364C11.1273 1.15441 11.518 0.763672 12 0.763672Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.76367 12C6.76367 9.10808 9.10807 6.76367 12 6.76367C14.892 6.76367 17.2364 9.10808 17.2364 12C17.2364 14.892 14.892 17.2364 12 17.2364C9.10807 17.2364 6.76367 14.892 6.76367 12ZM12 8.50913C10.0721 8.50913 8.50913 10.0721 8.50913 12C8.50913 13.928 10.0721 15.4909 12 15.4909C13.928 15.4909 15.4909 13.928 15.4909 12C15.4909 10.0721 13.928 8.50913 12 8.50913Z"
          fill="currentColor"
        />
        <path
          d="M12.8728 19.0909C12.8728 18.6089 12.482 18.2182 12 18.2182C11.518 18.2182 11.1273 18.6089 11.1273 19.0909V22.3637C11.1273 22.8457 11.518 23.2364 12 23.2364C12.482 23.2364 12.8728 22.8457 12.8728 22.3637V19.0909Z"
          fill="currentColor"
        />
        <path
          d="M18.2182 12C18.2182 11.518 18.6089 11.1273 19.0909 11.1273H22.3637C22.8457 11.1273 23.2364 11.518 23.2364 12C23.2364 12.482 22.8457 12.8728 22.3637 12.8728H19.0909C18.6089 12.8728 18.2182 12.482 18.2182 12Z"
          fill="currentColor"
        />
        <path
          d="M1.6364 11.1273C1.15441 11.1273 0.763672 11.518 0.763672 12C0.763672 12.482 1.15441 12.8728 1.6364 12.8728H4.90913C5.39112 12.8728 5.78185 12.482 5.78185 12C5.78185 11.518 5.39112 11.1273 4.90913 11.1273H1.6364Z"
          fill="currentColor"
        />
        <path
          d="M16.8375 16.8375C17.1783 16.4966 17.7309 16.4966 18.0717 16.8375L19.7081 18.4738C20.0489 18.8147 20.0489 19.3672 19.7081 19.7081C19.3672 20.0489 18.8147 20.0489 18.4738 19.7081L16.8375 18.0717C16.4966 17.7309 16.4966 17.1783 16.8375 16.8375Z"
          fill="currentColor"
        />
        <path
          d="M5.52624 4.29201C5.18542 3.95119 4.63284 3.95119 4.29201 4.29201C3.95119 4.63284 3.95119 5.18542 4.29201 5.52624L5.92838 7.1626C6.2692 7.50342 6.82178 7.50342 7.1626 7.1626C7.50342 6.82178 7.50342 6.2692 7.1626 5.92838L5.52624 4.29201Z"
          fill="currentColor"
        />
        <path
          d="M19.7081 4.29201C20.0489 4.63284 20.0489 5.18542 19.7081 5.52624L18.0717 7.1626C17.7309 7.50342 17.1783 7.50342 16.8375 7.1626C16.4966 6.82178 16.4966 6.2692 16.8375 5.92838L18.4738 4.29201C18.8147 3.95119 19.3672 3.95119 19.7081 4.29201Z"
          fill="currentColor"
        />
        <path
          d="M7.1626 18.0717C7.50342 17.7309 7.50342 17.1783 7.1626 16.8375C6.82178 16.4966 6.2692 16.4966 5.92838 16.8375L4.29201 18.4738C3.95119 18.8147 3.95119 19.3672 4.29201 19.7081C4.63284 20.0489 5.18542 20.0489 5.52624 19.7081L7.1626 18.0717Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath>
        <rect width={24} height={24} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(IconSunRegular);
export default ForwardRef;
