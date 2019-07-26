export function getStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || '')
}

export function setStorage(key: string, value: string) {
  return localStorage.setItem(key, JSON.stringify(value))
}

export function removeStorage(key: string) {
  return localStorage.removeItem(key)
}

export function removeAll() {
  return localStorage.clear()
}
