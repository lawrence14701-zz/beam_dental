import axios from "axios"

const url = "https://beamtech.github.io/boxing-kata-js/perks.json"

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url)
    let modifiedData = data.map((obj) => ({ ...obj, starter: false, refill: false }))
    return modifiedData
  } catch (error) {
    window.alert("Error:  Could not receive family preferences")
  }
}
