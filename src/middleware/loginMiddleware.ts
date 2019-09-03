import * as jwt from 'jsonwebtoken';

// var jwt = require('jsonwebtoken');
// var key = 'jhasgdhjagsdhagsdhags';

const SECRET = process.env.SECRET;

export class Verifier {
  verify = (req: any, res: any, next: any) => {
    let token = req.headers['authorization'];

    if (!token) {
      console.log('Unauthorized');

      return res.status(401).send({ message: 'Unauthorized' });
    }

    try {
      let decoded = jwt.verify(token, SECRET);
      console.log(decoded);
      req.headers['loggedInUser'] = decoded._id;
      next();
    } catch (e) {
      console.log(e);

      return res.status(401).send({ message: 'Unauthorized' });
    }
  };
}
