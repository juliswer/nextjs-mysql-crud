export default function handler(req, res) {

    switch (req.method) {
        case 'GET':
            console.log('getting products');
            return res.send('getting products');
            break;
        case 'POST':
            console.log('adding product');
            return res.send('adding product');
            break;
        case 'PUT':
            console.log('updating product');
            return res.send('updating product');
            break;
        case 'DELETE':
            console.log('deleting product');
            return res.send('deleting product');
            break;
        default:
            res.statusCode = 405;
            return res.send('Method Not Allowed');
            console.log('method invalid')
    }
}