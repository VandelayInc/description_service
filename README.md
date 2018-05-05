# Description Service

Listing Description

![alt text](https://i.imgur.com/lfj8OpMl.png)

### Related Projects

- [Proxy Server](https://github.com/The-Untouchables/proxy-server-rafa)
- [Photo Carousel](https://github.com/The-Untouchables/photo-carousel-service)
- [Gallery](https://github.com/The-Untouchables/) - update
- [Neighborhood](https://github.com/The-Untouchables/neighborhood-map-service)
- [Booking](https://github.com/The-Untouchables/bookings-widget-service)
- [Reviews](https://github.com/The-Untouchables/reviews-service)
- [Similar Listings](https://github.com/The-Untouchables/similar-listings-service)

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
