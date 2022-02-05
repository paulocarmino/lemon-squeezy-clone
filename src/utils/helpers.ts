export const setNameInitials = (fullName: string) => {
  if (!fullName) {
    return
  }

  const nameSplitted = fullName.split(' ')
  const firstLetter = nameSplitted[0].charAt(0)
  const lastLetter = nameSplitted[1].charAt(0)

  return firstLetter + lastLetter
}
