// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios');
const moment = require('moment-timezone');
moment.tz.setDefault('Asia/Singapore');

const handler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      const response = await axios.get(
        'http://datamall2.mytransport.sg/ltaodataservice/Traffic-Imagesv2',
        {
          headers: {
            AccountKey: process.env.ACCOUNT_KEY,
          },
        }
      );
      const images = response.data.value;
      let resultImages = []; // result to return to user.
      images.forEach((trafficImage) => {
        let imageData = {
          cameraID: '',
          name: '',
          dateTime: '',
          imageUrl: '',
        };
        imageData.cameraID = trafficImage.CameraID;
        imageData.imageUrl = trafficImage.ImageLink;
        imageData.dateTime = moment().format('hh:mma DD MMM YYYY');

        switch (trafficImage.CameraID) {
          case '2701':
            imageData.name = 'Woodlands Causeway(Twd Johor)';
            resultImages.push(imageData);
            break;
          case '2702':
            imageData.name = 'Woodlands CheckPoint(Twd BKE)';
            resultImages.push(imageData);
            break;
          case '2704':
            imageData.name = 'Woodlands Flyover(Twd Checkpoint)';
            resultImages.push(imageData);
            break;
          case '2705':
            imageData.name = 'Woodlands Causeway(Twd PIE)';
            resultImages.push(imageData);
            break;
          case '4703':
            imageData.name = 'Second Link @ Tuas';
            resultImages.push(imageData);
            break;
          case '4712':
            imageData.name = 'Tuas CheckPoint';
            resultImages.push(imageData);
            break;
          case '4713':
            imageData.name = 'Aft Tuas West Road';
            resultImages.push(imageData);
            break;
        }
      });

      res.json(resultImages);

      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
