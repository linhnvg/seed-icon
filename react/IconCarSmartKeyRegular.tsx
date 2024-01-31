import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCarSmartKeyRegular = (
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
          d="M6.98358 3.85168C7.30347 4.21222 7.85506 4.24519 8.21561 3.9253C9.31998 2.94549 10.6228 2.39975 12 2.39975C13.3773 2.39975 14.6801 2.94549 15.7845 3.9253C16.145 4.24519 16.6966 4.21222 17.0165 3.85168C17.3364 3.49113 17.3034 2.93954 16.9429 2.61965C15.5652 1.39737 13.862 0.654297 12 0.654297C10.1381 0.654297 8.43487 1.39737 7.05721 2.61965C6.69666 2.93954 6.6637 3.49113 6.98358 3.85168Z"
          fill="currentColor"
        />
        <path
          d="M8.68431 5.76067C8.97386 6.146 9.52096 6.22364 9.90629 5.93409C10.4896 5.49577 11.2134 5.23639 12.0002 5.23639C12.787 5.23639 13.5108 5.49577 14.0941 5.93409C14.4794 6.22364 15.0265 6.146 15.3161 5.76067C15.6056 5.37534 15.528 4.82825 15.1427 4.53869C14.2674 3.88102 13.1781 3.49094 12.0002 3.49094C10.8223 3.49094 9.73295 3.88102 8.85773 4.53869C8.4724 4.82825 8.39476 5.37534 8.68431 5.76067Z"
          fill="currentColor"
        />
        <path
          d="M10.5292 12.5325C10.8378 12.9028 10.7877 13.4531 10.4174 13.7616C9.90402 14.1893 9.60004 14.7858 9.60004 15.4415C9.60004 16.6283 10.6333 17.6729 12 17.6729C13.3668 17.6729 14.4 16.6283 14.4 15.4415C14.4 14.7926 14.1058 14.1999 13.6114 13.7888C13.2408 13.4806 13.1902 12.9303 13.4984 12.5597C13.8065 12.1891 14.3568 12.1385 14.7274 12.4467C15.5982 13.1708 16.1455 14.2455 16.1455 15.4415C16.1455 17.6781 14.2427 19.4184 12 19.4184C9.75741 19.4184 7.85458 17.6781 7.85458 15.4415C7.85458 14.2168 8.42955 13.1459 9.3001 12.4206C9.67042 12.1121 10.2207 12.1622 10.5292 12.5325Z"
          fill="currentColor"
        />
        <path
          d="M12.8728 10.9093C12.8728 10.4273 12.482 10.0365 12 10.0365C11.518 10.0365 11.1273 10.4273 11.1273 10.9093V14.182C11.1273 14.664 11.518 15.0547 12 15.0547C12.482 15.0547 12.8728 14.664 12.8728 14.182V10.9093Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.86506 22.6911H14.1351C17.1699 22.6911 19.7323 20.2871 19.3879 17.3211L18.6017 10.5661L18.6013 10.563C18.334 8.33482 16.2952 6.76382 14.0027 6.76382H9.99747C7.7088 6.76382 5.65601 8.33262 5.39833 10.5671L4.61228 17.3213C4.26792 20.2862 6.82077 22.6911 9.86506 22.6911ZM7.13232 10.7668C7.27212 9.5532 8.4466 8.50928 9.99747 8.50928H14.0027C15.5493 8.50928 16.721 9.54994 16.8682 10.7696L16.8683 10.7709L17.6541 17.5229C17.8556 19.2593 16.3301 20.9456 14.1351 20.9456H9.86506C7.66292 20.9456 6.14441 19.2601 6.34608 17.5227L7.13232 10.7668Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCarSmartKeyRegular);
export default ForwardRef;
