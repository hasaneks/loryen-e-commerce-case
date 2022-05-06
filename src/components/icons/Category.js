import * as React from 'react'

const SvgCategory = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16.913 15.61"
    {...props}
  >
    <defs>
      <clipPath id="category_svg__a">
        <path className="category_svg__a" d="M0 0h16.913v15.61H0z" />
      </clipPath>
      <style>{'.category_svg__a{fill:#044dc3}'}</style>
    </defs>
    <g
      style={{
        clipPath: 'url(#category_svg__a)'
      }}
    >
      <path
        className="category_svg__a"
        d="M15.612 6.505H5.2a1.3 1.3 0 0 0 0 2.6h10.41a1.3 1.3 0 0 0 1.3-1.3 1.3 1.3 0 0 0-1.3-1.3M5.2 2.6h10.41a1.3 1.3 0 0 0 1.3-1.3 1.3 1.3 0 0 0-1.3-1.3H5.2a1.3 1.3 0 1 0 0 2.6M15.612 13.01H5.2a1.3 1.3 0 1 0 0 2.6h10.41a1.3 1.3 0 0 0 1.3-1.3 1.3 1.3 0 0 0-1.3-1.3M1.3 0a1.3 1.3 0 1 0 1.3 1.3A1.3 1.3 0 0 0 1.3 0M1.3 6.505A1.3 1.3 0 1 0 2.6 7.8a1.3 1.3 0 0 0-1.3-1.3M1.3 13.01a1.3 1.3 0 1 0 1.3 1.3 1.3 1.3 0 0 0-1.3-1.3"
      />
    </g>
  </svg>
)

export default SvgCategory
