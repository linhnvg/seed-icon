import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconDeleteKeyboardThin = (
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
      <g>
        <path
          d="M10.4814 8.37569C10.7157 8.14137 11.0956 8.14137 11.3299 8.37569L14.4057 11.4514L17.4814 8.37569C17.7157 8.14137 18.0956 8.14137 18.3299 8.37569C18.5642 8.61 18.5642 8.9899 18.3299 9.22422L15.2542 12.3L18.3299 15.3757C18.5642 15.61 18.5642 15.9899 18.3299 16.2242C18.0956 16.4585 17.7157 16.4585 17.4814 16.2242L14.4057 13.1485L11.3299 16.2242C11.0956 16.4585 10.7157 16.4585 10.4814 16.2242C10.2471 15.9899 10.2471 15.61 10.4814 15.3757L13.5571 12.3L10.4814 9.22422C10.2471 8.9899 10.2471 8.61 10.4814 8.37569Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.634 5.05791C7.12699 4.5117 7.82832 4.19995 8.5641 4.19995H20.9058C22.3418 4.19995 23.5058 5.36401 23.5058 6.79995V17.8C23.5058 19.2359 22.3418 20.4 20.9058 20.4H8.5641C7.82832 20.4 7.12699 20.0882 6.634 19.542L1.6699 14.042C0.776701 13.0524 0.7767 11.5475 1.6699 10.5579L6.634 5.05791ZM8.5641 5.39995C8.16791 5.39995 7.79027 5.56782 7.52482 5.86193L2.56071 11.3619C2.07976 11.8948 2.07976 12.7051 2.56071 13.238L7.52482 18.738C7.79027 19.0321 8.16791 19.2 8.5641 19.2H20.9058C21.679 19.2 22.3058 18.5732 22.3058 17.8V6.79995C22.3058 6.02675 21.679 5.39995 20.9058 5.39995H8.5641Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconDeleteKeyboardThin);
export default ForwardRef;
