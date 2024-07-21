### Endpoint para trae los POST

Solitud GET

URL
`https://dummyapi.io/data/v1/post`

Algunos Objetos

```
[
    {
            "id": "6698e84bc6339551ae625c77",
            "image": "",
            "likes": 97531,
            "tags": [
                "tags1",
                "tags2",
                "tags3"
            ],
            "text": "Georgia",
            "publishDate": "2024-07-18T10:02:51.123Z",
            "updatedDate": "2024-07-18T10:02:52.040Z",
            "owner": {
                "id": "6698e848c633956a49625c57",
                "firstName": "Jany_Fay80",
                "lastName": "Tom79"
            }
        },
        {
            "id": "6696506482c5684c5c7b3135",
            "image": "",
            "likes": 97531,
            "tags": [
                "tags1",
                "tags2",
                "tags3"
            ],
            "text": "Jordan",
            "publishDate": "2024-07-16T10:50:12.778Z",
            "updatedDate": "2024-07-16T10:50:13.736Z",
            "owner": {
                "id": "6696506282c56826a97b311a",
                "firstName": "Yvette_Hessel39",
                "lastName": "Mozelle52"
            }
        },
]
```

### Trae POST individual

Solitud GET

URL
`https://dummyapi.io/data/v1/post/:id`

Ejemplo: https://dummyapi.io/data/v1/post/6696506482c5684c5c7b3135

Objeto que trae

```
{
    "id": "6696506482c5684c5c7b3135",
    "image": "",
    "likes": 97531,
    "link": "",
    "tags": [
        "tags1",
        "tags2",
        "tags3"
    ],
    "text": "Jordan",
    "publishDate": "2024-07-16T10:50:12.778Z",
    "updatedDate": "2024-07-16T10:50:13.736Z",
    "owner": {
        "id": "6696506282c56826a97b311a",
        "firstName": "Yvette_Hessel39",
        "lastName": "Mozelle52"
    }
}
```

### Traer los comentarios de los POST

Solitud GET

URL
`https://dummyapi.io/data/v1/post/:id/comment`

Ejemplo: https://dummyapi.io/data/v1/post/60d21af267d0d8992e610b8d/comment

Objeto que trae

```
{
    "data": [
        {
            "id": "60d2252067d0d8992e611a79",
            "message": "Nice pic",
            "owner": {
                "id": "60d0fe4f5311236168a109df",
                "title": "mrs",
                "firstName": "Anaelle",
                "lastName": "Dumas",
                "picture": "https://randomuser.me/api/portraits/med/women/25.jpg"
            },
            "post": "60d21af267d0d8992e610b8d",
            "publishDate": "2019-12-29T23:48:20.035Z"
        },
        {
            "id": "60d222c867d0d8992e6116e7",
            "message": "Handsome pic!!!",
            "owner": {
                "id": "60d0fe4f5311236168a10a12",
                "title": "mr",
                "firstName": "Kenneth",
                "lastName": "Carter",
                "picture": "https://randomuser.me/api/portraits/med/men/40.jpg"
            },
            "post": "60d21af267d0d8992e610b8d",
            "publishDate": "2019-11-18T05:47:38.319Z"
        }
    ],
    "total": 2,
    "page": 0,
    "limit": 20
}
```

### Traer los TAGS

Solitud GET

URL
`https://dummyapi.io/data/v1/tag`

Ejemplo: https://dummyapi.io/data/v1/tag

Objeto que trae

```
{
    "data": [
         "QA junior",
        "QA probe",
        "QA test",
        "QA test Api",
        "QA test end",
        "QA training",
        "QA!",
        "QA, 1,2,3,' ', ",
        "QA, TEST",
        "QA,lol",
    ]
}
```

POST con imagenes y comentarios + TAGS
60d21bf567d0d8992e610e8e
60d21b2167d0d8992e610c18
60d21b4767d0d8992e610c89
60d21b7c67d0d8992e610d22
Ejemplo que devuelve

```
{
    "id": "60d21b7c67d0d8992e610d22",
    "image": "https://img.dummyapi.io/photo-1574682847751-9c282caecb54.jpg",
    "likes": 10,
    "link": null,
    "tags": [
        "human",
        "water",
        "waterfront"
    ],
    "text": "dog in a dock by a lake",
    "publishDate": "2019-11-14T15:42:12.512Z",
    "owner": {
        "id": "60d0fe4f5311236168a109fa",
        "title": "ms",
        "firstName": "Ann1234",
        "lastName": "Mason",
        "picture": "https://randomuser.me/api/portraits/med/women/18.jpg",
        "location": {
            "street": "258, Paddock Way"
        }
    }
}
```
