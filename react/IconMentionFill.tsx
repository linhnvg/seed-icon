import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconMentionFill = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 12.7236 20.8341 13.8 20.3798 14.6563C19.9472 15.4717 19.3179 16 18.3158 16C17.9482 16 17.576 15.8293 17.2637 15.3999C16.941 14.9562 16.6842 14.2254 16.6842 13.1905V12.018C16.6842 12.012 16.6842 12.006 16.6842 12C16.6842 11.994 16.6842 11.988 16.6842 11.982V7C16.6842 6.44772 16.2365 6 15.6842 6C15.1319 6 14.6842 6.44772 14.6842 7V7.47641C13.8132 6.72207 12.7084 6.26315 11.4737 6.26315C8.48854 6.26315 6.26318 8.94561 6.26318 12C6.26318 15.0544 8.48854 17.7368 11.4737 17.7368C13.0013 17.7368 14.3298 17.0344 15.2631 15.9392C15.3752 16.1665 15.503 16.3793 15.6463 16.5763C16.2864 17.4564 17.23 18 18.3158 18C20.2611 18 21.4739 16.8616 22.1465 15.5937C22.7975 14.3667 23 12.9431 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C14.1617 23 15.7542 22.795 17.0414 22.3834C17.5675 22.2152 17.8575 21.6524 17.6893 21.1263C17.5211 20.6003 16.9583 20.3102 16.4323 20.4784C15.4148 20.8038 14.0488 21 12 21C7.02944 21 3 16.9706 3 12ZM14.6842 11.9846V12.0154C14.677 14.1851 13.1354 15.7368 11.4737 15.7368C9.80806 15.7368 8.26318 14.1778 8.26318 12C8.26318 9.82221 9.80806 8.26315 11.4737 8.26315C13.1354 8.26315 14.677 9.81487 14.6842 11.9846Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconMentionFill);
export default ForwardRef;
