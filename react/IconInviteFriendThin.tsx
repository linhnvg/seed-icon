import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconInviteFriendThin = (
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
          d="M6.9749 8.45445C6.9749 5.79063 9.20713 3.5999 11.9999 3.5999C12.3461 3.5999 12.6835 3.63365 13.009 3.69772C13.3342 3.76172 13.6496 3.55002 13.7136 3.22489C13.7776 2.89976 13.5659 2.58431 13.2408 2.52031C12.8393 2.44128 12.4243 2.3999 11.9999 2.3999C8.57947 2.3999 5.7749 5.09334 5.7749 8.45445C5.7749 10.1209 6.46699 11.6263 7.58007 12.718C4.50936 14.2683 2.3999 17.3888 2.3999 20.9999C2.3999 21.3313 2.66853 21.5999 2.9999 21.5999H20.9999C21.3313 21.5999 21.5999 21.3313 21.5999 20.9999C21.5999 17.0417 19.0654 13.6728 15.5085 12.3154C15.1989 12.1972 14.8522 12.3524 14.734 12.662C14.6159 12.9716 14.771 13.3183 15.0806 13.4365C18.0214 14.5588 20.1382 17.2329 20.3773 20.3999H3.62247C3.86158 17.2329 5.97843 14.5588 8.91917 13.4365C9.12652 13.3573 9.27326 13.1702 9.30064 12.95C9.32803 12.7297 9.2316 12.5123 9.04993 12.3848C7.7872 11.4985 6.9749 10.0652 6.9749 8.45445Z"
          fill="currentColor"
        />
        <path
          d="M17.0001 3.3999C17.3315 3.3999 17.6001 3.66853 17.6001 3.9999V6.3999H19.9999C20.3313 6.3999 20.5999 6.66853 20.5999 6.9999C20.5999 7.33127 20.3313 7.5999 19.9999 7.5999H17.6001V9.9999C17.6001 10.3313 17.3315 10.5999 17.0001 10.5999C16.6687 10.5999 16.4001 10.3313 16.4001 9.9999V7.5999H13.9999C13.6685 7.5999 13.3999 7.33127 13.3999 6.9999C13.3999 6.66853 13.6685 6.3999 13.9999 6.3999H16.4001V3.9999C16.4001 3.66853 16.6687 3.3999 17.0001 3.3999Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconInviteFriendThin);
export default ForwardRef;
