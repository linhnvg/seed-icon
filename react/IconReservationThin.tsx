import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconReservationThin = (
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
          d="M16.4002 11.7423C16.5888 11.4699 16.5209 11.0961 16.2484 10.9075C15.976 10.7189 15.6022 10.7868 15.4136 11.0593L11.3563 16.9198L8.86243 14.0103C8.64678 13.7587 8.268 13.7296 8.01641 13.9452C7.76481 14.1609 7.73567 14.5397 7.95133 14.7913L10.9513 18.2913C11.0724 18.4325 11.252 18.5096 11.4378 18.5C11.6235 18.4904 11.7943 18.3952 11.9002 18.2423L16.4002 11.7423Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.20944 2C8.54081 2 8.80944 2.26863 8.80944 2.6V3.29993H15.2002V2.6C15.2002 2.26863 15.4688 2 15.8002 2C16.1316 2 16.4002 2.26863 16.4002 2.6V3.29993H21.2C21.6418 3.29993 22 3.6581 22 4.09993V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V4.09993C2 3.6581 2.35817 3.29993 2.8 3.29993H7.60944V2.6C7.60944 2.26863 7.87807 2 8.20944 2ZM15.2002 4.49993V5.6C15.2002 5.93137 15.4688 6.2 15.8002 6.2C16.1316 6.2 16.4002 5.93137 16.4002 5.6V4.49993H20.8V7.5H3.2V4.49993H7.60944V5.6C7.60944 5.93137 7.87807 6.2 8.20944 6.2C8.54081 6.2 8.80944 5.93137 8.80944 5.6V4.49993H15.2002ZM3.2 8.7H20.8V19C20.8 19.9941 19.9941 20.8 19 20.8H5C4.00589 20.8 3.2 19.9941 3.2 19V8.7Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconReservationThin);
export default ForwardRef;
