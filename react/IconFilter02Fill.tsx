import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconFilter02Fill = (
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
    data-seed-icon-version="0.5.5"
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
          d="M9.33312 3.86658C10.9724 3.86658 12.3459 5.00434 12.707 6.53324H21.3331C21.7749 6.53324 22.1331 6.89142 22.1331 7.33324C22.1331 7.77507 21.7749 8.13324 21.3331 8.13324H12.707C12.3459 9.66215 10.9724 10.7999 9.33312 10.7999C7.69388 10.7999 6.32037 9.66215 5.95922 8.13324H2.66645C2.22463 8.13324 1.86646 7.77507 1.86646 7.33324C1.86646 6.89142 2.22463 6.53324 2.66645 6.53324H5.95922C6.32037 5.00434 7.69388 3.86658 9.33312 3.86658Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.66646 17.4666H12.6259C12.987 18.9955 14.3605 20.1332 15.9998 20.1332C17.639 20.1332 19.0125 18.9955 19.3737 17.4666H21.3331C21.7749 17.4666 22.1331 17.1084 22.1331 16.6666C22.1331 16.2247 21.7749 15.8666 21.3331 15.8666H19.3737C19.0125 14.3377 17.639 13.1999 15.9998 13.1999C14.3605 13.1999 12.987 14.3377 12.6259 15.8666H2.66646C2.22463 15.8666 1.86646 16.2247 1.86646 16.6666C1.86646 17.1084 2.22463 17.4666 2.66646 17.4666Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconFilter02Fill);
export default ForwardRef;
