export type ImageSlots = {
  front?: string | null;
  rear?: string | null;
  interior?: string | null;
};

export type ManualVehicleImageMap = Record<string, ImageSlots>;

const normalize = (value: string) =>
  value.trim().toLowerCase().replace(/\s+/g, "-");

export const buildManualImageKey = (brand: string, slug?: string) => {
  if (slug) {
    return `${normalize(brand)}:${slug}`;
  }
  return normalize(brand);
};

const ferrariKey = (slug: string) => buildManualImageKey("Ferrari", slug);

// Extend this map with additional models or brands if you have static image URLs.
export const manualVehicleImages: ManualVehicleImageMap = {
  [ferrariKey("f430-2006")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/Ferrari_F430_front_20080605.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Ferrari_F430%2C_Heck_%282017-07-31_Sp%29.JPG",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Ferrari_F430_2006_Spider_Cockpit_TICO_13March2010_%2814597504734%29.jpg",
  },
  [ferrariKey("california-2010")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Ferrari_California_%282008%29_front.JPG",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Ferrari_2010_California_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/Ferrari_California_2010_Cockpit_CECF_9April2011_%2814598936524%29.jpg",
  },
  [ferrariKey("458-italia-2012")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/e/ed/Ferrari_458_2011_Italia_LSideFront_CECF_9April2011_%2814414295838%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Ferrari_458_2011_Italia_RSideRear_CECF_9April2011_%2814597624341%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/2011_Ferrari_458_Italia_Interior.jpg",
  },
  [ferrariKey("ff-2013")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/2/27/Ferrari_FF_--_2012_DC_front.JPG",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Ferrari_FF_--_2012_DC_rear.JPG",
    interior:
      "https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_large/v1/editorial/ferrari-ff-2015-rhys-vanderside-(12).jpg",
  },
  [ferrariKey("488-gtb-2016")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/Ferrari_488GTB_%28ABA-F142B%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/7/71/Ferrari_488GTB_%28ABA-F142B%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Ferrari_488_3.9_Pista_Spider_interior.jpg",
  },
  [ferrariKey("gtc4lusso-2018")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Ferrari_GTC4Lusso%2C_Grand_Basel_2018_%28Ank_Kumar%2C_Infosys%29_01.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Ferrari_GTC4Lusso%2C_Grand_Basel_2018_%28Ank_Kumar%2C_Infosys%29_03.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/1/17/2017_Ferrari_GTC4Lusso_Interior_6.3.jpg",
  },
  [ferrariKey("portofino-2019")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Ferrari_Portofino_%28front%29_%281%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Ferrari_Portofino_%28rear%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Ferrari_Portofino_interior.jpg",
  },
  [ferrariKey("f8-tributo-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/7/7d/2020_Ferrari_F8_Tributo_in_yellow%2C_front_right_%28Amagansett%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/2020_Ferrari_F8_Tributo_S-A_3.9_Rear.jpg",
    interior:
      "https://www.megautos.com/wp-content/uploads/2019/02/ferrari-f8-tributo-interior-1024x770.jpg",
  },
  [ferrariKey("roma-2021")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Ferrari_Roma_%287BA-F164BAA%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Ferrari_Roma_%287BA-F164BAA%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/d/d8/Ferrari_Roma_Dual_Cockpit_Design.jpg",
  },
  [ferrariKey("sf90-2022")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/6/68/Ferrari_SF90_Stradale_%28front%29.jpg",
    rear:
      "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/08/ferrari-sf90_stradale-2020-1600-09.jpg",
    interior:
      "https://www.hdcarwallpapers.com/download/ferrari_sf90_stradale_2019_4k_interior-1920x1080.jpg",
  },
};

manualVehicleImages[buildManualImageKey("Ferrari")] = {
  ...manualVehicleImages[ferrariKey("f8-tributo-2020")],
};
