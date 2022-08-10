const IconArrowL = ({
  iWidth,
  iHeight,
}: {
  iWidth: string | number | undefined;
  iHeight: string | number | undefined;
}) => {
  return (
    <svg
      width={iWidth}
      height={iHeight}
      viewBox={`0 0 ${iWidth} ${iHeight}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m17 9-7 7 7 7"
        stroke="#FFF"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default IconArrowL;
