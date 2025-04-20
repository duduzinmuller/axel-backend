import { TvController } from "../../../controller/tv/tv-controller";

export const makeTvController = () => {
  const tvController = new TvController();
  return tvController;
};
