import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCobuyingRegular = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9876 0.629163C12.0273 0.371868 11.0403 0.941718 10.783 1.90196L10.059 4.60423C9.39346 3.71339 8.2296 3.26979 7.08998 3.57516L5.2876 4.0581C3.79389 4.45834 2.90746 5.99368 3.3077 7.48739L3.84317 9.4858H3.14277C2.14866 9.4858 1.34277 10.2917 1.34277 11.2858V13.2858C1.34277 14.2799 2.14866 15.0858 3.14277 15.0858H3.31095L4.4287 20.1111C4.81534 21.8494 6.35727 23.086 8.13805 23.086H16.2903C18.071 23.086 19.613 21.8494 19.9996 20.1111L21.1174 15.0858H21.2856C22.2797 15.0858 23.0856 14.2799 23.0856 13.2858V11.2858C23.0856 10.2917 22.2797 9.4858 21.2856 9.4858H21.0192C20.6383 7.21569 18.664 5.48592 16.2856 5.48592C15.8336 5.48592 15.3957 5.54858 14.9805 5.66569L15.6403 3.20345C15.8975 2.24321 15.3277 1.2562 14.3675 0.998905L12.9876 0.629163ZM20.2715 11.0858C20.2762 11.0859 20.2809 11.0859 20.2856 11.0859C20.2903 11.0859 20.295 11.0859 20.2997 11.0858H21.2856C21.3961 11.0858 21.4856 11.1753 21.4856 11.2858V13.2858C21.4856 13.3963 21.3961 13.4858 21.2856 13.4858H3.14277C3.03232 13.4858 2.94277 13.3963 2.94277 13.2858V11.2858C2.94277 11.1753 3.03232 11.0858 3.14277 11.0858H20.2715ZM19.3848 9.4858C19.0295 8.10568 17.7766 7.08592 16.2856 7.08592C15.6047 7.08592 14.9756 7.29771 14.4576 7.65903L14.4439 7.66838L13.9569 9.4858H19.3848ZM12.3005 9.4858L14.0948 2.78933C14.1234 2.68264 14.06 2.57297 13.9534 2.54439L12.5735 2.17464C12.4668 2.14606 12.3571 2.20937 12.3285 2.31607L10.4074 9.4858H12.3005ZM8.75094 9.4858L9.3335 7.31165L8.97378 5.96916C8.80225 5.329 8.14425 4.94911 7.50409 5.12064L5.70171 5.60358C5.06155 5.77511 4.68165 6.43312 4.85318 7.07328L5.49962 9.4858H8.75094ZM19.4783 15.0858H4.95005L5.99053 19.7637C6.21438 20.7701 7.10707 21.486 8.13805 21.486H16.2903C17.3212 21.486 18.2139 20.7701 18.4378 19.7637L19.4783 15.0858Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCobuyingRegular);
export default ForwardRef;
