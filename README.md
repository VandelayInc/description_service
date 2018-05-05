# Description Service

Listing Description

![alt text](https://i.imgur.com/Tia5ffal.png)

### Related Projects

- [Proxy Server](https://github.com/VandelayInc/jornelas_proxy)
- [Neighborhood](https://github.com/VandelayInc/neighborhood-map-service)
- [Booking](https://github.com/VandelayInc/whitney-booking)
- [Reviews](https://github.com/VandelayInc/reviews-service)


### Usage

The HTML page is found at `/rooms/:roomid/description`

The API endpoint is `/api/rooms/:roomid/description`

The Server side rendered page is found at `/rooms/:roomid/description/ssr`

The HTML of the component server side rendered is found at `/api/rooms/:roomid/description/ssr`. This 
is used in the proxy server

### Installation

Make sure MongoDB is started. From within the root directory:

```sh
$ yarn install
$ yarn seed-database
$ yarn build
$ yarn start
```
