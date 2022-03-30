import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const NoticiasContext = createContext()

const NoticiasProvider = ({ children }) => {
  const [categoria, setCategoria] = useState("general")
  const [noticias, setNoticias] = useState([])
  const [pagina, setPagina] = useState(1)
  const [totalNoticias, setTotalNoticias] = useState(0)

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&pageSize=10&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios.get(url)
      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
      setPagina(1)
    }
    consultarAPI()
  }, [categoria])

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&pageSize=10&page=${pagina}&apiKey=${import.meta.env.VITE_API_KEY}`
      const { data } = await axios.get(url)
      setNoticias(data.articles)
      setTotalNoticias(data.totalResults)
      console.log(import.meta.env.VITE_API_KEY)
    }
    consultarAPI()
  }, [pagina])

  const handleChangeCategoria = e => {
    setCategoria(e.target.value)
  }

  const handleChangePagina = (e, value) => {
    setPagina(value)
  }

  return (
    <NoticiasContext.Provider 
      value={{
        categoria,
        handleChangeCategoria,
        noticias,
        totalNoticias,
        handleChangePagina,
        pagina
      }}
    >
      {children}
    </NoticiasContext.Provider>
  )
}

export { 
  NoticiasProvider
}

export default NoticiasContext