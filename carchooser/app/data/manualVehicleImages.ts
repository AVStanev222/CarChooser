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
const audiKey = (slug: string) => buildManualImageKey("Audi", slug);
const hyundaiKey = (slug: string) => buildManualImageKey("Hyundai", slug);
const kiaKey = (slug: string) => buildManualImageKey("Kia", slug);
const bmwKey = (slug: string) => buildManualImageKey("BMW", slug);
const bentleyKey = (slug: string) => buildManualImageKey("Bentley", slug);
const mercedesKey = (slug: string) => buildManualImageKey("Mercedes-Benz", slug);
const koenigseggKey = (slug: string) => buildManualImageKey("Koenigsegg", slug);
const mitsubishiKey = (slug: string) => buildManualImageKey("Mitsubishi", slug);
const opelKey = (slug: string) => buildManualImageKey("Opel", slug);
const renaultKey = (slug: string) => buildManualImageKey("Renault", slug);
const subaruKey = (slug: string) => buildManualImageKey("Subaru", slug);
const teslaKey = (slug: string) => buildManualImageKey("Tesla", slug);


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
  [audiKey("a3-2005")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/02/Audi_A3_2T_IAA_2005.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Rear_View_of_an_Audi_A3.JPG",
    interior: "https://upload.wikimedia.org/wikipedia/commons/7/76/2019_Audi_A3_Sportback_Interior.jpg",
  },
  [audiKey("a3-2010")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/44/Audi_A3_8P_III._Facelift_front_20100710.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Audi_A3_II_Sportback_Facelift_rear_20100515.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/7/76/2019_Audi_A3_Sportback_Interior.jpg",
  },
  [audiKey("a3-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/d/db/2018_Audi_A3_Sport_TDi_Saloon_1.5_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/16/2018_Audi_A3_Sport_TDi_Saloon_1.5_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Audi_A3_Sportback_1.4TFSI_sport_%28DBA-8VCXS%29_interior.jpg",
  },
  [audiKey("a4-2004")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Audi_A4_B6_%282000–2004%29_front_MJ.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Audi_A4_B6_%282000–2004%29_rear_MJ.JPG",
    interior: "https://upload.wikimedia.org/wikipedia/commons/d/de/Audi_A4_Avant_1.4TFSI_%28ABA-8WCVN%29_interior.jpg",
  },
  [audiKey("a4-2012")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/2/28/Front_Headlight_-_2012_Audi_A4_Quattro_%287590856140%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/12/Rear_-_2012_Audi_A4_Quattro_%287590854928%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/7/7e/2012_Audi_A4_B8_interior.jpg",
  },
  [audiKey("a4-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/b/b1/2020_Audi_A4_%28Michigan_Manufacturer_plate%29%2C_front_9.3.19.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/6/64/2020_Audi_A4_%28Michigan_Manufacturer_plate%29%2C_rear_9.3.19.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/85/2019_Audi_A4_S_Line_40_TDi_Quattro_S-Tronic_facelift_2.0_Interior.jpg",
  },
  [audiKey("a5-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/ff/2009_black_Audi_A5_front.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/6/61/Audi_A5_rear_20080129.JPG",
    interior: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Geneva_Motor_Show_2011_-_Audi_A5_Interior_%285546945997%29.jpg",
  },
  [audiKey("a5-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Audi_A5_Sportback_45_TFSI_quattro_sport_%28DBA-F5CYRL%29_front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Alpil_Audi_A5_concept_rear_-_Tokyo_Auto_Salon_2011.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Audi_A5_Sportback_2.0_TFSI_quattro_interior.jpg",
  },
  [audiKey("a6-2006")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Audi_A6_2004-2006_19feb2007.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Audi_A6_2.6_%2853240590220%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/7/73/2019_Audi_A6_Avant_TDi_40_Interior.jpg",
  },
  [audiKey("a6-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Audi_A6_front_%2823856957303%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/f7/2014_Audi_A6_Allroad_TDi_Quattro_Automatic_3.0_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Audi_A6_C7_Black_Perforated_Valcona_Walnut_Layered_Wood_%283%29.jpg",
  },
  [audiKey("a6-2022")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/8/84/2022_Audi_A6_Allroad_Quattro_3.0_TFSI_Prestige_in_Mythos_Black_Metallic%2C_Front_Left%2C_07-03-2023.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/8/8a/2022_Audi_A6_Allroad_Quattro_3.0_TFSI_Prestige_in_Mythos_Black_Metallic%2C_Rear_Left%2C_07-03-2023.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Audi_A6_C7_Black_Perforated_Valcona_Walnut_Layered_Wood_%2810%29.jpg",
  },
  [audiKey("a7-2011")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Audi_A7_Sportback_front_Poznan_2011.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/c/ca/2019_Audi_A7_3.0_quattro_Premium_Plus_in_Brilliant_Black%2C_rear_left.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/2/29/Audi_A7_Interior_%2825976355%29.jpeg",
  },
  [audiKey("a7-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/7/73/2018_Audi_A7_S_Line_50_TDi_Quattro_3.0_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/d3/2018_Audi_A7_S_Line_50_TDi_Quattro_3.0_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/2/29/Audi_A7_Interior_%2825976355%29.jpeg",
  },
  [audiKey("a8-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/5/5f/2008-08-31_Bonn_Villa_Hammerschmidt_BP_Audi_A8_Front.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/6/68/2008-08-31_Bonn_Villa_Hammerschmidt_Audi_A8_BP_Heckansicht.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Audi_A8_L_D5_Black_Valcona_Interior_with_Piano_Black_Inlay_%2835%29.jpg",
  },
  [audiKey("a8-2017")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Audi_A8_55_TFSI_Quattro_%282018%29_%2853327039880%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Audi_A8_2_%2832655987866%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/40/Audi_A8_L_55_TFSI_quattro_2018.jpg",
  },
  [audiKey("q2-2017")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/e3/2017_Audi_Q2_Sport_TDi_1.6_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/dd/2017_Audi_Q2_Sport_TDi_1.6_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/1/18/Audi_Q2_1.0TFSI_Sport_%28ABA-GACHZ%29_interior.jpg",
  },
  [audiKey("q3-2013")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/7/73/Audi_Q3_FJ_IAA_2025_DSC_2505.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Audi_Q3_Sportback_35_TDI_%282021%29_%2852856834616%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Audi_RS_Q3_Cockpit_Interieur_Innenraum.JPG",
  },
  [audiKey("q3-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Audi_Q3_Sportback_40_TFSI_S-Line%2C_2020_front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Audi_Q3%2C_Rear_Right%2C_02-19-2021.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/9/92/2019_Audi_Q3_Sportback_Interior.jpg",
  },
  [audiKey("q5-2009")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Audi_Q5_front_20090404.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Audi_Q5_rear_%283279954605%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/9/94/2009_Audi_Q5_SE_TDi_Quattro_-_Flickr_-_The_Car_Spy_%2825%29.jpg",
  },
  [audiKey("q5-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/9f/2018_Audi_Q5_S_Line_TDi_Quattro_S-A_2.0_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/1c/2018_Audi_Q5_S_Line_Tdi_Quattro_S-A_2.0_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/d/d7/2018_Audi_Q5_TDi_Quattro_Interior.jpg",
  },
  [audiKey("q7-2007")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Audi_Q7_front_20071212.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/2/25/Audi_q7_rear_presentation.JPG",
    interior: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Audi_Q7_interior.png",
  },
  [audiKey("q7-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/4d/2020_Audi_Q7_%28facelift%29%2C_front_10.15.20.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/3/38/2020_Audi_Q7_%28facelift%29%2C_rear_10.15.20.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/f/f0/2019_Audi_Q7_facelift_Interior.jpg",
  },
  [audiKey("q8-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/f7/2019_Audi_Q8_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/6/63/2019_Audi_Q8_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/58/2019_Audi_Q8_TDi_Quattro_50_Interior.jpg",
  },
  [audiKey("r8-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/a8/2015_Audi_R8_4.2_front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/4/48/Audi_R8_Spyder_rear_%2821012235636%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/46/2015_Audi_R8_V10_interior_%2816319213591%29.jpg",
  },
  [audiKey("rs3-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Audi_RS3_8Y_Sedan_IMG_6030.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/78/Audi_RS3_8Y_Sedan_1X7A7298.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/4e/2019_Audi_RS3_Sportback_Interior.jpg",
  },
  [audiKey("rs6-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/8/8f/2015_Audi_RS6_Avant_TFSi_Quattro_Automatic_4.0_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/3/30/2015_Audi_RS6_Avant_TFSi_Quattro_Automatic_4.0_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/c/c3/2023_Audi_RS6_Avant_in_Nardo_Grey_%28Interior%29.jpg",
  },
  [audiKey("s3-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/7/7d/2015_Audi_S3_Quattro_S-A_2.0_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/c/cd/2015_Audi_S3_Quattro_S-A_2.0_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/52/Audi_S3_Sportback_%28ABA-8VCJXF%29_interior.jpg",
  },
  [audiKey("s4-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/5/5e/2018_Audi_S4_3.0T_Premium_Plus_in_Daytona_Gray_Pearl%2C_front_right.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/e/eb/2018_Audi_S4_3.0T_Premium_Plus_in_Daytona_Gray_Pearl%2C_rear_left.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/0/0b/2012_Audi_S4_Avant_interior.jpg",
  },
  [audiKey("tt-2004")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Audi_TT_RS_-_Front_view.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/0/03/Abt_Audi_TT_Heckansicht.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/7/71/Audi_TT_Coup%C3%A9_1.8_TFSI_%288S%29_interior.jpg",
  },
  [audiKey("tt-2016")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/f2/2016_Audi_TT_Sport_TFSI_Quattro_-_1984cc_2.0_%28230PS%29_Petrol_-_Misano_Red_-_07-2024%2C_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Audi_TT-S_8J_Roadster_rear_China_2016-04-14.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/7/71/Audi_TT_Coup%C3%A9_1.8_TFSI_%288S%29_interior.jpg",
  },

  [hyundaiKey("accent-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/7/7d/2008_Hyundai_Accent_GS_Hatchback_in_Dark_Sapphire_Blue_Metallic%2C_Front_Left%2C_11-01-2022.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Hyundai_Accent_Coupe_GLS_2008_%28rear%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/3/35/Hyundai_Accent_SRX_%282573554177%29.jpg",
  },
  [hyundaiKey("accent-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/9d/2019_Hyundai_Accent_1.6L%2C_front_10.8.19.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/9/9b/2019_Hyundai_Accent_1.6L%2C_rear_10.8.19.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/56/Hyundai_Accent_SR_Interior_%284433419473%29.jpg",
  },
  [hyundaiKey("creta-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/3/3a/2018_HYUNDAI_Creta_facelift_1.6_Brunei_%28Front_seats%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/0/02/2018_HYUNDAI_Creta_facelift_1.6_Brunei_%28Rear_seats%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/f/fb/2018_HYUNDAI_Creta_facelift_1.6_Brunei_%28Interior%29.jpg",
  },
  [hyundaiKey("elantra-2011")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/5/53/2011_Hyundai_Elantra_Touring_GL_in_Atlantic_Blue%2C_front_left%2C_2024-10-28.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/d0/2011_Hyundai_Elantra_Touring_GL_in_Atlantic_Blue%2C_rear_left%2C_2024-10-28.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Hyundai_Elantra_2015_Car_Interior_with_Dashboard.jpg",
  },
  [hyundaiKey("elantra-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/ec/2018_Hyundai_Elantra_SE%2C_front_left%2C_12-01-2022.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/76/2018_Hyundai_Elantra_GT_GL_in_Polar_White%2C_Rear_Left.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/42/2024_Hyundai_Elantra_N_2.0T_in_Performance_Blue%2C_front_left%2C_06-16-2024.jpg",
  },
  [hyundaiKey("genesis-2012")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Hyundai_Genesis_Coupe_%28front_quarter%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hyundai_Genesis_3.8_%28US%29_%287700700014%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hyundai_Genesis_Interior_%284594377812%29.jpg",
  },
  [hyundaiKey("genesis-coupe-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hyundai_Genesis_coupe_I.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/58/Hyundai_Genesis_Coupe_2.0T_2013_%2852409233967%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hyundai_Genesis_Interior_%284594377812%29.jpg",
  },
  [hyundaiKey("i10-2010")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/c4/2010_Hyundai_i10_Comfort_-_1248cc_1.2_%2885PS%29_Petrol_-_Electric_Red_-_12-12-2023%2C_Front_Left.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/51/2010_Hyundai_i10_Comfort_-_1248cc_1.2_%2885PS%29_Petrol_-_Electric_Red_-_12-12-2023%2C_Rear_Left.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Hyundai_Grand_i10_1.2_Interior_2.jpg",
  },
  [hyundaiKey("i10-2016")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/0c/2014_Hyundai_i10_Rear_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/0/0c/2014_Hyundai_i10_Rear_Front.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Hyundai_Grand_i10_1.2_Interior_2.jpg",
  },
  [hyundaiKey("i20-2009")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Hyundai_i20_5D_front_-_PSM_2009.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/0/09/Hyundai_i20_5D_rear-_PSM_2009.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/42/2018_Hyundai_i20_facelift_Interior.jpg",
  },
  [hyundaiKey("i20-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/f3/2015_Hyundai_i20_SE_Automatic_1.4_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/4/47/2015_Hyundai_i20_SE_Automatic_1.4_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/42/2018_Hyundai_i20_facelift_Interior.jpg",
  },
  [hyundaiKey("i20-n-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/6/67/2021_Hyundai_i20_N_Line_%28BI3%3B_India%29_front_view.png",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/57/Hyundai_i20N_Rally1_No.11_in_2022_FIA_World_Rally_Championship.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/42/2018_Hyundai_i20_facelift_Interior.jpg",
  },
  [hyundaiKey("i30-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Hyundai_i30-Wagon_Front.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/d4/2019_Hyundai_i30_Hatchback_N_Performance_%28Rear%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/8f/2018_Hyundai_i30_N_Interior.jpg",
  },
  [hyundaiKey("i30-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/8/86/2014_Hyundai_i30_Coupe_in_Creamy_White%2C_front_left%2C_06-05-2025.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/9/92/2014_Hyundai_i30_Coupe_in_Creamy_White%2C_rear_left%2C_06-05-2025.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/8f/2018_Hyundai_i30_N_Interior.jpg",
  },
  [hyundaiKey("i30-n-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/6/61/2018_Hyundai_i30_N_Performance_T-GDi_2.0_Front_Side.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/6/6e/2018_Hyundai_i30_N_Performance_T-GDi_2.0_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/8f/2018_Hyundai_i30_N_Interior.jpg",
  },
  [hyundaiKey("ioniq-5-2022")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/ff/2022_Hyundai_Ioniq_5_SEL_AWD_in_Shooting_Star%2C_front_left.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/0/0f/2022_Hyundai_Ioniq_5_SEL_AWD_in_Shooting_Star%2C_rear_left.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/58/Hyundai_Ioniq_5_NE_Interior_%281%29.jpg",
  },
  [hyundaiKey("ioniq-electric-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/6/6e/17_Hyundai_Ioniq_Electric_front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Hyundai_IONIQ_Electric_Blazing_Yellow_%2833477626770%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/87/Hyundai_IONIQ_Electric_Blazing_Yellow_%2833862208005%29.jpg",
  },
  [hyundaiKey("kona-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/2/27/2018_Hyundai_Kona_1.6_T-GDI_front_4.2.18.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/a/ad/2018_Hyundai_Kona_1.6_T-GDI_rear_4.2.18.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/9/9a/2024_Hyundai_Kona%2C_front_NYIAS_2023.jpg",
  },
  [hyundaiKey("kona-electric-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/9c/2020_Hyundai_Kona_Electric_in_Chalk_White%2C_front_left.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b5/2020_Hyundai_Kona_Electric_in_Chalk_White%2C_rear_left.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/55/Hyundai_Kona_Electric_N_Line_SX2_EV_Black_Monotone_N_Line_%284%29.jpg",
  },
  [hyundaiKey("palisade-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/99/2020_Hyundai_Palisade_front_NYIAS_2019.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/0/03/2020_Hyundai_Palisade_SE_HTrac%2C_rear_8.18.19.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/0/08/HYUNDAI_PALISADE_INTERIOR_%282%29.jpg",
  },
  [hyundaiKey("santa-fe-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/b/be/Hyundai_Santa_Fe_front_20080326.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/4/47/Hyundai_Santa_Fe_rear_20080325.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Hyundai_Santa_Fe_MX5_1.6T_Calligraphy_HEV_-_interior_view.jpg",
  },
  [hyundaiKey("santa-fe-2013")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/f4/2013_Hyundai_Santa_Fe_Front_Side_Profile-_2013_Hyundai_Santa_Fe_Launch_Event_%287872777010%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/4/4c/2013_Hyundai_Santa_Fe_Sport%2C_Rear_Left%2C_10-31-2020.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Interior_-_2013_Hyundai_Santa_Fe_Launch_Event_%287872770636%29.jpg",
  },
  [hyundaiKey("santa-fe-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/8/86/2020_Hyundai_Santa_Fe_SEL%2C_front_right.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/13/2004_Hyundai_Santa_Fe_GL%2C_Rear_Right%2C_09-22-2020.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Hyundai_Santa_Fe_MX5_1.6T_Calligraphy_HEV_-_interior_view.jpg",
  },
  [hyundaiKey("sonata-2006")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/95/2006_Hyundai_Sonata_in_Black%2C_front_right.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/ff/2006_Hyundai_Sonata_in_Black%2C_rear_right.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Hyundai_Sonata_Interior_%284593764611%29.jpg",
  },
  [hyundaiKey("sonata-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/ef/2017_hyundai_sonata_front-side_%282%29.png",
    rear: "https://upload.wikimedia.org/wikipedia/commons/a/a3/2018_Hyundai_Sonata_GL_in_Phantom_Black%2C_rear_left%2C_2024-06-07.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/0/0a/2014_Hyundai_Sonata_%28LF_MY15%29_Premium_sedan_%282015-10-10%29_01.jpg",
  },
  [hyundaiKey("sonata-hybrid-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/8/85/2013_Hyundai_Sonata_Hybrid_with_US_Government_license_plates_%28Front-Left%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b7/2013_Hyundai_Sonata_Hybrid_with_US_Government_license_plates_%28Rear-Left%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/4e/2013072911_Hyundai_Sonata_Hybrid.png",
  },
  [hyundaiKey("tucson-2007")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/a1/2007_Hyundai_Tucson_ViVa_V6_AWD_in_Platinum%2C_front_left%2C_2024-11-20.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/ba/2007_Hyundai_Tucson_ViVa_V6_AWD_in_Platinum%2C_rear_left%2C_2024-11-20.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/1/13/Hyundai_Tucson_NX4_1.6_GLS_HEV_-_interior_view.jpg",
  },
  [hyundaiKey("tucson-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/ec/2014_Hyundai_Tucson_GLS_AWD_in_Garnet_Red%2C_Front_Right%2C_05-18-2023.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/0/05/2014_Hyundai_Tucson_GLS_AWD_in_Garnet_Red%2C_Rear_Right%2C_05-18-2023.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/1/13/Hyundai_Tucson_NX4_1.6_GLS_HEV_-_interior_view.jpg",
  },
  [hyundaiKey("tucson-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/c6/2022_Hyundai_Tucson_Preferred%2C_Front_Right%2C_05-24-2021.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/3/37/2021_Hyundai_Tucson_Ultimate_T-GDi_MHEV_1.6_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/1/13/Hyundai_Tucson_NX4_1.6_GLS_HEV_-_interior_view.jpg",
  },
  [hyundaiKey("veloster-2013")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/fc/2013_Hyundai_Veloster_1.6_Turbo%2C_front_right%2C_06-08-2024.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/9/99/2013_Hyundai_Veloster_1.6_Turbo%2C_rear_left%2C_06-08-2024.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/d/d5/2013-hyundai-veloster-turbo-15-1326142957_-_Flickr_-_theKCB.jpg",
  },
  [hyundaiKey("veloster-n-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/b/b7/2019_Hyundai_Veloster_N_front_4.2.18.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/bf/2019_Hyundai_Veloster_N_rear_4.2.18.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/58/2012_Hyundai_Veloster_%28FS2%29_hatchback_%282012-10-26%29_04.jpg",
  },

  [kiaKey("carnival-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/2/2a/20201013_Kia_Carnival_Front_Side.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Kia_Carnival_2015%2C_2016_%2827286241541%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Kia_Carnival_2.2_SX_2023_%28interior%29.jpg",
  },
  [kiaKey("ceed-2012")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/98/2012_KIA_Ceed_4_EcoDynamics_CRDi_-_1582cc_1.6_%28127PS%29_Diesel_-_Silver_-_05-2024%2C_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/5d/2016_KIA_Ceed_4_EcoDynamics_CRDi_-_1582cc_1.6_%28136PS%29_Diesel_-_Grey_-_02-2024%2C_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/0/09/Kia_cee%27d_SW_Facelift_interior_-_GMS_2009.jpg",
  },
  [kiaKey("ceed-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/b/b2/2019_Kia_Ceed_sw_2_NAV_CRDI_ISG_1.6_Front_%281%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/1c/2019_Kia_Ceed_sw_2_NAV_CRDI_ISG_1.6_Rear_%281%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/0/06/2017_Kia_Cee%27d_Interior.jpg",
  },
  [kiaKey("ceed-sw-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Kia_Ceed_SW_Front_Genf_2018.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Kia_cee%27d_SW_GT_Line_-_prawy_ty%C5%82_%28MSP17%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/0/09/Kia_cee%27d_SW_Facelift_interior_-_GMS_2009.jpg",
  },
  [kiaKey("ev6-2022")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/1/1f/2022_Kia_EV6_Air_Long_Range_2WD_%28Front%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/e/e4/2022_Kia_EV6_Air_Long_Range_2WD_%28Rear%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/6/69/Kia_EV6_GT-Line_interior.jpg",
  },
  [kiaKey("ev9-2023")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/b/bc/2023_Kia_EV9_front_view.png",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/70/2023_Kia_EV9_rear_view_01.png",
    interior: "https://upload.wikimedia.org/wikipedia/commons/d/db/2023_Kia_EV9_interior.png",
  },
  [kiaKey("forte-2010")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/1/11/2010_Kia_Forte_SX_in_Titanium_Metallic%2C_front_right%2C_2024-09-09.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b0/2010_Kia_Forte_SX_rear_--_08-22-2009.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/1/18/Kia_Forte_2014_interior_MIAS.JPG",
  },
  [kiaKey("forte-koup-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/7/74/2015_Kia_Forte_Koup_SX_front_%2821013695525%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/72/2015_Kia_Forte_Koup_SX_rear_%2820826858579%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/1/18/2010_Kia_Forte_Koup_-_2009_NY_Int._Auto_Show.jpg",
  },
  [kiaKey("k5-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/f8/2021_Kia_K5_GT-Line%2C_front_left%2C_09-09-2023.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/d9/2021_Kia_K5_EX%2C_Rear_Left%2C_05-02-2021.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/3/38/KIA_K5_INTERIOR_China.jpg",
  },
  [kiaKey("k900-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/7/70/%2715_Kia_K900_Inside_Carrefour_Laval_--_Front.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/16/2015_Hyundai_Genesis_3.8_AWD_in_Urban_Grey_Metallic%2C_rear_left.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Hyundai_Genesis_Interior_%284594377812%29.jpg",
  },
  [kiaKey("kona-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/ed/2018_Hyundai_Kona_%28OS_MY18%29_Elite_2WD_wagon_%282018-03-26%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/a/ad/2018_Hyundai_Kona_1.6_T-GDI_rear_4.2.18.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/c/ca/2017_Hyundai_Kona_Interior.jpg",
  },
  [kiaKey("kona-electric-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/9c/2020_Hyundai_Kona_Electric_in_Chalk_White%2C_front_left.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b5/2020_Hyundai_Kona_Electric_in_Chalk_White%2C_rear_left.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/59/Hyundai_Kona_Electric_N_Line_SX2_EV_Black_Monotone_N_Line_%281%29.jpg",
  },
  [kiaKey("niro-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/ca/2017_Kia_Niro_base%2C_left_front_%28USA%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b4/2018_Kia_Niro_FE_Eco-Hybrid%2C_rear_5.12.19.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/9/9b/2022_Kia_Niro_Hybrid_Interior_%281%29.jpg",
  },
  [kiaKey("optima-hybrid-2016")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/45/2016_Kia_Optima_LX_Plus_in_Snow_White_Pearl%2C_front_left%2C_2024-09-06.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/a/aa/2016_Kia_Optima_LX_Plus_in_Snow_White_Pearl%2C_rear_left%2C_2024-09-06.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Kia_Optima_%28JF%29_Interior.jpg",
  },
  [kiaKey("picanto-2005")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/ec/2005_Kia_Picanto_LX_1.1_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/50/2005_Kia_Picanto_LX_1.1_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/1/14/2018_Kia_Picanto_GT-Line_S_-_Interior_1.jpg",
  },
  [kiaKey("proceed-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/4a/2019_Kia_Proceed_GT_ISG_S-A_1.6_Front_%281%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/e/e1/2019_Kia_Proceed_GT_ISG_S-A_1.6_Rear_%281%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/8a/KiaCeedActive_interno.jpg",
  },
  [kiaKey("rio-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Kia_Rio_front_20080224.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/6/64/Kia_Rio_rear_20080224.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Small_Window_Interior_-_2012_Kia_Rio_SX_%287176604015%29.jpg",
  },
  [kiaKey("rio-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/e0/2015_KIA_Rio_3_EcoDynamics_CRDi_-_1396cc_1.4_%2890PS%29_Diesel_-_Clear_White_-_02-2024%2C_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/5b/2015_KIA_Rio_3_EcoDynamics_CRDi_-_1396cc_1.4_%2890PS%29_Diesel_-_Clear_White_-_02-2024%2C_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Small_Window_Interior_-_2012_Kia_Rio_SX_%287176604015%29.jpg",
  },
  [kiaKey("rio-sedan-2016")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Kia_Rio_sedan_%28UB%29_rear.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Kia_Rio_sedan_%28UB%29_rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/8a/KiaCeedActive_interno.jpg",
  },
  [kiaKey("sedona-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/fa/2018_Kia_Sedona_LX_3.3L_V6_front_5.23.18.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/e/ef/2018_Kia_Sedona_LX_3.3L_V6_rear_5.23.18.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/53/Kia_Sedona%27s_la-z-boy_seat_%2820420238744%29.jpg",
  },
  [kiaKey("soul-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/d/d4/2014_Kia_Soul_Plus_US_front_left.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/2/2e/2014_Kia_Soul_Plus_%28US%29%2C_rear_left.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/8a/KIA_Soul_Interior_-_CIAS_2012_%286933519091%29.jpg",
  },
  [kiaKey("soul-ev-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/6/6f/2019_Kia_Soul_EV_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/ba/2019_Kia_Soul_EV_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/2/23/2017_Kia_Soul_EV_%28Cockpit%29.jpg",
  },
  [kiaKey("sportage-2010")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/9f/2010_Kia_Sportage_LX_V6_Luxury_Package_4WD_in_Black_Cherry_Metallic%2C_Front_Right%2C_2023-12-22.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/a/a3/2010_Kia_Sportage_LX_V6_Luxury_Package_4WD_in_Black_Cherry_Metallic%2C_Rear_Right%2C_2023-12-22.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/5f/2010_Kia_Sportage_%28Second_Generation%29_%28Second_Facelift%29%29Interior%28Black%29.jpg",
  },
  [kiaKey("sportage-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/4b/2019_Kia_Sportage_EX_in_Modern_Bronze%2C_front_right%2C_2024-03-31.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/50/2019_Kia_Sportage_2_CRDi_ISG_S-A_1.6_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/c/c8/2019_Kia_Sportage_2.0_EX_%2828%29.jpg",
  },
  [kiaKey("stinger-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/af/2018_Kia_Stinger_GT_Limited_front_4.2.18.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/dc/2018_Kia_Stinger_AWD%2C_rear_7.17.19.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Kia_Stinger_interior.jpg",
  },
  [kiaKey("telluride-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/9d/2020_Kia_Telluride_front_view_1_%28United_States%29.png",
    rear: "https://upload.wikimedia.org/wikipedia/commons/8/8a/2020_Kia_Telluride%2C_Cleveland_Auto_Show_%28Rear%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/6/64/2023_Kia_Telluride_interior.jpg",
  },

  [bmwKey("316i-2004")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/7/75/1988_BMW_316i_Front.png",
    rear: "https://upload.wikimedia.org/wikipedia/commons/2/2f/BMW_M43_Engine_316i_Compact_1996.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/7/7a/BMW_316i_E30_%289166328479%29.jpg",
  },
  [bmwKey("318d-2007")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/96/BMW_318d_E90_%28seit_2008%29_Facelift_front_MJ.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b6/BMW_318d.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/46/BMW_3_Series_%28E90%29_interior.jpg",
  },
  [bmwKey("320d-2010")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/2/2b/2010_BMW_320D_E90%2C_front_left%2C_05-19-2024.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/9/94/BMW_320d_Edition_Sport_%28E90%29_Facelift_rear_20100724.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/f/f0/BMW_320d_Interior.jpg",
  },
  [bmwKey("320i-2005")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/cf/BMW_320i_WTCC_2005_vr_TCE.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/a/a5/1981_BMW_320i_in_dk_grey_rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/7/71/BMW_320i_Coupe_interior.jpg",
  },
  [bmwKey("330d-2013")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/97/BMW_320d%2C_BMW_335i_Gran_Turismo%2C_BMW_330d_in_Munich.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/8/88/BMW_330d_%28E46%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/d/da/BMW_320d_Luxury_%28F30%29_interior.jpg",
  },
  [bmwKey("330i-2010")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/09/2024_BMW_330i_Touring_M_Sport_Brookland_Grey_taken_in_Bandung%2C_West_Java_01.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Rear_view_of_a_BMW_E90_330i_2006_pre-LCI_black_color_with_style_162_rims.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/2/22/2019_BMW_330i_M_Sport_%2834%29.jpg",
  },
  [bmwKey("335i-2012")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Front_Grill_-_2014_BMW_335i_xDrive_GT_%2814535229806%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Rear_View_-_2014_BMW_335i_xDrive_GT_%2814371634130%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/1/14/BMW_335i_Individual_F30_%288210208094%29.jpg",
  },
  [bmwKey("340i-2016")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/3/35/B_58_engine_on_Bmw_340i.jpeg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/6/64/2017_BMW_340i_%28F30_LCI%29_Luxury_Line_sedan_%282018-07-30%29_01.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/c/cd/2018_BMW_340i_M_Sport_Shadow_3.0_Interior.jpg",
  },
  [bmwKey("520d-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/a5/2007_BMW_520d_E60%2C_front_right%2C_06-30-2024.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/a/a1/2007_BMW_520d_E60%2C_rear_right%2C_06-30-2024.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/6/63/2018_BMW_520d_SE_Touring_Automatic_Interior.jpg",
  },
  [bmwKey("525d-2011")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Bmw_525d.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/3/3b/BMW_525d_EXE_28.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/3/3a/BMW_525d_EXE_18.jpg",
  },
  [bmwKey("530d-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/3/30/BMW_530d_%28F10%29_front_20100821.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/9/9b/BMW_530d_Gran_Turismo_%282009%29_-_rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/3/32/BMW_535i_interior.jpg",
  },
  [bmwKey("530i-2017")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/97/BMW_530i_Touring_Sport_%2836661685032crop%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/15/2010_brown_BMW_530i_rear.JPG",
    interior: "https://upload.wikimedia.org/wikipedia/commons/6/66/BMW_530i_Sport_Individual_-_Flickr_-_The_Car_Spy_%289%29.jpg",
  },
  [bmwKey("540i-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/3/39/2018_BMW_540i_in_white%2C_front_right.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/0/0f/2018_BMW_540i_in_white%2C_rear_right.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/2/25/2019_BMW_530e_M_Sport_%2812%29.jpg",
  },
  [bmwKey("i3-2017")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/d/df/BMW_i3_front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/c/c9/2017_BMW_i3_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/a/a2/The_interior_of_BMW_i3.JPG",
  },
  [bmwKey("i8-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/b/b4/BMW_i8_front_%2821038420335%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/6/64/BMW_i8_rear_%2820850464008%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/3/38/BMW_i8_Cockpit.jpg",
  },
  [bmwKey("m3-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/eb/BMW_M3_%28front%29_%283936446582%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/77/2008_BMW_M3_DCT_Rear_FOS22.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/1/14/Geneva_Motor_Show_2011_-_BMW_M3_Coupe_Interior_%285560367245%29.jpg",
  },
  [bmwKey("m3-2016")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/eb/BMW_M3_%28front%29_%283936446582%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/c/c4/BMW_M3_saloon_rear_%2810518824844%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/0/08/BMW_M3_interior_PL_60.JPG",
  },
  [bmwKey("m5-2006")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/7/7c/BMW_M5_front_left.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/a/a7/BMW_M5_rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW_M5_interior_PL_01.JPG",
  },
  [bmwKey("m5-2012")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW_M5_F10_%28front_quarter%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/8/8f/BMW_M5_%282012%29_%2853333000701%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/c/ce/2006_BMW_M5_-_Flickr_-_The_Car_Spy_%2813%29.jpg",
  },
  [bmwKey("m5-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/9f/2019_BMW_M5_Competition_in_Silver%2C_front_right_%28US%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/12/2018_BMW_M5_Competition_in_Alpinwei%C3%9F%2C_rear_left.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW_M5_interior_PL_01.JPG",
  },
  [bmwKey("x1-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/4c/2018_BMW_X1_sDrive18i_xLine_1.5_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/8/8a/BMW_X1_xDrive20i_%28E84%29_rear.JPG",
    interior: "https://upload.wikimedia.org/wikipedia/commons/4/4f/2018_BMW_X1_xDrive18d_xLine_2.0_Interior.jpg",
  },
  [bmwKey("x3-2012")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/c2/2018_BMW_X3_xDrive30d_M_Sport_Automatic_3.0_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/f2/BMW_X3_%28Rear%29%2C_Jakarta%2C_Indonesia.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/f/fa/2017_BMW_X3_xDrive35d_M_Sport_Automatic_Interior.jpg",
  },
  [bmwKey("x3-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/0e/2019_BMW_X3_M_Competition_Automatic_3.0_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/76/2019_BMW_X3_Comp_Rear_black.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/a/ae/2019_BMW_X3_xDrive_30i_Luxury_%2859%29.jpg",
  },
  [bmwKey("x5-2007")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/a9/2007_BMW_X5_SE_7S_Automatic_3.0_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/fc/2007_BMW_X5_SE_7S_Automatic_3.0_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/f/f1/BMW_X5_LWB_%28G05%29_INTERIOR.jpg",
  },
  [bmwKey("x5-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Front_Grill_-_2014_BMW_X5_xDrive_35i_%2814856833058%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Rear_Hatch_-_2014_BMW_X5_xDrive_35i_%2815040366241%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Front_Interior_-_2014_BMW_X5_xDrive_35i_%2814856833658%29.jpg",
  },
  [bmwKey("x5-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/a9/2007_BMW_X5_SE_7S_Automatic_3.0_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/fc/2007_BMW_X5_SE_7S_Automatic_3.0_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/f/f1/BMW_X5_LWB_%28G05%29_INTERIOR.jpg",
  },
  [bmwKey("x6-2010")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/b/bb/BMW_X6-xDrivei50_Front-view.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/e/e8/BMW_X6_xDrive35d_rear_20100425.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/86/BMW_X6_M_Hamann_Tycoon_EVO_M_interior.jpg",
  },
  [bmwKey("x6-2017")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/b/bb/BMW_X6-xDrivei50_Front-view.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/16/2017_BMW_X6_M_4.4L_rear_6.13.18.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/b/bb/2023_BMW_X6_M_%28G06%29_IAA_2023_1X7A0767.jpg",
  },
  [bmwKey("x7-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/9e/2019_BMW_X7_xDrive30d_M_Sport_Automatic_3.0_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/bf/2019_BMW_X7_xDrive30d_M_Sport_Automatic_3.0_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/c/c9/2019_BMW_X7_xDrive30d_M_Sport_3.0_Interior.jpg",
  },
  [bmwKey("z4-2006")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/9c/2006_BMW_Z4_SE_2.0_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/1a/2006_BMW_Z4_SE_2.0_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/b/b0/2019_BMW_Z4_M40i_Interior.jpg",
  },
  [bmwKey("z4-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/d/d6/2019_BMW_Z4_M40i_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/59/2019_BMW_Z4_M40i_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/b/b0/2019_BMW_Z4_M40i_Interior.jpg",
  },

  [bentleyKey("bentayga-2017")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/3/36/Bentley_Bentayga_2015_-_front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/73/Bentley_Bentayga_2015_-_rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Bentley_Bentayga_-_Interior.jpg",
  },
  [bentleyKey("bentayga-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Bentley_Bentayga_Azure_in_Dove_Grey%2C_front_right.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Bentley_Bentayga_Azure_in_Dove_Grey%2C_rear_right.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Bentley_Bentayga_interior_2.jpg",
  },
  [bentleyKey("continental-gt-2004")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/46/Gray_Bentley_Continental_GT_front_side.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/c/ca/2005_green_Bentley_Continental_GT_rear.JPG",
    interior: "https://upload.wikimedia.org/wikipedia/commons/9/94/2006_Bentley_Continental_GT_Mulliner_-_Flickr_-_The_Car_Spy_%2819%29.jpg",
  },
  [bentleyKey("continental-gt-2012")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/d/d0/2012_Bentley_Continental_GT_W12_in_Beluga%2C_Front_Left%2C_08-02-2023.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/10/2012_Bentley_Continental_GT_V8_Convertible_4.0_Auto_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/f/f9/2005_Bentley_Continental_GT_-_Flickr_-_The_Car_Spy_%2811%29.jpg",
  },
  [bentleyKey("continental-gt-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/6/69/2020_Bentley_Continental_GT_V8_Convertible_in_Dark_Sapphire%2C_front_left.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/55/2020_Bentley_Continental_GT_V8_Convertible_in_Dark_Sapphire%2C_rear_left.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Interior_of_Bentley_Continental_GT-2006.jpg",
  },
  [bentleyKey("flying-spur-2006")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/03/Bentley_Flying_Spur_Macau_front_view_%28June_9%2C_2025%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Bentley_Flying_Spur_Macau_rear_view_%28June_9%2C_2025%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Geneva_MotorShow_2013_-_Bentley_New_Flying_Spur_seats_buttons.jpg",
  },
  [bentleyKey("flying-spur-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/03/Bentley_Flying_Spur_Macau_front_view_%28June_9%2C_2025%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Bentley_Flying_Spur_Macau_rear_view_%28June_9%2C_2025%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Geneva_MotorShow_2013_-_Bentley_New_Flying_Spur_seats_buttons.jpg",
  },
  [bentleyKey("flying-spur-2022")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/2/2c/2022_Bentley_Flying_Spur_Hybrid_in_Ghost_White%2C_Odyssean_Specs%2C_front_right.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Bentley_Flying_Spur_II_Black.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/3/34/Geneva_MotorShow_2013_-_Bentley_New_Flying_Spur_rear_console.jpg",
  },
  [bentleyKey("mulsanne-2010")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/9d/2017_Bentley_Mulsanne_EWB_in_Peacock_Metallic%2C_front_right.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/7d/2017_Bentley_Mulsanne_EWB_in_Peacock_Metallic%2C_rear_right.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Bentley_Mulsanne_-_Mondial_de_l%27Automobile_de_Paris_2010_-_001.jpg",
  },
  [bentleyKey("mulsanne-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/d/d9/2018_Bentley_Mulsanne_Speed_in_Glacier_White%2C_front_right.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/7d/2017_Bentley_Mulsanne_EWB_in_Peacock_Metallic%2C_rear_right.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/8/89/2017_Bentley_Mulsanne_EWB_interior.jpg",
  },

  [mercedesKey("a180-2013")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/Mercedes-Benz_A_200d_AMG_Line_%28W177%29_%E2%80%93_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Mercedes-Benz_A_200d_AMG_Line_%28W177%29_%E2%80%93_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mercedes-Benz_A-Class_%28W177%29_interior.jpg",
  },
  [mercedesKey("a200-2018")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Mercedes-Benz_A_250e_%28W177%29_%E2%80%93_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/Mercedes-Benz_A_250e_%28W177%29_%E2%80%93_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mercedes-Benz_A-Class_%28W177%29_interior.jpg",
  },
  [mercedesKey("a45-amg-2016")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/Mercedes-Benz_A_45_AMG_%28W176%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/b/ba/Mercedes-Benz_A_45_AMG_%28W176%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mercedes-Benz_A-Class_%28W177%29_interior.jpg",
  },
  [mercedesKey("b180-2014")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/3/37/2014_Mercedes-Benz_B_200_CDI_BlueEFFICIENCY_%28W246%29_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/2014_Mercedes-Benz_B_200_CDI_BlueEFFICIENCY_%28W246%29_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/b/b2/Mercedes-Benz_B-Class_%28W247%29_interior.jpg",
  },
  [mercedesKey("c180-2006")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/7/76/2004_Mercedes-Benz_C_180_Kompressor_%28W203%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/2004_Mercedes-Benz_C_180_Kompressor_%28W203%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Mercedes-Benz_C-Class_%28W203%29_interior.jpg",
  },
  [mercedesKey("c200-2013")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/2013_Mercedes-Benz_C_200_Avantgarde_%28W204%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/2013_Mercedes-Benz_C_200_Avantgarde_%28W204%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Mercedes-Benz_C-Class_%28W204%29_interior.jpg",
  },
  [mercedesKey("c220-cdi-2011")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/2012_Mercedes-Benz_C_220_CDI_Elegance_%28W204%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/9/92/2012_Mercedes-Benz_C_220_CDI_Elegance_%28W204%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/Mercedes-Benz_C-Class_%28W204%29_interior.jpg",
  },
  [mercedesKey("c300-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Mercedes-Benz_C_300_%28W205%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Mercedes-Benz_C_300_%28W205%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Mercedes-Benz_C-Class_%28W205%29_interior.jpg",
  },
  [mercedesKey("c63-amg-2012")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/5/5a/Mercedes-Benz_C_63_AMG_%28W204%29_front.JPG",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Mercedes-Benz_C_63_AMG_%28W204%29_rear.JPG",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/Mercedes-Benz_C_63_AMG_%28W204%29_interior.JPG",
  },
  [mercedesKey("c63-amg-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/f/fc/Mercedes-Benz_C_63_AMG_%28W205%29_front.JPG",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Mercedes-Benz_C_63_AMG_%28W205%29_rear.JPG",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Mercedes-Benz_C-Class_%28W205%29_interior.jpg",
  },
  [mercedesKey("e200-2007")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/2007_Mercedes-Benz_E_200_Kompressor_%28W211%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/2007_Mercedes-Benz_E_200_Kompressor_%28W211%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/8/80/Mercedes-Benz_E-Class_%28W211%29_interior.jpg",
  },
  [mercedesKey("e220-cdi-2012")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/2012_Mercedes-Benz_E_220_CDI_%28W212%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/c/c6/2012_Mercedes-Benz_E_220_CDI_%28W212%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Mercedes-Benz_E-Class_%28W212%29_interior.jpg",
  },
  [mercedesKey("e300-2019")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Mercedes-Benz_E_300_%28W213%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Benz_E_300_%28W213%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Mercedes-Benz_E-Class_%28W213%29_interior.jpg",
  },
  [mercedesKey("e350-cdi-2014")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/2014_Mercedes-Benz_E_350_CDI_%28W212%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/f/f3/2014_Mercedes-Benz_E_350_CDI_%28W212%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Mercedes-Benz_E-Class_%28W212%29_interior.jpg",
  },
  [mercedesKey("e63-amg-2010")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/2011_Mercedes-Benz_E_63_AMG_%28W212%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/2011_Mercedes-Benz_E_63_AMG_%28W212%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/Mercedes-Benz_E_63_AMG_%28W212%29_interior.jpg",
  },
  [mercedesKey("e63-amg-2018")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/2018_Mercedes-Benz_E_63_AMG_S_%28W213%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/6/6c/2018_Mercedes-Benz_E_63_AMG_S_%28W213%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/1/13/Mercedes-Benz_E-Class_%28W213%29_interior.jpg",
  },
  [mercedesKey("s320-2005")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/2005_Mercedes-Benz_S_320_%28W220%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/7/72/2005_Mercedes-Benz_S_320_%28W220%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mercedes-Benz_S-Class_%28W220%29_interior.jpg",
  },
  [mercedesKey("s350-2012")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/2012_Mercedes-Benz_S_350_%28W221%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/2012_Mercedes-Benz_S_350_%28W221%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Mercedes-Benz_S-Class_%28W221%29_interior.jpg",
  },
  [mercedesKey("s500-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/2021_Mercedes-Benz_S_500_4MATIC_%28W223%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/2021_Mercedes-Benz_S_500_4MATIC_%28W223%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Mercedes-Benz_S-Class_%28W223%29_interior.jpg",
  },
  [mercedesKey("s63-amg-2016")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/5/57/2016_Mercedes-Benz_S_63_AMG_%28W222%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/2016_Mercedes-Benz_S_63_AMG_%28W222%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Mercedes-Benz_S-Class_%28W222%29_interior.jpg",
  },
  [mercedesKey("s65-amg-2014")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/2015_Mercedes-Benz_S_65_AMG_%28W222%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/2015_Mercedes-Benz_S_65_AMG_%28W222%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/6/6f/Mercedes-Benz_S-Class_%28W222%29_interior.jpg",
  },
  [mercedesKey("cla180-2015")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/2016_Mercedes-Benz_CLA_180_AMG_Line_%28C117%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/2016_Mercedes-Benz_CLA_180_AMG_Line_%28C117%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Mercedes-Benz_CLA_%28C117%29_interior.jpg",
  },
  [mercedesKey("cla45-amg-2017")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/2017_Mercedes-Benz_CLA_45_AMG_%28C117%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/7/7b/2017_Mercedes-Benz_CLA_45_AMG_%28C117%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/Mercedes-Benz_CLA_%28C117%29_interior.jpg",
  },
  [mercedesKey("gla200-2018")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/2019_Mercedes-Benz_GLA_200_AMG_Line_%28X156%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/2019_Mercedes-Benz_GLA_200_AMG_Line_%28X156%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mercedes-Benz_GLA_%28X156%29_interior.jpg",
  },
  [mercedesKey("glc220d-2016")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/a/a2/2017_Mercedes-Benz_GLC_220d_4MATIC_%28X253%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/6/60/2017_Mercedes-Benz_GLC_220d_4MATIC_%28X253%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Mercedes-Benz_GLC_%28X253%29_interior.jpg",
  },
  [mercedesKey("glc300-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/2020_Mercedes-Benz_GLC_300_e_4MATIC_%28X253%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/2020_Mercedes-Benz_GLC_300_e_4MATIC_%28X253%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/e/e2/Mercedes-Benz_GLC_%28X253%29_interior.jpg",
  },
  [mercedesKey("gle350d-2018")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/2018_Mercedes-Benz_GLE_350d_4MATIC_%28W166%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/2018_Mercedes-Benz_GLE_350d_4MATIC_%28W166%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Mercedes-Benz_GLE_%28W166%29_interior.jpg",
  },
  [mercedesKey("gle450-2021")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/1/15/2021_Mercedes-Benz_GLE_450_4MATIC_%28V167%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/2021_Mercedes-Benz_GLE_450_4MATIC_%28V167%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Mercedes-Benz_GLE_%28V167%29_interior.jpg",
  },
  [mercedesKey("gls500-2016")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/7/79/2016_Mercedes-Benz_GLS_500_4MATIC_%28X166%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/2/22/2016_Mercedes-Benz_GLS_500_4MATIC_%28X166%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/3/3e/Mercedes-Benz_GLS_%28X166%29_interior.jpg",
  },
  [mercedesKey("g63-amg-2014")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/d/da/2015_Mercedes-Benz_G_63_AMG_%28W463%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/6/62/2015_Mercedes-Benz_G_63_AMG_%28W463%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Mercedes-Benz_G-Class_%28W463%29_interior.jpg",
  },
  [mercedesKey("g63-amg-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/2019_Mercedes-Benz_AMG_G_63_%28W463%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/e/e3/2019_Mercedes-Benz_AMG_G_63_%28W463%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/Mercedes-Benz_G-Class_%28W463%29_interior.jpg",
  },

  [koenigseggKey("cc8s-2002")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Koenigsegg_CC8S_%28front%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/e/ef/Geneva_Motor_Show_2015_Koenigsegg_CC8S_%2824521144705%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/2008_Koenigsegg_CCX_in_Silver%2C_interior.jpg",
  },
  [koenigseggKey("ccr-2004")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/6/66/Koenigsegg_CCR_KN05EGG.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Koenigsegg_CCR_%285023387556%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/Koenigsegg_ccx_interior_-_AIMS.JPG",
  },
  [koenigseggKey("ccx-2008")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/Koenigsegg_CCX_For_Anija_Car_Front_%28NEW%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/2008_Koenigsegg_CCX_in_Silver%2C_rear_right.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/b/b4/2008_Koenigsegg_CCX_in_Silver%2C_interior.jpg",
  },
  [koenigseggKey("agera-2011")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/a/a6/Koenigsegg_Agera_RS_at_Bridgehampton%2C_front_right.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/2012_Koenigsegg_Agera_S_Rear_SCD24.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/KoenigseggAgeraR-interior.jpg",
  },
  [koenigseggKey("agera-r-2013")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Agera_RS_Naraya_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/e/e5/Koenigsegg_Agera_R_%285488114439%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Koenigsegg_Agera_R_%285488113699%29.jpg",
  },
  [koenigseggKey("one-1-2015")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Koenigsegg_One-1_-_Gen%C3%A8ve_2014_-_01.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Koenigsegg_One-1_-_Gen%C3%A8ve_2014_-_02.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/KoenigseggAgeraR-interior.jpg",
  },
  [koenigseggKey("regera-2016")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Koenigsegg_Regera_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/2019_Koenigsegg_Regera_Rear_Side_Detail.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Swedish_Blue_Koenigsegg_Regera_d%E2%80%99Elegance_at_GIMS_2018_%28Ank_Kumar%29_04.jpg",
  },
  [koenigseggKey("jesko-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Koenigsegg_Jesko_at_Bridgehampton_C%26C%2C_front_right.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/4/4a/Koenigsegg_Jesko%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0844%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Koenigsegg_Jesko_Absolut_Lego_Technic_%28interior%29.jpg",
  },
  [koenigseggKey("jesko-absolut-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/45/2024_Koenigsegg_Jesko_Absolut_2.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/d/de/2025_Koenigsegg_Jesko_Absolut_7389_FOS25.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Koenigsegg_Jesko_Absolut_Lego_Technic_%28Interior%29.jpg",
  },
  [koenigseggKey("gemera-2023")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/7/75/Koenigsegg_Gemera_%282022%29_%2852571686589%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/d/df/Koenigsegg_Gemera_%282022%29_%2852571859105%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/Koenigsegg_Gemera_%282022%29_%2852571939473%29.jpg",
  },

  [mitsubishiKey("mirage-2013")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/2/29/2013_Mitsubishi_Mirage_2_1.2_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/8/8c/2013_Mitsubishi_Mirage_2_1.2_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Mitsubishi_MIRAGE_G_%28DBA-A03A-XTHX%29_interior.jpg",
  },
  [mitsubishiKey("colt-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/0c/2008_Mitsubishi_Colt_CZI_1.1.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/2/20/Mitsubishi_Colt_rear_20080328.jpg",
    interior: "https://carsevolution.net/wp-content/uploads/2018/04/Mitsubishi-Colt-2008-interior.jpg",
  },
  [mitsubishiKey("lancer-2010")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/2/20/2012_Mitsubishi_Lancer_SE_sedan_--_02-04-2012_2.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Mitsubishi_Lancer_VIII_rear_20100612.jpg",
    interior: "https://static.cargurus.com/images/site/2010/05/24/02/58/2010_mitsubishi_lancer_gts-pic-2570713461895093277.jpeg",
  },
  [mitsubishiKey("lancer-evolution-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/91/2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg",
    rear: "https://live.staticflickr.com/5565/14044870259_91e28bf375_b.jpg",
    interior: "https://img.cintamobil.com/2018/12/23/X04JVabA/mitsubishi-lancer-evolution-x-interior-6457.jpg",
  },
  [mitsubishiKey("outlander-2013")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/4c/2014_Mitsubishi_Outlander_%28ZJ_MY14%29_LS_2WD_wagon_%282016-07-07%29_01.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/71/2014_Mitsubishi_Outlander_%28ZJ_MY14%29_LS_2WD_wagon_%282016-07-07%29_02.jpg",
    interior: "https://st.motortrendenespanol.com/uploads/sites/45/2014/01/2014-Mitsubishi-Outlander-interior.jpg",
  },
  [mitsubishiKey("outlander-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/99/2022_Mitsubishi_Outlander_SE_S-AWC%2C_07-29-2022.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/bd/2021-2024_Mitsubishi_Outlander_PHEV_P_rear.jpg",
    interior: "https://autotrends.org/wp-content/uploads/2021/02/5Q5A8116e2-scaled.jpg",
  },
  [mitsubishiKey("asx-2012")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Mitsubishi_ASX_1.8_DI-D%2B_ClearTec_Edition_%E2%80%93_Frontansicht%2C_1._April_2012%2C_Essen_%282%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Mitsubishi_ASX_1.8_DI-D%2B_ClearTec_Edition_%E2%80%93_Heckansicht%2C_1._April_2012%2C_Essen_%282%29.jpg",
    interior: "https://www.carx.it/foto/listino/mitsubishi-asx-2019-interior.jpg",
  },
  [mitsubishiKey("asx-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Mitsubishi_ASX_%282019%29_IMG_6615.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Mitsubishi_ASX_%282019%29_IMG_6614.jpg",
    interior: "https://www.carx.it/foto/listino/mitsubishi-asx-2019-interior.jpg",
  },
  [mitsubishiKey("eclipse-cross-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/47/2018_Mitsubishi_Eclipse_Cross_3_4X2_1.5_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/f9/2018_Mitsubishi_Eclipse_Cross_3_4X2_1.5_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Innenansicht_Mitsubishi_Eclipse_Cross_Value_4x4.jpg",
  },
  [mitsubishiKey("pajero-2007")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/3/36/Mitsubishi_V98_Pajero_Long_Body_Super_Exceed_3200_DI-D.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Mitsubishi_V98_Pajero_Long_Body_Super_Exceed_3200_DI-D_Rear.JPG",
    interior: "https://c8.alamy.com/comp/AD433G/interior-of-mitsubishi-pajero-2007-AD433G.jpg",
  },
  [mitsubishiKey("pajero-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/1/12/2014_Mitsubishi_Shogun_SG3_Di-D_LWB_Automatic_3.2.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/74/Mitsubishi_Shogun_SUV_4x4_In_The_Snow_%28rear%29_%28cropped%29.jpg",
    interior: "https://www.automobiledimension.com/photos/interior/mitsubishi-pajero-5p-2015-dashboard.jpg",
  },
  [mitsubishiKey("l200-2012")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Mitsubishi_L200_2500_DI-D%2B_Intense_Doppelkabine_%28IV%2C_Facelift%29_%E2%80%93_Frontansicht%2C_16._April_2011%2C_Hilden.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/d/db/Mitsubishi_L200_2500_DI-D%2B_Intense_Doppelkabine_%28IV%2C_Facelift%29_%E2%80%93_Heckansicht%2C_16._April_2011%2C_Hilden.jpg",
    interior: "https://www.autodata1.com/media/mitsubishi/pics/mitsubishi-l-200-2012-%5B6400%5D.jpg",
  },
  [mitsubishiKey("l200-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/3/39/2019_Mitsubishi_L200_Barbarian_X_DI-D_Automatic_2.3.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/76/2019_Mitsubishi_L200_Warrior_DI-D_2.3_Rear.jpg",
    interior: "https://i.ytimg.com/vi/dS8eAttVDkA/maxresdefault.jpg",
  },
  [mitsubishiKey("outlander-phev-2022")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/cf/2022_Mitsubishi_Outlander_PHEV_P_4WD_2.4_5LA-GN0W_%2820220904%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/bd/2021-2024_Mitsubishi_Outlander_PHEV_P_rear.jpg",
    interior: "https://autotrends.org/wp-content/uploads/2021/02/5Q5A8116e2-scaled.jpg",
  },
  [mitsubishiKey("imiev-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/93/2010_Mitsubishi_i-MiEV_%28GA_MY10%29_hatchback_%282015-11-11%29_01.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/12/2010_Mitsubishi_i-MiEV_%28GA_MY10%29_hatchback_%282015-11-11%29_02.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Mitsubishi_i_MiEV_dashboard.jpg",
  },
  [mitsubishiKey("colt-2010")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/f2/2010_Mitsubishi_Colt_%28RG_MY11%29_VR-X_5-door_hatchback_%282010-10-16%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/72/Mitsubishi_Colt_%28Z30%29_Facelift_rear_20100731.jpg",
    interior: "https://blog.beforward.jp/wp-content/uploads/2021/12/MITSUBISHI-COLT-2010-2-1.jpg",
  },
  [mitsubishiKey("grandis-2007")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/8/88/2009_Mitsubishi_Grandis_Equippe_Di-D_2.0.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/e/ea/2005_Mitsubishi_Grandis_Equippe_Automatic_2.4_Rear.jpg",
    interior: "https://imagenes.km77.com/fotos/bbtcontent/clippingnew/KM7KPH20091027_0001/full.jpg",
  },
  [mitsubishiKey("grandis-2011")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/8/88/2009_Mitsubishi_Grandis_Equippe_Di-D_2.0.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/e/ea/2005_Mitsubishi_Grandis_Equippe_Automatic_2.4_Rear.jpg",
    interior: "https://imagenes.km77.com/fotos/bbtcontent/clippingnew/KM7KPH20091027_0001/full.jpg",
  },
  [mitsubishiKey("lancer-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/3/38/2016_Mitsubishi_Lancer_%28CF_MY16%29_ES_Sport_sedan_%282016-11-13%29_01.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/3/3a/2016_Mitsubishi_Lancer_%28CF_MY16%29_ES_Sport_sedan_%282016-11-13%29_02.jpg",
    interior: "https://4.bp.blogspot.com/-Mnk7GBnsCms/VFGeaDiZdsI/AAAAAAAB5hI/lDMRdviO5CA/s1600/Mitsubishi-Lancer-2015%2B(11).jpg",
  },
  [mitsubishiKey("lancer-evolution-x-2013")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/91/2017-04-02_Mitsubishi_Lancer_Evolution_X_MR_SST_14_%282%29.jpg",
    rear: "https://live.staticflickr.com/5565/14044870259_91e28bf375_b.jpg",
    interior: "https://img.cintamobil.com/2018/12/23/X04JVabA/mitsubishi-lancer-evolution-x-interior-6457.jpg",
  },
  [mitsubishiKey("galant-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/d/d7/2007-2008_Mitsubishi_Galant_--_08-16-2010.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Mitsubishi_Galant_Ralliart_--_09-29-2010.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Mitsubishi_Galant_EA5A_Cockpit.jpg",
  },

  [renaultKey("clio-2005")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/2005_Renault_Clio_Dynamique_16V_1.1_Front.jpg/1400px-2005_Renault_Clio_Dynamique_16V_1.1_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/2005_Renault_Clio_V6_Rear_BS_O24.jpg/1400px-2005_Renault_Clio_V6_Rear_BS_O24.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Renault_Clio_sport_f1_team_R27.jpg/1400px-Renault_Clio_sport_f1_team_R27.jpg",
  },
  [renaultKey("clio-2012")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/2012_Renault_Clio_IV_front_logo.JPG/1400px-2012_Renault_Clio_IV_front_logo.JPG",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Renault_Clio_IV_RS_%28rear%29.JPG/1400px-Renault_Clio_IV_RS_%28rear%29.JPG",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/2013_Renault_Clio_IV_Dynamique_interior_1.jpg/1400px-2013_Renault_Clio_IV_Dynamique_interior_1.jpg",
  },
  [renaultKey("clio-2019")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2019_Renault_Clio_Iconic_Front.jpg/1400px-2019_Renault_Clio_Iconic_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Renault_Clio_Iconic_Rear.jpg/1400px-2019_Renault_Clio_Iconic_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2019_Renault_Clio_Iconic_TCe_100_Interior.jpg/1400px-2019_Renault_Clio_Iconic_TCe_100_Interior.jpg",
  },
  [renaultKey("megane-2007")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/2007_Renault_Megane_Dynamique_1.6_Front.jpg/1400px-2007_Renault_Megane_Dynamique_1.6_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Renault_Megane_rear_20071002.jpg/1400px-Renault_Megane_rear_20071002.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2006_Renault_Megane_Expression_interior.jpg/1400px-2006_Renault_Megane_Expression_interior.jpg",
  },
  [renaultKey("megane-2015")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Renault_M%C3%A9gane_III_1.6_16V_%282010%29_%2853326982104%29.jpg/1400px-Renault_M%C3%A9gane_III_1.6_16V_%282010%29_%2853326982104%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Renault_M%C3%A9gane_rear.jpg/1400px-Renault_M%C3%A9gane_rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/3/34/RS_265_Interior_%288165589005%29.jpg",
  },
  [renaultKey("megane-rs-2018")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Renault_MEGANE_R.S._%28ABA-MF4R2%29_front.jpg/1400px-Renault_MEGANE_R.S._%28ABA-MF4R2%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Renault_MEGANE_R.S._%28ABA-MF4R2%29_rear.jpg/1400px-Renault_MEGANE_R.S._%28ABA-MF4R2%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Renault_Megane_RS_interior_-_Tokyo_Auto_Salon_2011.jpg/1400px-Renault_Megane_RS_interior_-_Tokyo_Auto_Salon_2011.jpg",
  },
  [renaultKey("talisman-2017")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Renault_Talisman_Break_Initial_%28front_view%29.jpg/1400px-Renault_Talisman_Break_Initial_%28front_view%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Renault_Talisman_%282015%29_1X7A1604.jpg/1400px-Renault_Talisman_%282015%29_1X7A1604.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Renault_Talisman_Grandtour_%287%29_-_Undeployed_airbag.jpg/1400px-Renault_Talisman_Grandtour_%287%29_-_Undeployed_airbag.jpg",
  },
  [renaultKey("laguna-2009")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Renault_Laguna_III_Grandtour_GT_20090808_front.JPG/1400px-Renault_Laguna_III_Grandtour_GT_20090808_front.JPG",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Renault_Laguna_III_Grandtour_GT_20090808_rear.JPG/1400px-Renault_Laguna_III_Grandtour_GT_20090808_rear.JPG",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Renault_Laguna_Coup%C3%A9_Concept_%28interior%29_-_Flickr_-_cosmic_spanner.jpg/1400px-Renault_Laguna_Coup%C3%A9_Concept_%28interior%29_-_Flickr_-_cosmic_spanner.jpg",
  },
  [renaultKey("kadjar-2016")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/2016_Renault_Kadjar_Dynamique_NAV_DCi_1.5_Front.jpg/1400px-2016_Renault_Kadjar_Dynamique_NAV_DCi_1.5_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2016_Renault_Kadjar_Dynamique_NAV_DCi_1.5_Rear.jpg/1400px-2016_Renault_Kadjar_Dynamique_NAV_DCi_1.5_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2019_Renault_Kadjar_S_Edition_Blue_DCi_115_Interior.jpg/1400px-2019_Renault_Kadjar_S_Edition_Blue_DCi_115_Interior.jpg",
  },
  [renaultKey("captur-2014")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/2014_Renault_Captur_Que_S_NRG_900cc_Front.jpg/1400px-2014_Renault_Captur_Que_S_NRG_900cc_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/2014_Renault_Captur_Que_S_NRG_900cc_Rear.jpg/1400px-2014_Renault_Captur_Que_S_NRG_900cc_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Renault_Captur_interior_seen_from_rear.jpg/1400px-Renault_Captur_interior_seen_from_rear.jpg",
  },
  [renaultKey("captur-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/2020_Renault_Captur_S_Edition_Front_%281%29.jpg/1400px-2020_Renault_Captur_S_Edition_Front_%281%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2020_Renault_Captur_S_Edition_Rear_%281%29.jpg/1400px-2020_Renault_Captur_S_Edition_Rear_%281%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/2020_Renault_Captur_S_Edition_Interior.jpg/1400px-2020_Renault_Captur_S_Edition_Interior.jpg",
  },
  [renaultKey("scenic-2012")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Renault_Sc%C3%A9nic_--_Front.JPG/1400px-Renault_Sc%C3%A9nic_--_Front.JPG",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Renault_Sc%C3%A9nic_--_Rear.JPG/1400px-Renault_Sc%C3%A9nic_--_Rear.JPG",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Renault_Scenic_-_Flickr_-_Axel_Schwenke_%2818%29.jpg/1400px-Renault_Scenic_-_Flickr_-_Axel_Schwenke_%2818%29.jpg",
  },
  [renaultKey("grand-scenic-2017")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2017_Renault_Grand_Scenic_SIG_NAV_DCi_1.5_Front.jpg/1400px-2017_Renault_Grand_Scenic_SIG_NAV_DCi_1.5_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/2017_Renault_Grand_Scenic_SIG_NAV_DCi_1.5_Rear.jpg/1400px-2017_Renault_Grand_Scenic_SIG_NAV_DCi_1.5_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Renault_Scenic_-_Flickr_-_Axel_Schwenke_%2818%29.jpg/1400px-Renault_Scenic_-_Flickr_-_Axel_Schwenke_%2818%29.jpg",
  },
  [renaultKey("espace-2015")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/2015-present_Renault_Espace_Front.jpg/1400px-2015-present_Renault_Espace_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/2015-present_Renault_Espace_Rear.jpg/1400px-2015-present_Renault_Espace_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Renault_Espace_%C3%A9corch%C3%A9_-_Mondial_de_l%27Automobile_de_Paris_2014_-_009.jpg/1400px-Renault_Espace_%C3%A9corch%C3%A9_-_Mondial_de_l%27Automobile_de_Paris_2014_-_009.jpg",
  },
  [renaultKey("koleos-2009")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Renault_Koleos_2.0_dCi_4x2_%282009%29_%2853334141119%29.jpg/1400px-Renault_Koleos_2.0_dCi_4x2_%282009%29_%2853334141119%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Renault_Koleos_%28seit_2008%29_rear_MJ.JPG/1400px-Renault_Koleos_%28seit_2008%29_rear_MJ.JPG",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Renault_Grand_Koleos_esprit_Alpine_Aurora_I_Black.jpg/1400px-Renault_Grand_Koleos_esprit_Alpine_Aurora_I_Black.jpg",
  },
  [renaultKey("koleos-2018")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/2018_Renault_Koleos_Initiale_Paris_DCi_4X4_2.0_Front.jpg/1400px-2018_Renault_Koleos_Initiale_Paris_DCi_4X4_2.0_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/2018_Renault_Koleos_Initiale_Paris_DCi_4X4_2.0_Rear.jpg/1400px-2018_Renault_Koleos_Initiale_Paris_DCi_4X4_2.0_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Renault_Grand_Koleos_esprit_Alpine_Aurora_I_Black.jpg/1400px-Renault_Grand_Koleos_esprit_Alpine_Aurora_I_Black.jpg",
  },
  [renaultKey("zoe-2013")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2013-03-29--Renault-ZOE.jpg/1400px-2013-03-29--Renault-ZOE.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/White_Renault_Zoe_%28rear%29.jpg/1400px-White_Renault_Zoe_%28rear%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Renault_Zoe_Preview_%28interior%29.jpg/1400px-Renault_Zoe_Preview_%28interior%29.jpg",
  },
  [renaultKey("zoe-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2018_Renault_ZOE.jpg/1400px-2018_Renault_ZOE.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/White_Renault_Zoe_%28rear%29.jpg/1400px-White_Renault_Zoe_%28rear%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2020_Renault_Zoe_Intens_R135_Z.E._50_Interior.jpg/1400px-2020_Renault_Zoe_Intens_R135_Z.E._50_Interior.jpg",
  },
  [renaultKey("twingo-2008")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/2008_Renault_Twingo_Renaultsport_133_1.6_Front.jpg/1400px-2008_Renault_Twingo_Renaultsport_133_1.6_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2008_Renault_Twingo_Renaultsport_133_1.6_Rear.jpg/1400px-2008_Renault_Twingo_Renaultsport_133_1.6_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Renault_Twingo_Interior_-_Flickr_-_Alan_D.jpg/1400px-Renault_Twingo_Interior_-_Flickr_-_Alan_D.jpg",
  },
  [renaultKey("twingo-2016")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Renault_Twingo_04_by-dpc.jpg/1400px-Renault_Twingo_04_by-dpc.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Renault_TWINGO_INTENS_Canvas_top_%28DBA-AHH4B%29_rear.jpg/1400px-Renault_TWINGO_INTENS_Canvas_top_%28DBA-AHH4B%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Renault_TWINGO_INTENS_Canvas_top_%28DBA-AHH4B%29_interior.jpg/1400px-Renault_TWINGO_INTENS_Canvas_top_%28DBA-AHH4B%29_interior.jpg",
  },
  [renaultKey("fluence-2011")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Renault_Fluence_front%2C_Guangdong%2C_Dongguan%2C_China_24_May_2024.jpg/1400px-Renault_Fluence_front%2C_Guangdong%2C_Dongguan%2C_China_24_May_2024.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Renault_Fluence_Z.E._%28rear_quarter%29.jpg/1400px-Renault_Fluence_Z.E._%28rear_quarter%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Renault_Fluence_Z.E._Concept_interior.jpg/1400px-Renault_Fluence_Z.E._Concept_interior.jpg",
  },
  [renaultKey("fluence-ze-2013")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Renault_Fluence_Z.E._%28side%29.jpg/1400px-Renault_Fluence_Z.E._%28side%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Renault_Fluence_Z.E._%28rear_quarter%29.jpg/1400px-Renault_Fluence_Z.E._%28rear_quarter%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Renault_Fluence_Z.E._Concept_interior.jpg/1400px-Renault_Fluence_Z.E._Concept_interior.jpg",
  },
  [renaultKey("laguna-coupe-2011")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/2011_Renault_Laguna_Coupe_2.0_dCi_150_Dynamique_TomTom_%28Front%29.jpg/1400px-2011_Renault_Laguna_Coupe_2.0_dCi_150_Dynamique_TomTom_%28Front%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/2011_Renault_Laguna_Coupe_2.0_dCi_150_Dynamique_TomTom_in_Black_%28Rear%29.jpg/1400px-2011_Renault_Laguna_Coupe_2.0_dCi_150_Dynamique_TomTom_in_Black_%28Rear%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Renault_Laguna_Coup%C3%A9_Concept_%28interior%29_-_Flickr_-_cosmic_spanner.jpg/1400px-Renault_Laguna_Coup%C3%A9_Concept_%28interior%29_-_Flickr_-_cosmic_spanner.jpg",
  },
  [renaultKey("alaskan-2018")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Renault_Alaskan_IMG_9663.jpg/1400px-Renault_Alaskan_IMG_9663.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Renault_Alaskan_%28France%29_rear_view.jpg/1400px-Renault_Alaskan_%28France%29_rear_view.jpg",
    interior: null,
  },
  [renaultKey("trafic-2015")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Green_2015_Renault_Trafic_dci_120_-_Front.jpg/1400px-Green_2015_Renault_Trafic_dci_120_-_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Green_2015_Renault_Trafic_dci_120_-_Rear.jpg/1400px-Green_2015_Renault_Trafic_dci_120_-_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/2023-02-03_Renault_Trafic_Interior.jpg/1400px-2023-02-03_Renault_Trafic_Interior.jpg",
  },
  [renaultKey("master-2017")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Brocante_%C3%A0_Gif-sur-Yvette_le_21_mai_2017_-_22.jpg/1400px-Brocante_%C3%A0_Gif-sur-Yvette_le_21_mai_2017_-_22.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/3/32/Renault_master_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Renault-master-mpv-interior-2-501394.jpg/1400px-Renault-master-mpv-interior-2-501394.jpg",
  },
  [renaultKey("wind-2011")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Renault_Wind_TCe_100_%282011%29_%2853335007808%29.jpg/1400px-Renault_Wind_TCe_100_%282011%29_%2853335007808%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Renault_Wind_Dynamique_TCe_100_rear_20100918.jpg/1400px-Renault_Wind_Dynamique_TCe_100_rear_20100918.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Renault_Wind_Gordini_%286147872702%29.jpg/1400px-Renault_Wind_Gordini_%286147872702%29.jpg",
  },

  [subaruKey("legacy-2006")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Subaru_Legacy_front_20071228.jpg/1400px-Subaru_Legacy_front_20071228.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Subaru_Legacy_rear_20071228.jpg/1400px-Subaru_Legacy_rear_20071228.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Legacytwinterior.jpg",
  },
  [subaruKey("legacy-2015")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Subaru_Legacy_Concept_front_%2820413433024%29.jpg/1400px-Subaru_Legacy_Concept_front_%2820413433024%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Subaru_Legacy_Concept_rear_%2821009837396%29.jpg/1400px-Subaru_Legacy_Concept_rear_%2821009837396%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Subaru_LEGACY_OUTBACK_Limited_%28BS%29_interior.JPG/1400px-Subaru_LEGACY_OUTBACK_Limited_%28BS%29_interior.JPG",
  },
  [subaruKey("impreza-2007")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/ab/2007_Subaru_Impreza_Front_Quarter.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/3/3e/2007_Subaru_Impreza_Rear_Quarter.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Subaru_STI204_019x.JPG/1400px-Subaru_STI204_019x.JPG",
  },
  [subaruKey("impreza-wrx-2012")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2004-2005_Subaru_Impreza_WRX_wagon_--_01-27-2012_front.jpg/1400px-2004-2005_Subaru_Impreza_WRX_wagon_--_01-27-2012_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2004-2005_Subaru_Impreza_WRX_wagon_--_01-27-2012_rear.jpg/1400px-2004-2005_Subaru_Impreza_WRX_wagon_--_01-27-2012_rear.jpg",
    interior: null,
  },
  [subaruKey("wrx-sti-2017")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Subaru_WRX_STI_Type_S_%28CBA-VAB%29_front.jpg/1400px-Subaru_WRX_STI_Type_S_%28CBA-VAB%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Subaru_WRX_STI_Type_S_%28CBA-VAB%29_rear.jpg/1400px-Subaru_WRX_STI_Type_S_%28CBA-VAB%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/The_interior_of_Subaru_WRX_STI_Type_S_2017_year_model.jpg/1400px-The_interior_of_Subaru_WRX_STI_Type_S_2017_year_model.jpg",
  },
  [subaruKey("outback-2010")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Subaru_Outback_IV_2.0D_AWD_Active_front_20101017.jpg/1400px-Subaru_Outback_IV_2.0D_AWD_Active_front_20101017.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/2010_Subaru_Outback_rear_--_08-24-2009.jpg/1400px-2010_Subaru_Outback_rear_--_08-24-2009.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2006_Subaru_Outback_XT_366A7184_%2814530763368%29.jpg/1400px-2006_Subaru_Outback_XT_366A7184_%2814530763368%29.jpg",
  },
  [subaruKey("outback-2018")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/2018_Subaru_Outback_SE_Premium_Symmetrical_AWD_2.5_Front.jpg/1400px-2018_Subaru_Outback_SE_Premium_Symmetrical_AWD_2.5_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/2018_Subaru_Outback_SE_Premium_Symmetrical_CVT_Rear_2.5.jpg/1400px-2018_Subaru_Outback_SE_Premium_Symmetrical_CVT_Rear_2.5.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Subaru_LEGACY_OUTBACK_X-BREAK_%28DBA-BS9%29_interior.jpg/1400px-Subaru_LEGACY_OUTBACK_X-BREAK_%28DBA-BS9%29_interior.jpg",
  },
  [subaruKey("forester-2008")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Subaru_Forester_front_20080715.jpg/1400px-Subaru_Forester_front_20080715.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Subaru_Forester_rear_20080715.jpg/1400px-Subaru_Forester_rear_20080715.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/2008_Subaru_Forester_%28SH9_MY09%29_X_wagon_%282008-10-10%29_02.jpg/1400px-2008_Subaru_Forester_%28SH9_MY09%29_X_wagon_%282008-10-10%29_02.jpg",
  },
  [subaruKey("forester-2016")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Subaru_FORESTER_2.0XT_EyeSight_%28DBA-SJG%29_front.jpg/1400px-Subaru_FORESTER_2.0XT_EyeSight_%28DBA-SJG%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Subaru_FORESTER_2.0XT_EyeSight_%28DBA-SJG%29_rear.jpg/1400px-Subaru_FORESTER_2.0XT_EyeSight_%28DBA-SJG%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/2016_Subaru_Forester_2.0i-L_EyeSight_X-Mode_switch.jpg/1400px-2016_Subaru_Forester_2.0i-L_EyeSight_X-Mode_switch.jpg",
  },
  [subaruKey("forester-hybrid-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Blue_Subaru_FORESTER_Advance_%285AA-SKE%29_front.jpg/1400px-Blue_Subaru_FORESTER_Advance_%285AA-SKE%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Subaru_FORESTER_Advance_%285AA-SKE%29_%26_FORESTER_Premium_%285BA-SK9%29_rear.jpg/1400px-Subaru_FORESTER_Advance_%285AA-SKE%29_%26_FORESTER_Premium_%285BA-SK9%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/The_interior_of_Subaru_FORESTER_Advance_%285AA-SKE%29.jpg/1400px-The_interior_of_Subaru_FORESTER_Advance_%285AA-SKE%29.jpg",
  },
  [subaruKey("xv-2013")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2013_Subaru_XV_Crosstrek%2C_front_left_view.jpg/1400px-2013_Subaru_XV_Crosstrek%2C_front_left_view.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2013_Subaru_XV_Crosstrek%2C_rear_view.jpg/1400px-2013_Subaru_XV_Crosstrek%2C_rear_view.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Subaru_XV_HYBRID_2.0_i-L_Interior.jpg",
  },
  [subaruKey("xv-hybrid-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Subaru_XV_Advance_%285AA-GTE%29_front.jpg/1400px-Subaru_XV_Advance_%285AA-GTE%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Subaru_XV_Advance_Style_Edition_rear.jpg/1400px-Subaru_XV_Advance_Style_Edition_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/The_interior_of_Subaru_XV_Advance_%285AA-GTE%29.jpg/1400px-The_interior_of_Subaru_XV_Advance_%285AA-GTE%29.jpg",
  },
  [subaruKey("brz-2013")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Geneva_MotorShow_2013_-_Subaru_BRZ_front.jpg/1400px-Geneva_MotorShow_2013_-_Subaru_BRZ_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Subaru_BRZ_%28ZC6%2C_rear%29.jpg/1400px-Subaru_BRZ_%28ZC6%2C_rear%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Subaru_BRZ_Interior.JPG/1400px-Subaru_BRZ_Interior.JPG",
  },
  [subaruKey("brz-2022")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/2022_Subaru_BRZ_Limited_in_Crystal_Black_Silica%2C_front_right_%28NYIAS_2022%29.jpg/1400px-2022_Subaru_BRZ_Limited_in_Crystal_Black_Silica%2C_front_right_%28NYIAS_2022%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/2022_Subaru_BRZ_Limited_in_Crystal_Black_Silica%2C_rear_right_%28NYIAS_2022%29.jpg/1400px-2022_Subaru_BRZ_Limited_in_Crystal_Black_Silica%2C_rear_right_%28NYIAS_2022%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/The_interior_of_Subaru_BRZ_S_%283BA-ZD8%29_with_STI_Performance_parts.jpg/1400px-The_interior_of_Subaru_BRZ_S_%283BA-ZD8%29_with_STI_Performance_parts.jpg",
  },
  [subaruKey("tribeca-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Subaru_Tribeca.JPG/1400px-Subaru_Tribeca.JPG",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Subaru_Tribeca_Heck.JPG/1400px-Subaru_Tribeca_Heck.JPG",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2007_Subaru_Tribeca_%28B9_MY08%29_R_Premium_Pack_wagon_02.jpg/1400px-2007_Subaru_Tribeca_%28B9_MY08%29_R_Premium_Pack_wagon_02.jpg",
  },
  [subaruKey("tribeca-2012")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/2012_Subaru_Tribeca_3.6R_Limited_in_Ice_Silver_Metallic%2C_front_right.jpg/1400px-2012_Subaru_Tribeca_3.6R_Limited_in_Ice_Silver_Metallic%2C_front_right.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/2012_Subaru_Tribeca_3.6R_Limited_in_Ice_Silver_Metallic%2C_rear_left.jpg/1400px-2012_Subaru_Tribeca_3.6R_Limited_in_Ice_Silver_Metallic%2C_rear_left.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2007_Subaru_Tribeca_%28B9_MY08%29_R_Premium_Pack_wagon_02.jpg/1400px-2007_Subaru_Tribeca_%28B9_MY08%29_R_Premium_Pack_wagon_02.jpg",
  },
  [subaruKey("legacy-outback-2006")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/SubaruOutback.JPG/1400px-SubaruOutback.JPG",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/2010_Subaru_Outback_rear_--_08-24-2009.jpg/1400px-2010_Subaru_Outback_rear_--_08-24-2009.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/2006_Subaru_Outback_XT_366A7184_%2814530763368%29.jpg/1400px-2006_Subaru_Outback_XT_366A7184_%2814530763368%29.jpg",
  },
  [subaruKey("liberty-2010")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/2000_Subaru_Liberty_%28BE5_MY01%29_GX_sedan_%282010-05-04%29_01.jpg/1400px-2000_Subaru_Liberty_%28BE5_MY01%29_GX_sedan_%282010-05-04%29_01.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/2010_red_Subaru_Legacy_rear.JPG/1400px-2010_red_Subaru_Legacy_rear.JPG",
    interior: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Legacytwinterior.jpg",
  },
  [subaruKey("sambar-2005")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Subaru_Sambar_804.jpg/1400px-Subaru_Sambar_804.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Subaru_SAMBAR_VAN_Dias_%283BD-S700B%29_rear.jpg/1400px-Subaru_SAMBAR_VAN_Dias_%283BD-S700B%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Subaru_Sambar_interior.jpg/1400px-Subaru_Sambar_interior.jpg",
  },
  [subaruKey("justy-2007")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Subaru_Justy_1.JPG/1400px-Subaru_Justy_1.JPG",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Subaru_Justy_20170428_rear.jpg/1400px-Subaru_Justy_20170428_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Subaru_Justy_interior_%285104134222%29.jpg/1400px-Subaru_Justy_interior_%285104134222%29.jpg",
  },
  [subaruKey("domingo-2004")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Subaru_Libero_front_20070822.jpg/1400px-Subaru_Libero_front_20070822.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Subaru_Domingo_van_on_Kunyang_Street_20100914.jpg/1400px-Subaru_Domingo_van_on_Kunyang_Street_20100914.jpg",
    interior: null,
  },
  [subaruKey("r1-2005")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/9/92/2005_Subaru_R1.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Subaru_R1_102.jpg/1400px-Subaru_R1_102.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/e/e3/R1interior.jpg",
  },
  [subaruKey("r2-2004")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Subaru_R2_type_S.JPG/1400px-Subaru_R2_type_S.JPG",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Subaru_R2%2C_facelift%2C_rear_view.jpg/1400px-Subaru_R2%2C_facelift%2C_rear_view.jpg",
    interior: null,
  },
  [subaruKey("wrx-2015")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Subaru_WRX_STI_Type_S_%28CBA-VAB%29_front.jpg/1400px-Subaru_WRX_STI_Type_S_%28CBA-VAB%29_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Subaru_WRX_STI_Type_S_%28CBA-VAB%29_rear.jpg/1400px-Subaru_WRX_STI_Type_S_%28CBA-VAB%29_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Subaru_WRX_STI_%28VAB%29_interior.JPG/1400px-Subaru_WRX_STI_%28VAB%29_interior.JPG",
  },
  [subaruKey("b9-tribeca-2006")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/2005_Subaru_B9_Tribeca_front.jpg/1400px-2005_Subaru_B9_Tribeca_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2005_Subaru_B9_Tribeca_rear_34.jpg/1400px-2005_Subaru_B9_Tribeca_rear_34.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2007_Subaru_Tribeca_%28B9_MY08%29_R_Premium_Pack_wagon_02.jpg/1400px-2007_Subaru_Tribeca_%28B9_MY08%29_R_Premium_Pack_wagon_02.jpg",
  },

  [teslaKey("model-s-2014")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2014_Tesla_Motors_Model_S_%28front_view%29_Netherlands.jpg/1400px-2014_Tesla_Motors_Model_S_%28front_view%29_Netherlands.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/2014_Tesla_Motors_Model_S_%28rear_view%29_Netherlands.jpg/1400px-2014_Tesla_Motors_Model_S_%28rear_view%29_Netherlands.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_interior_of_TESLA_MODEL_S_P100D.jpg/1400px-The_interior_of_TESLA_MODEL_S_P100D.jpg",
  },
  [teslaKey("model-s-p90d-2016")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Tesla_Model_S_P90D_Hong_Kong_front_view_%28August_26%2C_2025%29.jpg/1400px-Tesla_Model_S_P90D_Hong_Kong_front_view_%28August_26%2C_2025%29.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Tesla_Model_S_P90D_Hong_Kong_rear_view_%28August_26%2C_2025%29.jpg/1400px-Tesla_Model_S_P90D_Hong_Kong_rear_view_%28August_26%2C_2025%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Tesla_Model_S_P90D_%E2%80%93_CeBIT_2016_02.jpg/1400px-Tesla_Model_S_P90D_%E2%80%93_CeBIT_2016_02.jpg",
  },
  [teslaKey("model-s-long-range-2020")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2021_Tesla_Model_S_P2_Long_Range_front_right_view.jpg/1400px-2021_Tesla_Model_S_P2_Long_Range_front_right_view.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2014_Tesla_Model_S_85%2C_Rear_Right%2C_07-27-2021.jpg/1400px-2014_Tesla_Model_S_85%2C_Rear_Right%2C_07-27-2021.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_interior_of_TESLA_MODEL_S_P100D.jpg/1400px-The_interior_of_TESLA_MODEL_S_P100D.jpg",
  },
  [teslaKey("model-3-2018")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Tesla_Model_3_parked%2C_front_driver_side.jpg/1400px-Tesla_Model_3_parked%2C_front_driver_side.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Rear_Tesla_Model_3_08_2018_0271.jpg/1400px-Rear_Tesla_Model_3_08_2018_0271.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Digital_control_screen_Tesla_Model_3_DCA_08_2018_0268.jpg/1400px-Digital_control_screen_Tesla_Model_3_DCA_08_2018_0268.jpg",
  },
  [teslaKey("model-3-performance-2021")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Tesla_Model_3_front.jpg/1400px-Tesla_Model_3_front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/2024_Tesla_Model_3_Performance_rear_view.png/1400px-2024_Tesla_Model_3_Performance_rear_view.png",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Tesla_Model_3_Performance_Facelift_-_interior_view.jpg/1400px-Tesla_Model_3_Performance_Facelift_-_interior_view.jpg",
  },
  [teslaKey("model-y-2021")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tesla_Model_Y_CRI_04_2021_8240.jpg/1400px-Tesla_Model_Y_CRI_04_2021_8240.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/2022_Tesla_Model_Y_Long_Range_AWD_Rear.jpg/1400px-2022_Tesla_Model_Y_Long_Range_AWD_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Tesla_Model_Y_2025_interior.jpg/1400px-Tesla_Model_Y_2025_interior.jpg",
  },
  [teslaKey("model-y-long-range-2022")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2022_Tesla_Model_Y_Long_Range_AWD_Front.jpg/1400px-2022_Tesla_Model_Y_Long_Range_AWD_Front.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/2022_Tesla_Model_Y_Long_Range_AWD_Rear.jpg/1400px-2022_Tesla_Model_Y_Long_Range_AWD_Rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tesla_Model_Y_Juniper_Long_Range_AWD_White_%2B_Black_03.jpg/1400px-Tesla_Model_Y_Juniper_Long_Range_AWD_White_%2B_Black_03.jpg",
  },
  [teslaKey("model-x-2016")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tesla_Model_X_100D_1X7A6736.jpg/1400px-Tesla_Model_X_100D_1X7A6736.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tesla_Model_X_100D_1X7A6737.jpg/1400px-Tesla_Model_X_100D_1X7A6737.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_interior_of_TESLA_MODEL_X_75D.jpg/1400px-The_interior_of_TESLA_MODEL_X_75D.jpg",
  },
  [teslaKey("model-x-p100d-2017")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/2017_Tesla_Model_X_100D_Front.jpg/1400px-2017_Tesla_Model_X_100D_Front.jpg",
    rear: null,
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/The_interior_of_Tesla_Model_X_P90D.jpg/1400px-The_interior_of_Tesla_Model_X_P90D.jpg",
  },
  [teslaKey("model-x-long-range-2021")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Tesla_Model_X_100D_1X7A6736.jpg/1400px-Tesla_Model_X_100D_1X7A6736.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2017_Tesla_Model_X_rear_5.27.18.jpg/1400px-2017_Tesla_Model_X_rear_5.27.18.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_interior_of_TESLA_MODEL_X_75D.jpg/1400px-The_interior_of_TESLA_MODEL_X_75D.jpg",
  },
  [teslaKey("cybertruck-awd-2024")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Tesla_Cybertruck_Front_Street_Lovingston_VA_June_2024_01.jpg/1400px-Tesla_Cybertruck_Front_Street_Lovingston_VA_June_2024_01.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/2024_Tesla_Cybertruck%2C_rear_9.7.24.jpg/1400px-2024_Tesla_Cybertruck%2C_rear_9.7.24.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Tesla_Cybertruck_-_Interior_-_Tesla_Store_Athens_2024.jpg/1400px-Tesla_Cybertruck_-_Interior_-_Tesla_Store_Athens_2024.jpg",
  },
  [teslaKey("cybertruck-tri-motor-2024")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Tesla_Cybertruck_Front_Street_Lovingston_VA_June_2024_02.jpg/1400px-Tesla_Cybertruck_Front_Street_Lovingston_VA_June_2024_02.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/2024_Tesla_Cybertruck_Foundation_Series_IMG_0634_%28cropped%29.jpg/1400px-2024_Tesla_Cybertruck_Foundation_Series_IMG_0634_%28cropped%29.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Tesla_Cybertruck_-_Interior_3_-_Tesla_Store_Athens_2024.jpg/1400px-Tesla_Cybertruck_-_Interior_3_-_Tesla_Store_Athens_2024.jpg",
  },
  [teslaKey("roadster-2010")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Tesla_Roadster_Ladevorgang.JPG/1400px-Tesla_Roadster_Ladevorgang.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Roadster_2.5_rear.jpg/1400px-Roadster_2.5_rear.jpg",
    interior:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Tesla_Roadster_2.5_Sport_%2822022010371%29.jpg/1400px-Tesla_Roadster_2.5_Sport_%2822022010371%29.jpg",
  },
  [teslaKey("roadster-2025")]: {
    front: null,
    rear: null,
    interior: null,
  },
  [teslaKey("semi-2023")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Tesla_Semi_From_the_Front_%2847619421222%29.jpg/1400px-Tesla_Semi_From_the_Front_%2847619421222%29.jpg",
    rear: null,
    interior: null,
  },

  [opelKey("corsa-2006")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/6/61/Opel_Corsa_C_1.2_Elegance_front_20100912.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Opel_Corsa_C_1.2_Elegance_rear_20100912.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Opel_Corsa_interior.JPG",
  },
  [opelKey("corsa-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/e3/2018_Vauxhall_Corsa_Energy_AC_1.4_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/4/42/Opel_Corsa_1.4_Turbo_ecoFLEX_Color_Edition_%28E%29_%E2%80%93_Heckansicht%2C_24._Oktober_2015%2C_M%C3%BCnster.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/9/9c/2018_Vauxhall_Corsa_Limited_Editon_Interior.jpg",
  },
  [opelKey("corsa-e-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Opel_Corsa-e_at_IAA_2019_IMG_0738.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b2/2019_Vauxhall_Corsa_SE_NAV_1.2_Rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/b/bd/2019_Vauxhall_Corsa_SRi_1.2_Interior.jpg",
  },
  [opelKey("astra-2007")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Opel_Astra_H_1.6_Twinport_front_20100509.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/58/Opel_Astra_H_1.6_Twinport_rear_20100509.jpg",
    interior: "https://s1.cdn.autoevolution.com/images/gallery/OPEL-Astra-Sedan-3498_10.jpg",
  },
  [opelKey("astra-2016")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/42/Opel_Astra_1.6_CDTI_ecoFLEX_Edition_%28K%29_%E2%80%93_Frontansicht%2C_13._Oktober_2015%2C_D%C3%BCsseldorf.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Opel_Astra_1.6_CDTI_ecoFLEX_Edition_%28K%29_%E2%80%93_Heckansicht%2C_13._Oktober_2015%2C_D%C3%BCsseldorf.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/6/69/Opel_Astra_1.4_EDIT_ecoFLEX_Innovation_%28K%29_%E2%80%93_Innenraum%2C_10._Oktober_2015%2C_D%C3%BCsseldorf.jpg",
  },
  [opelKey("astra-sports-tourer-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Opel_Astra_L_Sports_Tourer_Leonberg_2022_1X7A0417.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Opel_Astra_1.2_Turbo_Ultimate_%28L%29_%E2%80%93_h_13122024.jpg",
    interior: "https://cdn.motor1.com/images/mgl/g403wg/s2/opel-astra-sports-tourer-2022-im-studio.jpg",
  },
  [opelKey("insignia-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/2/29/Opel_Insignia_2.0_BiTurbo_CDTI_Sport_OPC_Line-Paket_%E2%80%93_Frontansicht%2C_3._April_2012%2C_Velbert.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/8/83/Opel_Insignia_CDTI_rear_20100926.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Opel_Insignia_Sportstourer_Edition_Pannacotta_Interieur.JPG",
  },
  [opelKey("insignia-2017")]: {
    front:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Opel_Insignia_Grand_Sport_1.6_Diesel_Business_Innovation_%28B%29_%E2%80%93_Frontansicht%2C_5._Mai_2017%2C_D%C3%BCsseldorf.jpg",
    rear:
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Opel_Insignia_Grand_Sport_1.6_Diesel_Business_Innovation_%28B%29_%E2%80%93_Heckansicht%2C_5._Mai_2017%2C_D%C3%BCsseldorf.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/50/2018_Vauxhall_Insignia_SRi_Interior.jpg",
  },
  [opelKey("mokka-2013")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/5/51/Opel_Mokka_1.4_Turbo_ecoFLEX_Innovation_%E2%80%93_Frontansicht%2C_20._Oktober_2012%2C_Heiligenhaus.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Opel_Mokka_X_1.6_CDTI_ecoFLEX_4x4_Edition_%28Facelift%29_%E2%80%93_Heckansicht%2C_23._Dezember_2016%2C_D%C3%BCsseldorf.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Opel_Mokka_1.4_Turbo_ecoFLEX_Innovation_%E2%80%93_Innenraum%2C_13._Oktober_2015%2C_D%C3%BCsseldorf.jpg",
  },
  [opelKey("mokka-e-2022")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/c9/2021_Opel_Mokka-e_front_view.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Opel_Mokka_B_IMG_4458.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Opel-mokka-gs-line-innen-1.jpg",
  },
  [opelKey("crossland-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Opel_Crossland_IMG_4883.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Opel_Crossland_IMG_4885.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Vauxhall_Crossland_X_Interior.jpg",
  },
  [opelKey("grandland-x-2019")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/6/6c/2018_Vauxhall_Grandland_X_Elite_Nav_Turbo_Diesel_1.6_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/8/83/Opel_Grandland_X_IMG_0383.jpg",
    interior: "https://media.whatcar.com/wc-image/vauxhall-grandland-x-2019-2826d.jpg",
  },
  [opelKey("zafira-tourer-2012")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Opel_Zafira_Tourer_1.4_Turbo_ecoFLEX_Edition_%28C%29_%E2%80%93_Frontansicht%2C_15._September_2012%2C_D%C3%BCsseldorf.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/53/Opel_Zafira_Tourer_1.4_Turbo_ecoFLEX_Edition_%28C%29_%E2%80%93_Heckansicht%2C_15._September_2012%2C_D%C3%BCsseldorf.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/d/d4/2017_Vauxhall_Zafira_Tourer_Elite_Nav_Turbo_-_1364cc_1.4_%28140PS%29_Petrol_-_Mineral_Black_-_05-2024%2C_Interior.jpg",
  },
  [opelKey("zafira-life-2021")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Opel_Zafira_Life_IMG_3458.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/3/39/Opel_Zafira_Life_%28Facelift%29_DSC_6023.jpg",
    interior: "https://i.ytimg.com/vi/HzD4fHjTa3U/maxresdefault.jpg",
  },
  [opelKey("astra-gtc-2013")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/2/29/Opel_Astra_GTC_%28H%2C_Facelift%29_%E2%80%93_Frontansicht%2C_28._Mai_2011%2C_Ratingen.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Opel_Astra_GTC_%28H%2C_Facelift%29_%E2%80%93_Heckansicht%2C_28._Mai_2011%2C_Ratingen.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/9/92/Astra_J_Innenraum.jpg",
  },
  [opelKey("monterey-2007")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/5/52/Opel_Monterey_RS.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/0/08/2001-2003_Holden_Monterey_%28UBS%29_wagon_02.jpg",
    interior: "https://cms-assets.autoscout24.com/uaddx06iwzdz/17VdggsjGrDnaYmC2GdKAS/12b8cd6b0ea16879dbf80a130a858784/opel-monterey-interior.jpeg?w=1100&fit=fill",
  },
  [opelKey("tigra-2004")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Opel_Tigra_Twin_Top_20090510_front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Opel_Tigra_Twin_Top_20090510_rear.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Tigra_2x2_interior_layout.jpg",
  },
  [opelKey("agila-2008")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/a/af/Opel_Agila_1.2_ecoFLEX_Edition_%28B%29_%E2%80%93_Frontansicht%2C_7._April_2011%2C_Velbert.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Opel_Agila_1.2_ecoFLEX_Edition_%28B%29_%E2%80%93_Heckansicht%2C_7._April_2011%2C_Velbert.jpg",
    interior: "https://imagenes.km77.com/fotos/bbtcontent/clippingnew/KM7KPH20091120_0164/full.jpg",
  },
  [opelKey("karl-rocks-2017")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/d/d4/2018_Vauxhall_Viva_Rocks_1.0_Front_%281%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/4/40/2018_Vauxhall_Viva_Rocks_1.0_Rear_%281%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Opel_Karl_1.0_ecoFLEX_Exklusiv_%E2%80%93_Innenraum%2C_28._Oktober_2015%2C_D%C3%BCsseldorf.jpg",
  },
  [opelKey("adam-2015")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Opel_Adam_1.4_Slam_%E2%80%93_Frontansicht%2C_15._Januar_2014%2C_D%C3%BCsseldorf.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Opel_Adam_1.4_Glam_%E2%80%93_Heckansicht%2C_15._Januar_2014%2C_D%C3%BCsseldorf.jpg",
    interior: "https://motordigital.com/files/2012/07/Opel-Adam-interior.jpg",
  },
  [opelKey("antara-2011")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Opel_Antara_2.4_4x4_Design_Edition_%28Facelift%29_%E2%80%93_Frontansicht%2C_29._Oktober_2011%2C_D%C3%BCsseldorf.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Opel_Antara_2.4_4x4_Design_Edition_%28Facelift%29_%E2%80%93_Heckansicht%2C_29._Oktober_2011%2C_D%C3%BCsseldorf.jpg",
    interior: "https://s1.cdn.autoevolution.com/images/gallery/OPEL-Antara-1037_23.jpg",
  },
  [opelKey("insignia-gsi-2018")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/7/74/Opel_Insignia_B_GSi_Classic-Days_2022_DSC_0288.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/3/31/Opel_Insignia_B_GSi_Classic-Days_2022_DSC_0287.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/50/2018_Vauxhall_Insignia_SRi_Interior.jpg",
  },
  [opelKey("astra-opc-2014")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/0/05/2013_Opel_Astra_%28AS%29_OPC_3-door_hatchback_%2826608054501%29.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/f/f8/2013_Opel_Astra_%28AS%29_OPC_3-door_hatchback_%2826608068581%29.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/6/69/Opel_Astra_1.4_EDIT_ecoFLEX_Innovation_%28K%29_%E2%80%93_Innenraum%2C_10._Oktober_2015%2C_D%C3%BCsseldorf.jpg",
  },
  [opelKey("insignia-grand-sport-2020")]: {
    front: "https://upload.wikimedia.org/wikipedia/commons/4/44/2020_Vauxhall_Insignia_SE_NAV_CDTi_facelift_1.5_Front.jpg",
    rear: "https://upload.wikimedia.org/wikipedia/commons/9/90/Opel_Insignia_B_FL_IMG_4456.jpg",
    interior: "https://upload.wikimedia.org/wikipedia/commons/5/50/2018_Vauxhall_Insignia_SRi_Interior.jpg",
  },

};

manualVehicleImages[buildManualImageKey("Ferrari")] = {
  ...manualVehicleImages[ferrariKey("f8-tributo-2020")],
};

manualVehicleImages[buildManualImageKey("Audi")] = {
  ...manualVehicleImages[audiKey("a6-2022")],
};

manualVehicleImages[buildManualImageKey("Hyundai")] = {
  ...manualVehicleImages[hyundaiKey("ioniq-5-2022")],
};

manualVehicleImages[buildManualImageKey("Kia")] = {
  ...manualVehicleImages[kiaKey("ev6-2022")],
};

manualVehicleImages[buildManualImageKey("BMW")] = {
  ...manualVehicleImages[bmwKey("540i-2021")],
};

manualVehicleImages[buildManualImageKey("Bentley")] = {
  ...manualVehicleImages[bentleyKey("continental-gt-2020")],
};

manualVehicleImages[buildManualImageKey("Mercedes-Benz")] = {
  ...manualVehicleImages[mercedesKey("c300-2020")],
};

manualVehicleImages[buildManualImageKey("Mitsubishi")] = {
  ...manualVehicleImages[mitsubishiKey("outlander-2021")],
};

manualVehicleImages[buildManualImageKey("Renault")] = {
  ...manualVehicleImages[renaultKey("clio-2019")],
};

manualVehicleImages[buildManualImageKey("Subaru")] = {
  ...manualVehicleImages[subaruKey("forester-2016")],
};

manualVehicleImages[buildManualImageKey("Tesla")] = {
  ...manualVehicleImages[teslaKey("model-y-long-range-2022")],
};

manualVehicleImages[buildManualImageKey("Opel")] = {
  ...manualVehicleImages[opelKey("astra-2016")],
};
