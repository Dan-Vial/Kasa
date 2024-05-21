
async function getLogements() {
  return (await fetch(`http://${location.host}/logements.json`)).json()
}

async function getLogementsById(id) {
  return (await getLogements())[id]
}

export {
  getLogements,
  getLogementsById
}
