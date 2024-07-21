## Screen

### Rutas proteguidas

1. `/post/:id`

### Ruta Publicas

1. `/`

Este proyecto cumple con los requisitos que son los siguientes:

1. Post con imagen principal, tag y usuario quien lo publica
   ![alt text](image.png)

2. Al dar click aparece los comentarios(URL):
   ![alt text](image-1.png)

3. Sobre los POST aparece los tag y mas arriba estan los tag que se aplica un filtro cuando se selecciona
   ![alt text](image-2.png)
   ![alt text](image-3.png)

4. Vista protegida por Google SingIn.
` Si se ignoramos el modal y apretamos el post, no nos redirigue a ninguna lugar ya que esta protegida. El modal es solo de aviso`
![alt text](image-4.png)


### Problemas que me encontre durante el proyecto

La api de `https://dummyapi.io/data/v1/` no funciona el login. Si el login funcionase me tendria que dar un "app-id" para uso personal.
Solucion: Tuve que agarrar la "app-id" que usan ellos en su web.
![alt text](image-5.png)

GitHub Pages no me permite hacer deploy, asi que tuve que armar una imagen con docker y subirlo en mi servidor ubuntu con nginx. La web es el siguiente link:
`https://argcoupon.xyz/` 