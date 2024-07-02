import { AnyFunction } from "@/interfaces"

export const debounce = <Callback extends AnyFunction>(cb: Callback, wait: number, immediate?: boolean) => {
    let timeout: NodeJS.Timeout | null
  
    function debounced(this: any, ...args: Parameters<Callback>): void {
      const context = this
      const later = () => {
        timeout = null
        if (!immediate) cb.apply(context, args)
      }
      const callNow = immediate && !timeout
      timeout && clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) cb.apply(context, args)
    }
  
    debounced.cancel = () => {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
    }
  
    return debounced
  }
  