const IconSearchPlus = ({
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
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="ddfc91k0ha" d="M0 0h24v24H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 .223h12v12H0z" />
        <g transform="translate(0 .223)">
          <mask id="1bgysvb8ib" fill="#fff">
            <use xlinkHref="#ddfc91k0ha" />
          </mask>
          <path d="M13.2 11.4V6.15a.9.9 0 0 0-1.8 0v5.25H6.15a.9.9 0 1 0 0 1.8h5.25v5.25a.9.9 0 1 0 1.8 0V13.2h5.25a.9.9 0 0 0 0-1.8H13.2z" fill="#BCC2D6" mask="url(#1bgysvb8ib)" />
        </g>
      </g>
    </svg>
  );
};
export default IconSearchPlus;
