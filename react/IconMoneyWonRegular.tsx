import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMoneyWonRegular = (
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.38188 7.85243C6.79476 7.69514 7.25697 7.90234 7.41426 8.31522L8.66564 11.6001L10.3108 11.6001L11.2308 8.38024C11.3289 8.0368 11.6428 7.80002 12 7.80002C12.3572 7.80002 12.6711 8.0368 12.7692 8.38024L13.6892 11.6001H15.3344L16.5857 8.31522C16.743 7.90234 17.2053 7.69514 17.6181 7.85243C18.031 8.00972 18.2382 8.47193 18.0809 8.88482L17.0465 11.6001H18.6665C19.1084 11.6001 19.4665 11.9583 19.4665 12.4001C19.4665 12.8419 19.1084 13.2001 18.6665 13.2001H16.437L15.0333 16.8848C14.9107 17.2068 14.5957 17.414 14.2515 17.3993C13.9072 17.3845 13.6111 17.1511 13.5165 16.8198L12.4823 13.2001L11.5177 13.2001L10.4835 16.8198C10.3889 17.1511 10.0928 17.3845 9.74855 17.3993C9.40434 17.414 9.08935 17.2068 8.9667 16.8848L7.563 13.2001H5.3332C4.89138 13.2001 4.5332 12.8419 4.5332 12.4001C4.5332 11.9583 4.89138 11.6001 5.3332 11.6001H6.95347L5.91908 8.88482C5.76179 8.47193 5.96899 8.00972 6.38188 7.85243ZM9.60575 14.0679L9.27517 13.2001H9.85368L9.60575 14.0679ZM12 11.5121L12.0252 11.6001H11.9749L12 11.5121ZM14.3943 14.0679L14.1463 13.2001H14.7248L14.3943 14.0679Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 1.2002C6.03528 1.2002 1.19995 6.03552 1.19995 12.0002C1.19995 17.9649 6.03528 22.8002 12 22.8002C17.9646 22.8002 22.7999 17.9649 22.7999 12.0002C22.7999 6.03552 17.9646 1.2002 12 1.2002ZM2.79995 12.0002C2.79995 6.91918 6.91893 2.8002 12 2.8002C17.081 2.8002 21.2 6.91918 21.2 12.0002C21.2 17.0812 17.081 21.2002 12 21.2002C6.91893 21.2002 2.79995 17.0812 2.79995 12.0002Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMoneyWonRegular);
export default ForwardRef;
