import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconVolumeOnThin = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8288 3.80742L6.76043 8.15171C6.72418 8.18278 6.67801 8.19986 6.63027 8.19986H3.0002C2.00608 8.19986 1.2002 9.00575 1.2002 9.99986V14.9999C1.2002 15.994 2.00608 16.7999 3.0002 16.7999H6.67973C6.72142 16.7999 6.76206 16.8129 6.79598 16.8371L11.954 20.5214C13.1453 21.3724 14.8002 20.5207 14.8002 19.0567V5.17408C14.8002 3.63625 12.9964 2.80661 11.8288 3.80742ZM12.6097 4.71853C12.9989 4.38493 13.6002 4.66147 13.6002 5.17408V19.0567C13.6002 19.5447 13.0486 19.8286 12.6515 19.5449L7.49346 15.8606C7.25602 15.691 6.97152 15.5999 6.67973 15.5999H3.0002C2.66882 15.5999 2.4002 15.3312 2.4002 14.9999V9.99986C2.4002 9.66849 2.66882 9.39986 3.0002 9.39986H6.63027C6.96447 9.39986 7.28764 9.28031 7.54138 9.06282L12.6097 4.71853Z"
          fill="currentColor"
        />
        <path
          d="M20.8103 5.43086C21.1247 5.32607 21.4645 5.49596 21.5693 5.81033C22.2614 7.88662 23.2236 13.2268 21.5693 18.1898C21.4645 18.5042 21.1247 18.6741 20.8103 18.5693C20.496 18.4645 20.3261 18.1247 20.4309 17.8103C21.9765 13.1733 21.0721 8.11351 20.4309 6.1898C20.3261 5.87544 20.496 5.53564 20.8103 5.43086Z"
          fill="currentColor"
        />
        <path
          d="M17.8103 8.43086C18.1247 8.32607 18.4645 8.49596 18.5693 8.81033C18.928 9.88662 19.4236 12.6268 18.5693 15.1898C18.4645 15.5042 18.1247 15.6741 17.8103 15.5693C17.496 15.4645 17.3261 15.1247 17.4309 14.8103C18.1765 12.5733 17.7388 10.1135 17.4309 9.1898C17.3261 8.87544 17.496 8.53564 17.8103 8.43086Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconVolumeOnThin);
export default ForwardRef;
