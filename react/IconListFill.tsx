import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconListFill = (
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
    data-seed-icon-version="0.6.1"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <g>
        <path
          d="M4.44995 7.25C5.14031 7.25 5.69995 6.69036 5.69995 6C5.69995 5.30964 5.14031 4.75 4.44995 4.75C3.7596 4.75 3.19995 5.30964 3.19995 6C3.19995 6.69036 3.7596 7.25 4.44995 7.25Z"
          fill="currentColor"
        />
        <path
          d="M8.30005 5C7.74776 5 7.30005 5.44772 7.30005 6C7.30005 6.55228 7.74776 7 8.30005 7H20.4C20.9523 7 21.4 6.55228 21.4 6C21.4 5.44772 20.9523 5 20.4 5H8.30005Z"
          fill="currentColor"
        />
        <path
          d="M8.30005 11C7.74776 11 7.30005 11.4477 7.30005 12C7.30005 12.5523 7.74776 13 8.30005 13H20.4C20.9523 13 21.4 12.5523 21.4 12C21.4 11.4477 20.9523 11 20.4 11H8.30005Z"
          fill="currentColor"
        />
        <path
          d="M7.30005 18C7.30005 17.4477 7.74776 17 8.30005 17H20.4C20.9523 17 21.4 17.4477 21.4 18C21.4 18.5523 20.9523 19 20.4 19H8.30005C7.74776 19 7.30005 18.5523 7.30005 18Z"
          fill="currentColor"
        />
        <path
          d="M5.69995 12C5.69995 12.6904 5.14031 13.25 4.44995 13.25C3.7596 13.25 3.19995 12.6904 3.19995 12C3.19995 11.3096 3.7596 10.75 4.44995 10.75C5.14031 10.75 5.69995 11.3096 5.69995 12Z"
          fill="currentColor"
        />
        <path
          d="M4.44995 19.25C5.14031 19.25 5.69995 18.6904 5.69995 18C5.69995 17.3096 5.14031 16.75 4.44995 16.75C3.7596 16.75 3.19995 17.3096 3.19995 18C3.19995 18.6904 3.7596 19.25 4.44995 19.25Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconListFill);
export default ForwardRef;
