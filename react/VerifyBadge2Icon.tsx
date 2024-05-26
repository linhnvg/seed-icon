import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const VerifyBadge2Icon = (
  {
    size = 24,
    ...props
  }: SVGProps<SVGSVGElement> & {
    size?: number | string,
  },
  ref: Ref<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-seed-icon="true"
    data-seed-icon-version="0.6.2"
    width={size}
    height={size}
    ref={ref}
    {...props}
  >
    <g>
      <path
        d="M7.99996 1.33328C8.48608 1.33328 8.9201 1.45481 9.30205 1.69787C9.68399 1.94092 9.98781 2.2621 10.2135 2.66141C10.6475 2.52252 11.0816 2.50516 11.5156 2.60932C11.9496 2.71349 12.3489 2.93919 12.7135 3.28641C13.0434 3.63363 13.2604 4.02426 13.3645 4.45828C13.4687 4.90967 13.46 5.35238 13.3385 5.78641C13.7378 6.0121 14.059 6.31592 14.302 6.69787C14.5451 7.07981 14.6666 7.51384 14.6666 7.99995C14.6666 8.48606 14.5451 8.92009 14.302 9.30203C14.059 9.68398 13.7378 9.9878 13.3385 10.2135C13.5989 11.1163 13.3906 11.9496 12.7135 12.7135C12.3489 13.0434 11.9496 13.2604 11.5156 13.3645C11.0816 13.4687 10.6475 13.46 10.2135 13.3385C9.98781 13.7378 9.68399 14.059 9.30205 14.302C8.9201 14.5451 8.48608 14.6666 7.99996 14.6666C7.51385 14.6666 7.07983 14.5451 6.69788 14.302C6.31594 14.059 6.01212 13.7378 5.78642 13.3385C5.35239 13.46 4.90969 13.4687 4.4583 13.3645C4.02427 13.2777 3.63364 13.0607 3.28642 12.7135C2.60934 11.9496 2.40101 11.1163 2.66142 10.2135C2.26212 9.9878 1.94094 9.68398 1.69788 9.30203C1.45483 8.92009 1.3333 8.48606 1.3333 7.99995C1.3333 7.51384 1.45483 7.07981 1.69788 6.69787C1.94094 6.31592 2.26212 6.0121 2.66142 5.78641C2.52253 5.35238 2.50517 4.90967 2.60934 4.45828C2.71351 4.02426 2.9392 3.63363 3.28642 3.28641C3.63364 2.93919 4.02427 2.71349 4.4583 2.60932C4.90969 2.52252 5.35239 2.53988 5.78642 2.66141C6.01212 2.2621 6.31594 1.94092 6.69788 1.69787C7.07983 1.45481 7.51385 1.33328 7.99996 1.33328ZM10.5 7.16662C10.7604 6.88884 10.7604 6.60238 10.5 6.30724C10.2222 6.06419 9.93573 6.06419 9.64059 6.30724L7.16663 8.7812L6.12496 7.76557C5.84719 7.52252 5.56073 7.52252 5.26559 7.76557C5.02253 8.06071 5.02253 8.34717 5.26559 8.62495L6.72392 10.0833C7.01906 10.3437 7.30552 10.3437 7.5833 10.0833L10.5 7.16662Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(VerifyBadge2Icon);
export default ForwardRef;
