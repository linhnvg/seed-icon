import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconVoteFill = (
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
    data-seed-icon-version="0.5.2"
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
          d="M3 5.0002C3 3.4538 4.2536 2.2002 5.8 2.2002H17.8C19.3464 2.2002 20.6 3.4538 20.6 5.0002V19.0002H3V5.0002ZM16.4088 8.51922C16.6954 8.183 16.6552 7.67806 16.319 7.39142C15.9828 7.10477 15.4779 7.14495 15.1912 7.48117L10.6423 12.8167L8.37017 10.5082C8.06024 10.1933 7.55373 10.1892 7.23883 10.4992C6.92394 10.8091 6.91991 11.3156 7.22983 11.6305L10.1144 14.5614C10.2718 14.7212 10.489 14.8077 10.7132 14.7997C10.9374 14.7917 11.1479 14.6899 11.2934 14.5192L16.4088 8.51922Z"
          fill="currentColor"
        />
        <path
          d="M1.8 20.2002C1.35817 20.2002 1 20.5584 1 21.0002C1 21.442 1.35817 21.8002 1.8 21.8002H21.8C22.2418 21.8002 22.6 21.442 22.6 21.0002C22.6 20.5584 22.2418 20.2002 21.8 20.2002H1.8Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconVoteFill);
export default ForwardRef;
