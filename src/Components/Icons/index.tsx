type Props = React.HTMLAttributes<HTMLOrSVGElement>

export const CloseIcon: React.FC<Props> = (props) => {
  return (
    <svg width={10} height={10} fill="none" {...props}>
      <path
        fill="#000"
        d="M5.62 5 9.871.749a.439.439 0 1 0-.62-.62L5 4.379.75.13a.439.439 0 1 0-.621.62l4.25 4.25L.13 9.252a.438.438 0 1 0 .62.62L5 5.62l4.251 4.252a.436.436 0 0 0 .62 0 .439.439 0 0 0 0-.62L5.621 5Z"
      />
    </svg>
  )
}
