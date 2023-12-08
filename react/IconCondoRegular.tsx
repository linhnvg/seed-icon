import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCondoRegular = (
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
    data-seed-icon-version="0.5.3"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path d="M7 9.00024V7.00024H9V9.00024H7Z" fill="currentColor" />
        <path d="M7 13.0002V11.0002H9V13.0002H7Z" fill="currentColor" />
        <path d="M11 9.00024V7.00024H13V9.00024H11Z" fill="currentColor" />
        <path d="M11 13.0002V11.0002H13V13.0002H11Z" fill="currentColor" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.19995 5.0002C3.19995 3.4538 4.45355 2.2002 5.99995 2.2002H14C15.5463 2.2002 16.8 3.4538 16.8 5.0002V8.2002H19C19.9941 8.2002 20.8 9.00608 20.8 10.0002V22.0002C20.8 22.442 20.4418 22.8002 20 22.8002L12.0017 22.8002L12 22.8002H7.99995L7.99819 22.8002H3.99995C3.55812 22.8002 3.19995 22.442 3.19995 22.0002V5.0002ZM8.79995 21.2002H11.2V17.8002H8.79995V21.2002ZM12.8 21.2002V17.0002C12.8 16.5584 12.4418 16.2002 12 16.2002H7.99995C7.55812 16.2002 7.19995 16.5584 7.19995 17.0002V21.2002H4.79995V5.0002C4.79995 4.33745 5.33721 3.8002 5.99995 3.8002H14C14.6627 3.8002 15.2 4.33745 15.2 5.0002V21.2002H12.8ZM16.8 21.2002V9.8002H19C19.1104 9.8002 19.2 9.88974 19.2 10.0002V21.2002H16.8Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCondoRegular);
export default ForwardRef;
