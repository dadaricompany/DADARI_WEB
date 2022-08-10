const IconArrowR = ({
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
        d="M12.181 20.33c.14-.06.268-.145.376-.252l5.791-5.792a1.158 1.158 0 0 0 0-1.638l-5.791-5.791a1.158 1.158 0 1 0-1.637 1.638l4.971 4.973-4.971 4.971a1.158 1.158 0 0 0 1.261 1.89z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </svg>
  );
};
export default IconArrowR;
