interface Config {
	breakingBadUrl: string
}

const useEnvironment = (): Config => {
  const config: Config = {
    breakingBadUrl: import.meta.env.VITE_BREAKING_BAD_URL,
  }
  
  return config
}
export default useEnvironment