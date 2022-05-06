import * as React from 'react'

const SvgBasket = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#basket_svg__a)" fill="currentColor">
      <path d="M22.614 4.116a2.72 2.72 0 0 0-1.935-.806H6.389l-.115-.626A3.266 3.266 0 0 0 3.058 0H1a1 1 0 0 0 0 2h2.058a1.27 1.27 0 0 1 1.249 1.043l.228 1.244v.023a1 1 0 0 0 .081.394L6.59 15.466a3.27 3.27 0 0 0 3.217 2.684h9.478a1 1 0 0 0 0-2H9.807a1.27 1.27 0 0 1-1.25-1.044l-.024-.133h10.949a2.743 2.743 0 0 0 2.679-2.217l1.2-6.193a2.72 2.72 0 0 0-.751-2.447h.004ZM21.4 6.185l-1.2 6.191a.738.738 0 0 1-.718.6H8.165L6.757 5.31h13.92a.737.737 0 0 1 .72.875M10.215 19a1.932 1.932 0 1 0 0 3.864 1.932 1.932 0 0 0 0-3.864ZM18.6 19a1.932 1.932 0 1 0 0 3.865 1.932 1.932 0 0 0 0-3.865" />
    </g>
    <defs>
      <clipPath id="basket_svg__a">
        <path fill="currentColor" d="M0 0h23.41v22.862H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgBasket
