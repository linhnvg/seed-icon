import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconWalkFill = (
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
          d="M10.4007 4.49372C10.4007 3.11648 11.5105 2 12.8797 2C14.2488 2 15.3586 3.11648 15.3586 4.49372C15.3586 5.87096 14.2488 6.98744 12.8797 6.98744C11.5105 6.98744 10.4007 5.87096 10.4007 4.49372Z"
          fill="currentColor"
        />
        <path
          d="M9.40457 6.99829C9.5375 6.898 9.70617 6.85843 9.86949 6.88924L14.7995 7.8191C15.0372 7.86395 15.2241 8.04964 15.2715 8.28826L15.8309 11.1018L17.1435 11.762C17.9322 12.1587 18.233 13.1368 17.8047 13.9122C17.4054 14.6354 16.5138 14.9185 15.7741 14.557L14.4251 13.8979L13.5651 13.4653L13.4689 14.0946L15.1404 16.0563C15.2325 16.1644 15.2831 16.302 15.2831 16.4444V20.4738C15.2831 21.3167 14.6038 22 13.7659 22C12.928 22 12.2488 21.3167 12.2488 20.4738V17.2812L9.36924 13.8381L9.36725 13.8357C9.34464 13.8083 9.32441 13.7788 9.30688 13.7476C9.26072 13.6653 9.2358 13.575 9.23144 13.4842V10.9619L8.50431 11.4973V12.4346C8.50431 13.2775 7.82505 13.9608 6.98714 13.9608C6.14923 13.9608 5.46997 13.2775 5.46997 12.4346V10.2649C5.46997 10.0772 5.55782 9.9005 5.70709 9.78788L9.40457 6.99829Z"
          fill="currentColor"
        />
        <path
          d="M11.4342 16.9895L9.44021 14.7127L7.84284 16.6583L5.51809 18.6918C5.05878 19.0936 4.8849 19.7339 5.07738 20.3148C5.41293 21.3274 6.65615 21.6832 7.4713 20.9999L10.1402 18.7626C10.1879 18.7225 10.2291 18.6752 10.2622 18.6223L11.4342 16.9895Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconWalkFill);
export default ForwardRef;
