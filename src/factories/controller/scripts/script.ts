import { TvController } from "../../../controller/commands/tv-controller";

export const makeTvController = () => {
  const tvController = new TvController();
  return tvController;
};
