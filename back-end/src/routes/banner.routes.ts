import { Router } from 'express';
import { getRepository } from 'typeorm';
import uploadConfig from '../config/upload';
import multer from 'multer';
import Banner from '../models/Banner';
import CreateBannerService from '../services/CreateBannerService';

const bannersRouter = Router();
const upload = multer(uploadConfig);

bannersRouter.get('/', async (request, response) => {
  const bannerRepository = getRepository(Banner);

  const banners = await bannerRepository.find();

  return response.json(banners);
});

bannersRouter.post('/', upload.single('banner'), async (request, response) => {
  try {
    const createBanner = new CreateBannerService();
    const images = request.file?.filename;
    const banner = await createBanner.execute({
      images: images
    });
    return response.json(banner);
  } catch (err) {
    console.log(err);
  }
});

export default bannersRouter;
