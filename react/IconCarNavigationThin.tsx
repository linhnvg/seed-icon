import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarNavigationThin = (
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
        <path
          d="M11.2286 12.6778C11.6546 13.1038 12.3454 13.1038 12.7714 12.6778C13.1974 12.2518 13.1974 11.5611 12.7714 11.135C12.3454 10.709 11.6546 10.709 11.2286 11.135C10.8026 11.5611 10.8026 12.2518 11.2286 12.6778Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.825 7.17497C17.0018 7.35169 17.062 7.61384 16.9802 7.84998L14.7341 14.3312C14.6687 14.5201 14.5202 14.6686 14.3313 14.7341L7.85004 16.9801C7.61389 17.0619 7.35175 17.0017 7.17502 16.825C6.9983 16.6483 6.93805 16.3861 7.01989 16.15L9.26593 9.66873C9.3314 9.47982 9.47987 9.33134 9.66879 9.26588L16.15 7.01983C16.3862 6.93799 16.6483 6.99824 16.825 7.17497ZM15.3069 8.6931L10.3953 10.3952L8.69315 15.3068L13.6048 13.6047L15.3069 8.6931Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5293 12C1.5293 6.21717 6.21717 1.5293 12 1.5293C17.7827 1.5293 22.4706 6.21717 22.4706 12C22.4706 17.7827 17.7827 22.4706 12 22.4706C6.21717 22.4706 1.5293 17.7827 1.5293 12ZM12 2.83425C6.93787 2.83425 2.83425 6.93787 2.83425 12C2.83425 17.062 6.93787 21.1657 12 21.1657C17.062 21.1657 21.1657 17.062 21.1657 12C21.1657 6.93787 17.062 2.83425 12 2.83425Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarNavigationThin);
export default ForwardRef;
