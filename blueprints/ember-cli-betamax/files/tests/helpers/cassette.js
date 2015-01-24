export default function(server) {
server.respondWith( 'GET',
'/api/foo', [ 200, {}, "{}" ]);
}
