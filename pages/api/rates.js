// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      const response = await axios.get(
        'https://frankfurter.app/latest?symbols=MYR&base=SGD'
      );
      const data = response.data;
      res.json(data);

      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
