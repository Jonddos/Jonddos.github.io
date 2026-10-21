export type ClassValue = string | false | null | undefined

/** Une clases condicionales; los componentes no mezclan utilidades en conflicto. */
export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(' ')
}
