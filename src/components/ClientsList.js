
import * as React from "react";
import Slider from "react-slick";
import BayRoute from "../asstes/images/bayroute_mumbai.png";
import Amelia from "../asstes/images/amelia_mumbai.png";
import Bastian from "../asstes/images/bastian_ware_innovations_restaurant_crockery.png";
import KCharcoal from "../asstes/images/k_s_charcoal_surat_ware_innovations_restaurant_crockery.png";
import Nandan_Coffee from "../asstes/images/Nandan_coffee.png";
import PapasBombay from "../asstes/images/papa_s_bombay_ceramic_tableware_ware_innovation.png";
import Craft_Of_Food from "../asstes/images/craft_of_food_2.0_ceramic_tableware_ware_innovation.png";
import Maffei_Fine_Artizan from "../asstes/images/maffei_artisan_kitchen_bengaluru_ware_innovations__restaurant_crockery.png";
import Dee_Beans_Cafe from "../asstes/images/Dee_beans_cafe_surat.png";
import Beanlore_Coffee from "../asstes/images/beanlore_cafe_bengaluru_ware_innovations_restaurant_crockery.png";
import Dome_Pizzeria from "../asstes/images/dome_pizzeria_surat_ware_innovations_restaurant_crockery.png";
import La_Croute from "../asstes/images/la_croute_delhi_ware_innovations__restaurant_crockery.png";
import Toast_Pasta_Bar from "../asstes/images/Toast_pasta_bar_mumbai_ware_innovations__restaurant_crockery.png";
import Port_Café from "../asstes/images/port_cafe_mumbai_ware_innovations__restaurant_crockery.png";
import Bleu_9 from "../asstes/images/Bleu_9_patisserie_Ahemdabad_ware_innovations_restaurant_crockery.png";
import Pizza_Frnds from "../asstes/images/pizza___frends_surat_ware_innovations__restaurant_crockery.png";
import Deck_88 from "../asstes/images/deck_88_goa_ware_innovations_restaurant_crockery.png";
import Neru_French_Bake from "../asstes/images/Neru_french_bake_house_ceramic_tableware_ware_innovations__restaurant_crockery.png";
import Club_Jolies from "../asstes/images/club_jolies_mumbai_ware_innovations_restaurant_crockery.png";
import Sequel from "../asstes/images/sequeal_mumbai_ware_innovations__restaurant_crockery.png";
import Soy_Street from "../asstes/images/soy_street_surat_ware_innovations.png";
import Anytime_at_Ks from "../asstes/images/anytime.png";
import Chetak_Caterers from "../asstes/images/chetak.png";
import Coffee_Culture from "../asstes/images/Coffee_culture.png";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ClientsData = [
  {
    img: BayRoute,
    title: "Bayroute, All branches, Mumbai",
    type: "Mediterranean Cuisine",
  },
  {
    img: Amelia,
    title: "Amelia's, Mumbai",
    type: "Continental, Italian",
  },
  {
    img: Bastian,
    title: "Bastian, All Branches",
    type: "Seafood, continental",
  },
  {
    img: KCharcoal,
    title: "K's Charcoal, Surat",
    type: "Italian Cuisine",
  },
  {
    img: Nandan_Coffee,
    title: "Nandan Coffee House, Mumbai",
    type: "Coffeehouse",
  },
  {
    img: PapasBombay,
    title: "Papa's Bombay, Mumbai",
    type: "Modern Indian",
  },
  {
    img: Craft_Of_Food,
    title: "Craft of Food 2.0, Mumbai",
    type: "Fast Food, Pizzas",
  },
  {
    img: Maffei_Fine_Artizan,
    title: "Maffei Fine Artizan Kitchen, Bengaluru",
    type: "Lebanese Restaurant",
  },
  {
    img: Dee_Beans_Cafe,
    title: "Dee Beans Cafe, Surat",
    type: "Coffee & Food",
  },
  {
    img: Beanlore_Coffee,
    title: "Beanlore Coffee Roasters, Bengaluru",
    type: "Café",
  },
  {
    img: Dome_Pizzeria,
    title: "Dome Pizzeria, Surat",
    type: "Italian Cuisine",
  },
  {
    img: La_Croute,
    title: "La Croute, New Delhi",
    type: "Bakery, Desserts",
  },
  {
    img: Toast_Pasta_Bar,
    title: "Toast Pasta Bar, Mumbai",
    type: "Italian Cuisine",
  },
  {
    img: Port_Café,
    title: "Port Café, Mumbai",
    type: "Café & Italian Cuisine",
  },
  {
    img: Bleu_9,
    title: "Bleu 9, Ahemdabad",
    type: "Patisserie",
  },
  {
    img: Pizza_Frnds,
    title: "Pizza & Frnds, Surat",
    type: "Italian",
  },
  {
    img: Deck_88,
    title: "Deck 88, Astor Goa",
    type: "Continental",
  },
  {
    img: Neru_French_Bake,
    title: "Neru French Bake House, Bengaluru",
    type: "Bakehouse",
  },
  {
    img: Club_Jolies,
    title: "Club Jolies, Mumbai",
    type: "European Cuisine",
  },
  {
    img: Sequel,
    title: "Sequel, Mumbai",
    type: "Organic Cuisine",
  },
  {
    img: Soy_Street,
    title: "Soy Street, Surat",
    type: "Asian-inspired",
  },
  {
    img: Anytime_at_Ks,
    title: "Anytime at K's, Surat",
    type: "Specialty Coffee & Artisanal Bakery",
  },
  {
    img: Chetak_Caterers,
    title: "Chetak Caterers, Mumbai",
    type: "Hospitality",
  },
  {
    img: Coffee_Culture,
    title: "Coffee Culture, Coming Soon",
    type: "",
  },
];


