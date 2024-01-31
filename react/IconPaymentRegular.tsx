import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPaymentRegular = (
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
        <mask id="path-1-inside-1_12571_4011" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 5.99995C1 4.45355 2.2536 3.19995 3.8 3.19995H20.2C21.7464 3.19995 23 4.45355 23 5.99995V18C23 19.5463 21.7464 20.7999 20.2 20.7999H3.8C2.2536 20.7999 1 19.5463 1 18V5.99995ZM3.8 4.79995C3.13726 4.79995 2.6 5.33721 2.6 5.99995V18C2.6 18.6627 3.13726 19.2 3.8 19.2H20.2C20.8627 19.2 21.4 18.6627 21.4 18V5.99995C21.4 5.33721 20.8627 4.79995 20.2 4.79995H3.8Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 8.99995C1 8.55812 1.35817 8.19995 1.8 8.19995H22.2C22.6418 8.19995 23 8.55812 23 8.99995C23 9.44178 22.6418 9.79995 22.2 9.79995H1.8C1.35817 9.79995 1 9.44178 1 8.99995Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.19995 16C4.19995 15.5581 4.55812 15.2 4.99995 15.2H9.99995C10.4418 15.2 10.8 15.5581 10.8 16C10.8 16.4418 10.4418 16.8 9.99995 16.8H4.99995C4.55812 16.8 4.19995 16.4418 4.19995 16Z"
          />
        </mask>
        <path
          d="M1.8 8.19995V6.59995V8.19995ZM22.2 8.19995V9.79995V8.19995ZM22.2 9.79995V11.4V9.79995ZM1.8 9.79995V8.19995V9.79995ZM4.99995 15.2V13.6V15.2ZM9.99995 15.2V16.8V15.2ZM9.99995 16.8V18.4V16.8ZM4.99995 16.8V15.2V16.8ZM3.8 1.59995C1.36995 1.59995 -0.6 3.5699 -0.6 5.99995H2.6C2.6 5.33721 3.13726 4.79995 3.8 4.79995V1.59995ZM20.2 1.59995H3.8V4.79995H20.2V1.59995ZM24.6 5.99995C24.6 3.5699 22.6301 1.59995 20.2 1.59995V4.79995C20.8627 4.79995 21.4 5.33721 21.4 5.99995H24.6ZM24.6 18V5.99995H21.4V18H24.6ZM20.2 22.4C22.6301 22.4 24.6 20.43 24.6 18H21.4C21.4 18.6627 20.8627 19.1999 20.2 19.1999V22.4ZM3.8 22.4H20.2V19.1999H3.8V22.4ZM-0.6 18C-0.6 20.43 1.36995 22.4 3.8 22.4V19.1999C3.13726 19.1999 2.6 18.6627 2.6 18H-0.6ZM-0.6 5.99995V18H2.6V5.99995H-0.6ZM4.2 5.99995C4.2 6.22086 4.02091 6.39995 3.8 6.39995V3.19995C2.2536 3.19995 1 4.45355 1 5.99995H4.2ZM4.2 18V5.99995H1V18H4.2ZM3.8 17.6C4.02092 17.6 4.2 17.779 4.2 18H1C1 19.5463 2.2536 20.8 3.8 20.8V17.6ZM20.2 17.6H3.8V20.8H20.2V17.6ZM19.8 18C19.8 17.779 19.9791 17.6 20.2 17.6V20.8C21.7464 20.8 23 19.5463 23 18H19.8ZM19.8 5.99995V18H23V5.99995H19.8ZM20.2 6.39995C19.9791 6.39995 19.8 6.22087 19.8 5.99995H23C23 4.45355 21.7464 3.19995 20.2 3.19995V6.39995ZM3.8 6.39995H20.2V3.19995H3.8V6.39995ZM1.8 6.59995C0.474516 6.59995 -0.6 7.67447 -0.6 8.99995H2.6C2.6 9.44178 2.24183 9.79995 1.8 9.79995V6.59995ZM22.2 6.59995H1.8V9.79995H22.2V6.59995ZM24.6 8.99995C24.6 7.67447 23.5255 6.59995 22.2 6.59995V9.79995C21.7582 9.79995 21.4 9.44178 21.4 8.99995H24.6ZM22.2 11.4C23.5255 11.4 24.6 10.3254 24.6 8.99995H21.4C21.4 8.55812 21.7582 8.19995 22.2 8.19995V11.4ZM1.8 11.4H22.2V8.19995H1.8V11.4ZM-0.6 8.99995C-0.6 10.3254 0.474517 11.4 1.8 11.4V8.19995C2.24183 8.19995 2.6 8.55812 2.6 8.99995H-0.6ZM4.99995 13.6C3.67447 13.6 2.59995 14.6745 2.59995 16H5.79995C5.79995 16.4418 5.44178 16.8 4.99995 16.8V13.6ZM9.99995 13.6H4.99995V16.8H9.99995V13.6ZM12.4 16C12.4 14.6745 11.3254 13.6 9.99995 13.6V16.8C9.55812 16.8 9.19995 16.4418 9.19995 16H12.4ZM9.99995 18.4C11.3254 18.4 12.4 17.3254 12.4 16H9.19995C9.19995 15.5581 9.55812 15.2 9.99995 15.2V18.4ZM4.99995 18.4H9.99995V15.2H4.99995V18.4ZM2.59995 16C2.59995 17.3254 3.67447 18.4 4.99995 18.4V15.2C5.44178 15.2 5.79995 15.5581 5.79995 16H2.59995Z"
          fill="currentColor"
          mask="url(#path-1-inside-1_12571_4011)"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPaymentRegular);
export default ForwardRef;
