const AZKAR_URL = '/api.json'

export const getAzkar = async () => {
  const res = await fetch(AZKAR_URL)
  if (!res.ok) {
    throw new Error('Failed to fetch azkar')
  }
  return res.json()
}
