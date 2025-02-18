import { Box, Grid, Link, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Ware_logo from "../asstes/images/ware-footer-logo.png";

const Footer = () => {
  const links = [
    "About us",
    "Ware store - Lower Parel, Mumbai",
    "Restaurant & café tableware",
    "Blogs - Our learnings & thoughts",
    "Return or Exchange your order",
    "Events - you don't want to miss",
    "Care & Features",
    "Return, Exchange & Refund Policy",
    "Shipping Policy",
    "Privacy Policy",
    "Terms & Conditions",
    "Terms of Service",
    "Track Your Order",
  ];

  const mediaLinks = [
    {
      icon: <InstagramIcon sx={{ fontSize: 30 }} />,
      label: "instagram",
      href: "https://www.instagram.com/wareinnovations/?hl=en",
    },
    {
      icon: <FacebookIcon sx={{ fontSize: 30 }} />,
      label: "facebook",
      href: "https://www.facebook.com/wareinnovations/",
    },
    {
      icon: <YouTubeIcon sx={{ fontSize: 30 }} />,
      label: "youtube",
      href: "https://www.youtube.com/channel/UCGolGL8_qUlC-qdy9G3pD2g",
    },
    {
      icon: <TwitterIcon sx={{ fontSize: 30 }} />,
      label: "twitter",
      href: "https://x.com/wareinnovations?lang=bg",
    },
    {
      icon: <PinterestIcon sx={{ fontSize: 30 }} />,
      label: "pinterest",
      href: "https://in.pinterest.com/wareinnovations/",
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 30 }} />,
      label: "linkedin",
      href: "https://www.linkedin.com/company/ware-innovations/?originalSubdomain=in",
    },
  ];

  return (
    <Box
      sx={{
        height: "auto",
        width: { xs: "auto", sm: "100%", md: "80%" },
        backgroundColor: "rgb(239,225,213)",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "70px",
        paddingBottom: "20px",
        color: "#565656",
      }}
    >
      <Grid container justifyContent="space-evenly">
        <Grid item xs={12} sm={3} md={4}>
          <Box
            sx={{
              marginLeft: { xs: "30px", sm: "5px", md: "5px" },
              mb: { xs: 4, sm: 0, md: 0 },
            }}
          >
            {links.map((link, index) => (
              <Link
                key={index}
                href="#"
                sx={{
                  display: "block",
                  color: "inherit",
                  textDecoration: "none",
                  marginBottom: "8px",
                  lineHeight: "25px",
                  fontSize: "13px",
                }}
              >
                {link}
              </Link>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={3} md={3} sx={{ mr: 3 }}>
          <Box
            sx={{
              marginLeft: { xs: "30px", sm: "5px", md: "5px" },
              mb: { xs: 4, sm: 0, md: 0 },

            }}
          >
            <img src={Ware_logo} alt="Ware Logo" />
            <Box>
              {mediaLinks.map((social, index) => (
                <IconButton
                  key={index}
                  aria-label={social.label}
                  color="inherit"
                  href={social.href}
                  target="blank"
                  sx={{ mt: 3 }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>{" "}
          </Box>
        </Grid>

        <Grid item xs={12} sm={3} md={3} sx={{ lineHeight: "30px" }}>
          <Box sx={{ marginLeft: { xs: "30px", sm: "5px", md: "0px" },marginTop:{xs:'5px',sm:'5px',md:'5px'} }}>
            <Typography sx={{ fontSize: "14px", fontWeight: 700, mb: 2 }}>
              Contact us:
            </Typography>
            <Box>
              <Typography sx={{ fontSize: "14px", fontWeight: 700 }}>
                Customer support
              </Typography>
              <Link
                href="mailto:hello@wareinnovations.com"
                color="inherit"
                display="block"
                sx={{ mb: 3, fontSize: "14px", textDecoration: "none" }}
              >
                hello@wareinnovations.com
              </Link>

              <Typography sx={{ fontSize: "14px", mb: 3 }}>
                <span style={{ fontWeight: 700 }}>Job Inquiry: </span>

                <Link
                  href="mailto:hello@wareinnovations.com"
                  color="inherit"
                  display="block"
                  sx={{ fontSize: "14px", textDecoration: "none" }}
                >
                  careers@wareinnovations.com
                </Link>
              </Typography>

              <Typography sx={{ fontSize: "14px", mb: 3 }}>
                <span style={{ fontWeight: 700 }}>Phone: </span>
                +91 9082820610
              </Typography>

              <Typography sx={{ fontSize: "14px" }}>
                <span style={{ fontWeight: 700 }}>Store: </span>
                Ware Innovations, Raghuvanshi Mills, Lower Parel, Mumbai 400013
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            paddingTop: "20px",
            marginTop:'30px',
          }}
        >
          <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
            © 2025 Ware Innovations Mumbai Powered by Shopify
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
