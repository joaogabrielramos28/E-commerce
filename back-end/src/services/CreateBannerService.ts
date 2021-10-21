import { getRepository } from 'typeorm';
import Banner from '../models/Banner';
interface Request {

    images?:string;

}
;

class CreateBannerService {
  public async execute ({ images }:Request): Promise<Banner | null> {
    const bannerRepository = getRepository(Banner);

    const banner = bannerRepository.create({
      images
    });
    await bannerRepository.save(banner);
    return banner;
  }
}

export default CreateBannerService
;
