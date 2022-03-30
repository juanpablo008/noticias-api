import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material"

const Noticia = ({noticia}) => {
  
  const { urlToImage, url, title, description, source, publishedAt } = noticia

  const formatDate = date => {
    const newDate = new Date(date)
    
    const options = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }
    
    return newDate.toLocaleString("es-CO", options)
  }

  return (
    <Grid item md={6} lg={4}>
      <Card>
        { urlToImage && (
          <CardMedia 
            component='img'
            alt={`Imagen de ${title}`}
            image={urlToImage}
            height='250'
          />
        )}
        <CardContent>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              <Typography variant='body1' color='error'>
                {source.name}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='body1' color='primary' textAlign='right'>
                {formatDate(publishedAt)}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2'>
            {description}
          </Typography>
        </CardContent>

        <CardActions>
          <Link href={url} target='_blank' variant='button' width='100%' textAlign='center' sx={{
            textDecoration: 'none',
            backgroundColor: 'black',
            borderRadius: '5px',
            color: 'white'
          }} >Leer Noticia</Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Noticia