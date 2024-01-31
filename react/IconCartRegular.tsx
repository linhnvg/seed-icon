import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCartRegular = (
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
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.8 2C1.35817 2 1 2.35817 1 2.8C1 3.24183 1.35817 3.6 1.8 3.6H3.6448L4.10962 5.9261C4.11136 5.93701 4.11333 5.9479 4.11553 5.95878L4.16207 6.18858L4.51539 7.95676L4.51994 7.95585L5.97822 15.1572C6.14819 15.9966 6.88601 16.6 7.74241 16.6H18.8648C19.7147 16.6 20.4488 16.0055 20.6255 15.1741L22.3255 7.17415C22.5634 6.05445 21.7095 5 20.5648 5H5.55619L5.08525 2.64324C5.01051 2.26924 4.68215 2 4.30076 2H1.8ZM7.54639 14.8397L5.87785 6.6H20.5648C20.692 6.6 20.7869 6.71716 20.7604 6.84157L19.0604 14.8416C19.0408 14.9339 18.9592 15 18.8648 15H7.74241C7.64726 15 7.56528 14.933 7.54639 14.8397Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.59971 17.6C7.27422 17.6 6.19971 18.6745 6.19971 20C6.19971 21.3255 7.27422 22.4 8.59971 22.4C9.92519 22.4 10.9997 21.3255 10.9997 20C10.9997 18.6745 9.92519 17.6 8.59971 17.6ZM7.79971 20C7.79971 19.5581 8.15788 19.2 8.59971 19.2C9.04154 19.2 9.39971 19.5581 9.39971 20C9.39971 20.4418 9.04154 20.8 8.59971 20.8C8.15788 20.8 7.79971 20.4418 7.79971 20Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 20.0001C16 18.6746 17.0745 17.6001 18.4 17.6001C19.7255 17.6001 20.8 18.6746 20.8 20.0001C20.8 21.3256 19.7255 22.4001 18.4 22.4001C17.0745 22.4001 16 21.3256 16 20.0001ZM18.4 19.2001C17.9582 19.2001 17.6 19.5583 17.6 20.0001C17.6 20.4419 17.9582 20.8001 18.4 20.8001C18.8418 20.8001 19.2 20.4419 19.2 20.0001C19.2 19.5583 18.8418 19.2001 18.4 19.2001Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCartRegular);
export default ForwardRef;
