import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconBookmarkListThin = (
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
    data-seed-icon-version="0.6.1"
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
          d="M2.73071 4.90005C2.73071 4.56868 2.99934 4.30005 3.33071 4.30005H20.1307C20.4621 4.30005 20.7307 4.56868 20.7307 4.90005C20.7307 5.23142 20.4621 5.50005 20.1307 5.50005H3.33071C2.99934 5.50005 2.73071 5.23142 2.73071 4.90005Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.73071 11.9C2.73071 11.5687 2.99934 11.3 3.33071 11.3H9.13071C9.46208 11.3 9.73071 11.5687 9.73071 11.9C9.73071 12.2314 9.46208 12.5 9.13071 12.5H3.33071C2.99934 12.5 2.73071 12.2314 2.73071 11.9Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.73071 18.9C2.73071 18.5687 2.99934 18.3 3.33071 18.3H9.13071C9.46208 18.3 9.73071 18.5687 9.73071 18.9C9.73071 19.2314 9.46208 19.5 9.13071 19.5H3.33071C2.99934 19.5 2.73071 19.2314 2.73071 18.9Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.111 12.2336C14.1481 11.122 15.8595 11.122 16.8966 12.2336L16.9949 12.3393L17.0927 12.2342C18.1298 11.1227 19.8417 11.122 20.8788 12.2336L20.8802 12.2351C21.9295 13.3674 21.734 15.0303 20.9222 16.1261L20.9213 16.1273C20.1409 17.1752 19.2415 18.0172 18.5427 18.5948C18.1921 18.8847 17.8889 19.1104 17.6719 19.2646C17.5634 19.3418 17.4762 19.4012 17.4151 19.4419C17.3846 19.4623 17.3606 19.478 17.3437 19.489L17.3238 19.5018L17.318 19.5055L17.3162 19.5066L17.3153 19.5072C17.3153 19.5072 17.3151 19.5073 16.9949 18.9999C16.6839 19.513 16.6837 19.5129 16.6837 19.5129L16.6827 19.5123L16.6808 19.5111L16.6747 19.5074L16.6539 19.4945C16.6363 19.4835 16.6113 19.4677 16.5796 19.4473C16.5161 19.4064 16.4257 19.3468 16.3135 19.2694C16.0894 19.1148 15.7775 18.8884 15.4205 18.5976C14.7097 18.0186 13.8042 17.1717 13.0593 16.1145L13.0585 16.1135C12.2959 15.0262 12.0517 13.369 13.111 12.2336ZM16.9949 18.9999L16.6837 19.5129C16.8781 19.6307 17.123 19.6286 17.3153 19.5072L16.9949 18.9999ZM16.9892 18.2777C17.1853 18.1379 17.46 17.9329 17.7782 17.6699C18.4304 17.1308 19.2535 16.3576 19.9584 15.4113C20.5286 14.6411 20.5503 13.6454 20.0007 13.0515C19.4381 12.4492 18.5334 12.4494 17.971 13.0519L17.4342 13.6289C17.3207 13.751 17.1616 13.8203 16.9949 13.8203C16.8283 13.8203 16.6691 13.751 16.5556 13.6289L16.0192 13.0522C15.4565 12.4495 14.551 12.4492 13.9884 13.0522C13.4481 13.6313 13.4781 14.6216 14.0406 15.4239C14.7011 16.361 15.518 17.1294 16.1783 17.6672C16.5037 17.9322 16.7873 18.1382 16.9892 18.2777Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconBookmarkListThin);
export default ForwardRef;
