export type FishingPackageDTO = {
  id: string;
  title: string;
  price: number;
  max_persions?: number;
  start_date?: Date | null;
};

export type FishingPackagesDTO = {
  code: string;
  data: FishingPackageDTO[];
};
