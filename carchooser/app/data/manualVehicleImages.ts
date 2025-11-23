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
const bmwKey = (slug: string) => buildManualImageKey("BMW", slug);
const bentleyKey = (slug: string) => buildManualImageKey("Bentley", slug);

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

};

manualVehicleImages[buildManualImageKey("Ferrari")] = {
  ...manualVehicleImages[ferrariKey("f8-tributo-2020")],
};

manualVehicleImages[buildManualImageKey("Audi")] = {
  ...manualVehicleImages[audiKey("a6-2022")],
};

manualVehicleImages[buildManualImageKey("BMW")] = {
  ...manualVehicleImages[bmwKey("540i-2021")],
};

manualVehicleImages[buildManualImageKey("Bentley")] = {
  ...manualVehicleImages[bentleyKey("continental-gt-2020")],
};
