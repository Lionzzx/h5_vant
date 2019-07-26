export const isMobile = (mobile: string) => {
  let reg = /^[1][0-9]{10}$/
  return reg.test(mobile)
}
