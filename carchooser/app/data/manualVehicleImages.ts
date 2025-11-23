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
    front: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Audi_A4_B6_%282000%E2%80%932004%29_front_MJ.JPG",
    rear: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Audi_A4_B6_%282000%E2%80%932004%29_rear_MJ.JPG",
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

};

manualVehicleImages[buildManualImageKey("Ferrari")] = {
  ...manualVehicleImages[ferrariKey("f8-tributo-2020")],
};

manualVehicleImages[buildManualImageKey("Audi")] = {
  ...manualVehicleImages[audiKey("a6-2022")],
};
