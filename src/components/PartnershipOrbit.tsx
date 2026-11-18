import type { CSSProperties } from 'react'
import type { IconName } from '../home-data'
import { Icon } from './Icon'

type OrbitNode = { label: string; icon: IconName; angle: number }

const outer: OrbitNode[] = [
  { label: 'Idea', icon: 'spark', angle: -90 },
  { label: 'Build', icon: 'code', angle: 0 },
  { label: 'Launch', icon: 'rocket', angle: 90 },
  { label: 'Grow', icon: 'layers', angle: 180 },
]

const inner: OrbitNode[] = [
  { label: 'Apps', icon: 'mobile', angle: -30 },
  { label: 'AI', icon: 'cpu', angle: 90 },
  { label: 'Web', icon: 'globe', angle: 210 },
]

function Ring({
  nodes,
  radius,
  duration,
  reverse = false,
  size,
}: {
  nodes: OrbitNode[]
  radius: string
  duration: string
  reverse?: boolean
  size: 'lg' | 'sm'
}) {
  return (
    <div
      className={`orbit-ring ${reverse ? 'orbit-ring-reverse' : ''}`}
      style={{ '--orbit-r': radius, '--orbit-duration': duration } as CSSProperties}
    >
      {nodes.map((node) => (
        <div
          key={node.label}
          className="orbit-slot"
          style={{ '--angle': `${node.angle}deg` } as CSSProperties}
        >
          <div className="orbit-counter">
            <div className={`orbit-node ${size === 'lg' ? 'orbit-node-lg' : 'orbit-node-sm'}`}>
              <Icon name={node.icon} className={size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
              <span>{node.label}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function PartnershipOrbit() {
  return (
    <div className="orbit-stage relative mx-auto aspect-square w-full max-w-[30rem]" aria-hidden>
      <div className="orbit-track orbit-track-outer" />
      <div className="orbit-track orbit-track-inner" />
      <div className="orbit-sweep" />

      <Ring nodes={outer} radius="calc(50cqw - 2.6rem)" duration="48s" size="lg" />
      <Ring nodes={inner} radius="30cqw" duration="32s" reverse size="sm" />

      <div className="orbit-core">
        <div className="orbit-core-pulse" />
        <div className="orbit-core-pulse orbit-core-pulse-delay" />
        <div className="orbit-core-inner">
          <span className="flex h-[44%] w-[44%] items-center justify-center overflow-hidden rounded-2xl bg-white shadow-lg">
            <img src="/Dotsel.png" alt="" className="h-full w-full scale-[1.85] object-contain" />
          </span>
          <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.25em] text-lime">Partner</span>
        </div>
      </div>
    </div>
  )
}
