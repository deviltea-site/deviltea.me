export type BreakpointSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type _Breakpoint = `${BreakpointSize}${'Only' | 'AndDown' | 'AndUp'}`
export type Breakpoint = Exclude<_Breakpoint, 'xsAndDown' | 'xsAndUp' | 'xlAndDown' | 'xlAndUp'>

export const breakpointsSize: Partial<Record<BreakpointSize, number>> = {
  sm: 600,
  md: 960,
  lg: 1264,
  xl: 1904
}

type BreakpointValue = { min?: string; max?: string; }
export const breakpointsForWindi: Partial<Record<Breakpoint, BreakpointValue>> =
  Object.fromEntries(['xs', 'sm', 'md', 'lg', 'xl']
    .flatMap((key, i, arr) => {
      const nextKey = arr[i + 1]
      const entries: [Breakpoint, BreakpointValue][] = []
      if (key === 'xs') {
        entries.push([(`${key}Only` as Breakpoint), {
          max: `${breakpointsSize[nextKey as BreakpointSize]! - 1}px`
        }])
      } else if (key === 'xl') {
        entries.push([(`${key}Only` as Breakpoint), {
          min: `${breakpointsSize[key as BreakpointSize]!}px`
        }])
      } else {
        entries.push([(`${key}AndUp` as Breakpoint), {
          min: `${breakpointsSize[key as BreakpointSize]!}px`
        }])
        entries.push([(`${key}Only` as Breakpoint), {
          min: `${breakpointsSize[key as BreakpointSize]!}px`,
          max: `${breakpointsSize[nextKey as BreakpointSize]! - 1}px`
        }])
        entries.push([(`${key}AndDown` as Breakpoint), {
          max: `${breakpointsSize[nextKey as BreakpointSize]! - 1}px`
        }])
      }

      return entries
    })
  )
