import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconRedoFill = (
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
        d="M17.307 2.29314L21.7072 6.69335C22.0977 7.08387 22.0977 7.71703 21.7072 8.10756L17.307 12.5078C16.9165 12.8983 16.2833 12.8983 15.8928 12.5078C15.5023 12.1172 15.5023 11.4841 15.8928 11.0936L18.5712 8.4151H9.68481C6.64725 8.4151 4.18481 10.8775 4.18481 13.9151C4.18481 16.9527 6.64725 19.4151 9.68481 19.4151H15.5C16.0523 19.4151 16.5 19.8628 16.5 20.4151C16.5 20.9674 16.0523 21.4151 15.5 21.4151H9.68481C5.54268 21.4151 2.18481 18.0572 2.18481 13.9151C2.18481 9.77296 5.54268 6.4151 9.68481 6.4151H18.6005L15.8928 3.70735C15.5023 3.31683 15.5023 2.68366 15.8928 2.29314C16.2833 1.90261 16.9165 1.90261 17.307 2.29314Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconRedoFill);
export default ForwardRef;
