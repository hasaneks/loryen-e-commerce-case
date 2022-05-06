import * as React from 'react'

const SvgSearch = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 19 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#search_svg__a)">
      <path
        d="m17.788 18.01-3.61-3.99a8.334 8.334 0 1 0-1.563 1.254l3.691 4.078a1 1 0 1 0 1.482-1.342Zm-9.525-3.484a6.263 6.263 0 1 1 6.263-6.263 6.27 6.27 0 0 1-6.263 6.263"
        fill="#555"
      />
    </g>
    <defs>
      <clipPath id="search_svg__a">
        <path fill="currentColor" d="M0 0h18.047v19.681H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgSearch
