import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconWriteFrequentUseFill = (
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
    <g>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4L21.9999 17.1999C21.9999 15.6535 20.7463 14.3999 19.1999 14.3999C17.6535 14.3999 16.3999 15.6535 16.3999 17.1999V17.3998H16.1999C14.6535 17.3998 13.3999 18.6534 13.3999 20.1998C13.3999 21.7462 14.6535 22.9998 16.1999 22.9998L16.3999 23H5C3.34315 23 2 21.6569 2 20V4ZM7.70588 6C7.31603 6 7 6.26863 7 6.6C7 6.93137 7.31603 7.2 7.70588 7.2H16.2941C16.684 7.2 17 6.93137 17 6.6C17 6.26863 16.684 6 16.2941 6H7.70588ZM7.70588 10.2C7.31603 10.2 7 10.4686 7 10.8C7 11.1313 7.31603 11.4 7.70588 11.4H16.2941C16.684 11.4 17 11.1313 17 10.8C17 10.4686 16.684 10.2 16.2941 10.2H7.70588ZM7.70588 14.3999C7.31603 14.3999 7 14.6685 7 14.9999C7 15.3313 7.31603 15.5999 7.70588 15.5999H10.2941C10.684 15.5999 11 15.3313 11 14.9999C11 14.6685 10.684 14.3999 10.2941 14.3999H7.70588Z"
          fill="currentColor"
        />
        <path
          d="M18.3999 23.1999C18.3999 23.6417 18.7581 23.9999 19.1999 23.9999C19.6417 23.9999 19.9999 23.6417 19.9999 23.1999V20.9998H22.1999C22.6417 20.9998 22.9999 20.6416 22.9999 20.1998C22.9999 19.758 22.6417 19.3998 22.1999 19.3998H19.9999V17.1999C19.9999 16.7581 19.6417 16.3999 19.1999 16.3999C18.7581 16.3999 18.3999 16.7581 18.3999 17.1999V19.3998H16.1999C15.7581 19.3998 15.3999 19.758 15.3999 20.1998C15.3999 20.6416 15.7581 20.9998 16.1999 20.9998H18.3999V23.1999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconWriteFrequentUseFill);
export default ForwardRef;
