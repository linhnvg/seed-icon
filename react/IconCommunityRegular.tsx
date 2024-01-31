import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCommunityRegular = (
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
          d="M5.9998 8.2998C5.61321 8.2998 5.2998 8.61321 5.2998 8.9998C5.2998 9.3864 5.61321 9.6998 5.9998 9.6998H12.9998C13.3864 9.6998 13.6998 9.3864 13.6998 8.9998C13.6998 8.61321 13.3864 8.2998 12.9998 8.2998H5.9998Z"
          fill="currentColor"
        />
        <path
          d="M5.9998 12.2998C5.61321 12.2998 5.2998 12.6132 5.2998 12.9998C5.2998 13.3864 5.61321 13.6998 5.9998 13.6998H9.9998C10.3864 13.6998 10.6998 13.3864 10.6998 12.9998C10.6998 12.6132 10.3864 12.2998 9.9998 12.2998H5.9998Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.7997 3.49995C18.7997 3.05812 18.4415 2.69995 17.9997 2.69995H1.99971C1.55788 2.69995 1.19971 3.05812 1.19971 3.49995V18.5C1.19971 20.0463 2.45331 21.3 3.99971 21.3H19.9997C21.5461 21.3 22.7997 20.0463 22.7997 18.5V8.49995C22.7997 8.05812 22.4415 7.69995 21.9997 7.69995H18.7997V3.49995ZM17.1997 18.5C17.1997 18.9291 17.2964 19.3361 17.4692 19.7H3.99971C3.33697 19.7 2.79971 19.1627 2.79971 18.5V4.29995H17.1997V18.5ZM21.1997 18.5C21.1997 19.1627 20.6625 19.7 19.9997 19.7C19.337 19.7 18.7997 19.1627 18.7997 18.5V9.29995H21.1997V18.5Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCommunityRegular);
export default ForwardRef;