const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: {xs:'40%',sm:'45%',md:'50%'},
        right: {xs:'-50px',sm:'-30px',md:'-60px'},
        transform: "translateY(-50%)",
        color: "white",
        backgroundColor: "rgba(0,0,0,0.5)",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        zIndex: 1,
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: {xs:'40%',sm:'45%',md:'50%'},
        left: {xs:'-30px',sm:'-30px',md:'-50px'},
        transform: "translateY(-50%)",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        zIndex: 1,
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );
};
const ClientsList = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box>
      <Box sx={{ padding: 4, textAlign: "center" }}>
        <Typography
          sx={{
            color: "#565656",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 500,
            margin: { xs: "20px", sm: "25px", md: "30px 20px 60px 20px" },
          }}
        >
          {" "}
          Our Clients
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <Slider {...settings}>
            {ClientsData.map((client, index) => (
              <Box
                key={index}
                sx={{
                  padding: "0 15px",
                  margin: "0 10px",
                  display: "flex",
                  justifyContent: "center", // Center each image container
                }}
              >
                {/* Space between images */}
                <Box
                  sx={{
                    width: {xs:'100%',sm:'85%',md:'90%'},
                    position: "relative",
                    textAlign: "center",
                    // margin: "0 auto", 
                    marginRight:{xs:'60px',sm:'45px',md:'50px'}
                  }}
                >
                  <Box
                    component="img"
                    src={client.img}
                    alt={client.title}
                    sx={{
                      width: "100%",
                      aspectRatio: "4/5",
                      objectFit: "cover",
                      borderRadius: 1,
                    }}
                  />
                  <Typography
                    sx={{
                      color:'#565656',
                      fontSize: { xs: "16px", sm: "18px", md: "20px" },
                      fontWeight:600,
                      mt: 3,
                    }}
                  >
                    {client.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", sm: "18px", md: "16px" },
                      mt: 2,
                    }}
                  >
                    {client.type}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default ClientsList;
