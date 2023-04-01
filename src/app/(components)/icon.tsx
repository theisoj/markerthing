export default function Icon({ size }: { size?: number }) {
  return (
    <svg width={size ?? "100%"} height={size ?? "100%"} viewBox="0 0 600 600">
      <g transform="matrix(1,0,0,1,-50,20.0005)">
        <path
          d="M411.6,50.398L233.8,298.198L388.15,387.975L518,111.995L411.6,50.398ZM417.022,128.8C422.081,128.445 427.334,129.538 432.073,132.3C444.714,139.663 448.995,155.945 441.698,168.698L382.374,272.298C375.077,285.052 358.964,289.462 346.323,282.099C333.682,274.732 329.401,258.451 336.698,245.697L396.022,142.097C400.584,134.124 408.592,129.39 417.022,128.796L417.022,128.8ZM226.102,319.73L221.899,402.152L301.7,448.703L372.227,404.777L226.102,319.73ZM227.852,431.55L182,509.601L238,509.601L272.648,457.624L227.852,431.55Z"
          fill="white"
        />
      </g>
    </svg>
  );
}
