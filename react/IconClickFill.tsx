import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef } from 'react';
const IconClickFill = (
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
        d="M17.5249 10.9117L17.52 9.9334C17.52 9.08656 16.8335 8.40006 15.9867 8.40006C15.1451 8.40006 14.4619 9.07799 14.4534 9.91766V11.0001C14.4534 11.0368 14.4236 11.0667 14.3867 11.0667C14.3499 11.0667 14.32 11.0369 14.32 11.0001V9.9334L14.3201 8.60006C14.3201 7.75323 13.6336 7.06673 12.7867 7.06673C11.9399 7.06673 11.2534 7.75323 11.2534 8.60007L11.2534 11.0001C11.2534 11.0369 11.2235 11.0667 11.1867 11.0667C11.1499 11.0667 11.12 11.0369 11.12 11.0001V3.26673C11.12 2.4199 10.4335 1.7334 9.58671 1.7334C8.73987 1.7334 8.05338 2.4199 8.05338 3.26673V12.8676C8.05338 12.9498 8.01021 13.0259 7.93971 13.0681C7.84781 13.1231 7.73029 13.1085 7.65456 13.0328L5.5491 10.9273C4.90497 10.2832 3.86064 10.2832 3.21651 10.9273C2.6374 11.5064 2.57093 12.4228 3.06041 13.0794L7.41807 18.925L8.56912 20.3697C9.63867 21.9173 11.4273 22.9334 13.4534 22.9334H14.1201C17.7651 22.9334 20.7201 19.9785 20.7201 16.3334L20.7201 11.2667C20.7201 10.4199 20.0336 9.7334 19.1867 9.7334C18.3399 9.7334 17.6534 10.4199 17.6534 11.2667V11.6667C17.6534 11.7036 17.6235 11.7334 17.5867 11.7334C17.5499 11.7334 17.5201 11.7036 17.5201 11.6667V11.2667L17.5249 10.9117Z"
        fill="currentColor"
      />
    </g>
  </svg>
);
const ForwardRef = forwardRef(IconClickFill);
export default ForwardRef;
