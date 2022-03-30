import { Grid, Typography, Pagination, Stack } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"

const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

  const totalPaginas = Math.ceil(totalNoticias / 10)

  return (
    <>
      <Typography textAlign='center' marginY={5} component="h2" variant='h3' >Últimas Noticias</Typography>

      <Grid container spacing={2}>
        {noticias.map(noticia => (
          <Noticia key={noticia.url} noticia={noticia} />
        ))}
      </Grid>

      <Stack spacing={2} direction='row' justifyContent='center' alignItems='center' sx={{
        marginTop: '3rem'
      }} >
        <Pagination count={totalPaginas} variant="outlined" shape="rounded" onChange={handleChangePagina} page={pagina} />
      </Stack>
    </>
  )
}

export default ListadoNoticias