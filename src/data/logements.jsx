// import { useState, useEffect } from 'react'

const urlString = `http://${location.host}`

async function fetching(routeName, opts = {}) {
  return await fetch(`${urlString}/${routeName}`, opts)
}

// function useLogements() {
//   const [logements, setLogements] = useState([])

//   useEffect(() => {
//     async function fetching() {
//       try {
//         const res = await (await fetch(`http://${location.host}/logements.json`)).json()
//         setLogements(await res)
//       } catch (error) {
//         console.log(error.message)
//       }
//     }
//     fetching()
//   }, [])

//   return logements
// }

async function getLogements() {
  try {
    const res = await ((await fetching('logements.json')).json()) // temp. logements.json
    return res
  } catch (error) {
    console.error(error)
    return []
  }
}

async function postLogement(data) {
  try {
    const token = localStorage.getItem('token')

    return await fetching('logements', {
      method: 'post',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })

  } catch (error) {
    console.error(error)
  }
}

async function delLogement(id) {
  try {
    const token = localStorage.getItem('token')

    return fetching(`logements/${id}`, {
      method: 'delete',
      headers: {
        accept: '*/*',
        Authorization: `Bearer ${token}`,
      },
    })
  } catch (error) {
    console.error(error)
  }
}

async function putLogement(id, data) {
  try {
    const token = localStorage.getItem('token')

    return await fetching(`logements/${id}`, {
      method: 'put',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })

  } catch (error) {
    console.error(error)
  }
}

export {
  // useLogements,
  getLogements,
  postLogement,
  delLogement,
  putLogement
}
