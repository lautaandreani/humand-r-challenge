import { Status } from "../../interfaces/character"

const STATUS_COLOR = {
    [Status.Alive]: 'bg-green-500',
    [Status.Dead]: 'bg-red-500',
    [Status.Unknown]: 'bg-gray-500'
}

type StatusPillProps = {
    status: Status
}

const StatusPill = ({ status }: StatusPillProps ) => {
    const color = STATUS_COLOR[status]

  return (
    <span className={`rounded-full border h-fit p-1 text-white ${color}`}>{status}</span>
  )
}

export default StatusPill