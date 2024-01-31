import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconKeyboardHidingFill = (
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
    <g clipPath="url(#clip0_9147_1775)">
      <g>
        <path
          d="M7.44075 18.0922C7.75272 17.7802 8.25852 17.7802 8.57048 18.0922L11.9998 21.5215L15.4291 18.0922C15.7411 17.7802 16.2469 17.7802 16.5589 18.0922C16.8708 18.4041 16.8708 18.9099 16.5589 19.2219L12.5647 23.2161C12.2527 23.528 11.7469 23.528 11.4349 23.2161L7.44075 19.2219C7.12879 18.9099 7.12879 18.4041 7.44075 18.0922Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.01143 0.550049C2.09963 0.550049 0.549805 2.09987 0.549805 4.01168V12C0.549805 13.9119 2.09963 15.4617 4.01143 15.4617H19.9882C21.9 15.4617 23.4498 13.9119 23.4498 12V4.01168C23.4498 2.09987 21.9 0.550049 19.9882 0.550049H4.01143ZM6.07497 7.34013C6.62645 7.34013 7.07351 6.89307 7.07351 6.34159C7.07351 5.7901 6.62645 5.34304 6.07497 5.34304C5.52348 5.34304 5.07642 5.7901 5.07642 6.34159C5.07642 6.89307 5.52348 7.34013 6.07497 7.34013ZM10.0692 7.34013C10.6206 7.34013 11.0677 6.89307 11.0677 6.34159C11.0677 5.7901 10.6206 5.34304 10.0692 5.34304C9.51767 5.34304 9.0706 5.7901 9.0706 6.34159C9.0706 6.89307 9.51767 7.34013 10.0692 7.34013ZM14.0633 7.34013C14.6148 7.34013 15.0619 6.89307 15.0619 6.34159C15.0619 5.7901 14.6148 5.34304 14.0633 5.34304C13.5119 5.34304 13.0648 5.7901 13.0648 6.34159C13.0648 6.89307 13.5119 7.34013 14.0633 7.34013ZM18.0575 7.34013C18.609 7.34013 19.0561 6.89307 19.0561 6.34159C19.0561 5.7901 18.609 5.34304 18.0575 5.34304C17.506 5.34304 17.059 5.7901 17.059 6.34159C17.059 6.89307 17.506 7.34013 18.0575 7.34013ZM9.33701 9.86982C8.89583 9.86982 8.53818 10.2275 8.53818 10.6687C8.53818 11.1098 8.89583 11.4675 9.33701 11.4675H14.6626C15.1038 11.4675 15.4614 11.1098 15.4614 10.6687C15.4614 10.2275 15.1038 9.86982 14.6626 9.86982H9.33701Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath>
        <rect width={24} height={24} fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(IconKeyboardHidingFill);
export default ForwardRef;
