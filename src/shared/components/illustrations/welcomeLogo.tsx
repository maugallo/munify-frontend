import * as React from "react"
import Svg, { Circle, Ellipse, G, Path, SvgProps } from "react-native-svg"
const WelcomeLogo = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={256}
    height={256}
    {...props}
  >
    <G
      style={{
        stroke: "none",
        strokeWidth: 0,
        strokeDasharray: "none",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        fill: "none",
        fillRule: "nonzero",
        opacity: 1,
      }}
      transform="matrix(2.81 0 0 2.81 1.407 1.407)"
    >
      <Circle
        cx={44.75}
        cy={34.61}
        r={19}
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "#fff",
          fillRule: "nonzero",
          opacity: 1,
        }}
      />
      <Ellipse
        cx={45.005}
        cy={80.782}
        rx={29.625}
        ry={9.222}
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "#a1a1a1",
          fillRule: "nonzero",
          opacity: 1,
        }}
      />
      <Path
        d="M45 0C27.395 0 13.123 14.272 13.123 31.877c0 7.86 2.858 15.043 7.573 20.6L45 81.101l24.304-28.624c4.716-5.558 7.573-12.741 7.573-20.6C76.877 14.272 62.605 0 45 0zm0 43.889c-7.24 0-13.11-5.869-13.11-13.11 0-7.24 5.869-13.11 13.11-13.11s13.11 5.869 13.11 13.11-5.87 13.11-13.11 13.11z"
        style={{
          stroke: "none",
          strokeWidth: 1,
          strokeDasharray: "none",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          fill: "#3e82f7",
          fillRule: "nonzero",
          opacity: 1,
        }}
      />
    </G>
  </Svg>
)
export default WelcomeLogo
