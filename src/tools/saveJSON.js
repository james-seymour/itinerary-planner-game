
const saveJSON = (content, filename) => {
  const fileData = JSON.stringify(content)
  const blob = new Blob([fileData], {type: "text/plain"})
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.download = `${filename}.json`
  link.href = url
  link.click()
}

export default saveJSON