export type AddressString = `0x${string}`

export type AnyFunction = (...args: any[]) => any

type AnyObject<T = any> = Record<string, T>
export type Modify<T, R extends PartialAny<T>> = Omit<T, keyof R> & R

type ThemeMode = 'light' | 'dark'
