import { SVGProps } from "react";

interface BaseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const BaseIcon = ({
  children,
  size = 100,
  width,
  height,
  viewBox = "0 0 48 48",
  className = "",
  ...props
}: BaseIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width || size}
      height={height || size}
      viewBox={viewBox}
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
};

export default BaseIcon;
