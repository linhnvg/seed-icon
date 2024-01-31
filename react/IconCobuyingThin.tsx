import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconCobuyingThin = (
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9361 0.822006C12.0826 0.593298 11.2052 1.09983 10.9765 1.95338L10.1331 5.10108C9.58885 4.02767 8.3507 3.44412 7.14191 3.76801L5.33953 4.25096C3.95252 4.62261 3.12941 6.04828 3.50105 7.43529L4.10402 9.68561H3.14297C2.25931 9.68561 1.54297 10.4019 1.54297 11.2856V13.2856C1.54297 14.1693 2.25931 14.8856 3.14297 14.8856H3.47163L4.62421 20.0674C4.9905 21.7142 6.45127 22.8858 8.13832 22.8858H16.2905C17.9776 22.8858 19.4384 21.7142 19.8047 20.0674L20.9572 14.8856H21.2858C22.1695 14.8856 22.8858 14.1693 22.8858 13.2856V11.2856C22.8858 10.402 22.1695 9.68561 21.2858 9.68561H20.847C20.553 7.42859 18.6229 5.68561 16.2858 5.68561C15.726 5.68561 15.1891 5.78581 14.6923 5.96926L15.4474 3.15134C15.6761 2.29779 15.1695 1.42045 14.316 1.19175L12.9361 0.822006ZM19.633 9.68561C19.3496 8.094 17.9588 6.8856 16.2858 6.8856C15.5626 6.8856 14.8938 7.11071 14.3433 7.49468C14.3203 7.51076 14.2965 7.525 14.2721 7.53743L13.6965 9.68561H19.633ZM12.4542 9.68561L14.2883 2.84076C14.3454 2.62737 14.2188 2.40803 14.0054 2.35086L12.6255 1.98112C12.4121 1.92394 12.1928 2.05057 12.1356 2.26396L10.147 9.68561H12.4542ZM8.90467 9.68561L9.54079 7.31157L9.16714 5.91707C8.96702 5.17022 8.19935 4.727 7.4525 4.92712L5.65012 5.41007C4.90326 5.61019 4.46005 6.37786 4.66017 7.12471L5.34636 9.68561H8.90467ZM19.7279 14.8856H4.70096L5.79558 19.8069C6.03977 20.9047 7.01362 21.6858 8.13832 21.6858H16.2905C17.4152 21.6858 18.3891 20.9047 18.6333 19.8069L19.7279 14.8856ZM2.74297 11.2856C2.74297 11.0647 2.92205 10.8856 3.14297 10.8856H21.2858C21.5067 10.8856 21.6858 11.0647 21.6858 11.2856V13.2856C21.6858 13.5065 21.5067 13.6856 21.2858 13.6856H3.14297C2.92205 13.6856 2.74297 13.5065 2.74297 13.2856V11.2856Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconCobuyingThin);
export default ForwardRef;
