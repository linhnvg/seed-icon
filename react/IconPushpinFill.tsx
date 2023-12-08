import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconPushpinFill = (
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
      <path
        d="M13.0001 2.30002C13.4971 1.80299 14.303 1.80299 14.8 2.30002L21.8068 9.30684C22.3038 9.80387 22.3038 10.6097 21.8068 11.1068C20.9069 12.0067 18.5498 11.9639 18.5498 11.9639L15.6571 15.7565C15.6571 15.7565 16.4071 18.3064 14.6071 20.1063C14.1101 20.6034 13.3043 20.6034 12.8072 20.1063L9.46465 16.7638C9.41602 16.8073 2.74479 22.7714 2.04026 22.0669C1.33573 21.3623 7.29982 14.6911 7.34334 14.6425L4.00049 11.2996C3.50346 10.8026 3.50368 9.99651 4.00071 9.49947C5.80063 7.69955 8.35051 8.44952 8.35051 8.44952L12.1432 5.55679C12.1432 5.55679 12.1001 3.19998 13.0001 2.30002Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconPushpinFill);
export default ForwardRef;
