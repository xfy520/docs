export default (info: string): boolean | null => {
  if (/:v-pre\b/.test(info)) {
    return true
  }

  if (/:no-v-pre\b/.test(info)) {
    return false
  }
  return null
}
