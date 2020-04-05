import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async () => {
  try {
    const res = await axios.get(url)

    return res

    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
