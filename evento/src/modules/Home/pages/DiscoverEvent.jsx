import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import "./DiscoverEvent.jsx";
import {
  Head,
  Eventname,
  Eventadd,
  Eventtime,
  Tickets,
  CardGroup,
  Text,
} from "../components/atom.js";
import {
  icon,
  ticket,
  banner,
  star,
  ellipse,
  banner1,
  banner2,
} from "../../../assets/index.js";
export default function MultipleInteractionCard() {
  return (
    <>
      <Head>Discover Best of Online Events</Head>
      <CardGroup>
        <Card
          variant="outlined"
          className="qt-card1"
          sx={{
            marginRight: "40px",
            border: 0,
            backgroundColor: "transparent",
          }}
        >
          <CardOverflow
            sx={{
              width: 410,
              height: 205,
              borderRadius: 8,
            }}
          >
            {" "}
            <AspectRatio ratio="2">
              <img
                src={banner}
                loading="lazy"
                alt=""
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
            </AspectRatio>
            <IconButton
              size="md"
              variant="solid"
              backgroundcolor="#fff"
              sx={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: "16px",
                top: "16px",
              }}
            >
              <Favorite />
            </IconButton>
            <Text
              sx={{
                position: "relative",
              }}
            >
              Travel & Adventure
            </Text>
          </CardOverflow>
          <CardContent className="qt-content">
            <Typography className="calender" level="title-md">
              <Link href="#multiple-actions" overlay underline="none">
                <img src={icon} />
                NOV 25 - 26
              </Link>
            </Typography>
            <Typography level="body-sm">
              <Eventname> Lakeside Camping at Pawna</Eventname>
              <Eventadd>
                {" "}
                Adventure Geek - Explore the Unexplored, Mu..
              </Eventadd>

              <Eventtime>8:30 AM - 7:30 PM</Eventtime>
            </Typography>

            <Tickets className="tickets" orientation="horizontal">
              <div className="price">
                <img src={ticket} />
                INR 1,400
              </div>
              <div className="ellipse">
                <img src={ellipse} />
              </div>

              <div className="interested">
                <img src={star} />
                14 interested
              </div>
            </Tickets>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          className="qt-card"
          sx={{
            marginRight: "40px",
            border: 0,
            backgroundColor: "transparent",
          }}
        >
          <CardOverflow
            sx={{
              width: 410,
              height: 205,
              borderRadius: 8,
            }}
          >
            {" "}
            <AspectRatio ratio="2">
              <img
                src={banner1}
                loading="lazy"
                alt=""
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
            </AspectRatio>
            <IconButton
              size="md"
              variant="solid"
              backgroundcolor="#fff"
              sx={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: "16px",
                top: "16px",
              }}
            >
              <Favorite />
            </IconButton>
            <Text
              sx={{
                position: "relative",
              }}
            >
              Educational & Business
            </Text>
          </CardOverflow>
          <CardContent className="qt-content">
            <Typography className="calender" level="title-md">
              <Link href="#multiple-actions" overlay underline="none">
                <img src={icon} />
                NOV 25 - 26
              </Link>
            </Typography>
            <Typography level="body-sm">
              <Eventname> Lakeside Camping at Pawna</Eventname>
              <Eventadd>
                {" "}
                Adventure Geek - Explore the Unexplored, Mu..
              </Eventadd>

              <Eventtime>8:30 AM - 7:30 PM</Eventtime>
            </Typography>

            <Tickets className="tickets" orientation="horizontal">
              <div className="price">
                <img src={ticket} />
                INR 1,400
              </div>
              <div className="ellipse">
                <img src={ellipse} />
              </div>

              <div className="interested">
                <img src={star} />
                14 interested
              </div>
            </Tickets>
          </CardContent>
        </Card>
        <Card
          variant="outlined"
          className="qt-card"
          sx={{
            marginRight: "40px",
            border: 0,
            backgroundColor: "transparent",
          }}
        >
          <CardOverflow
            sx={{
              width: 410,
              height: 205,
              borderRadius: 8,
            }}
          >
            {" "}
            <AspectRatio ratio="2">
              <img
                src={banner2}
                loading="lazy"
                alt=""
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                }}
              />
            </AspectRatio>
            <IconButton
              size="md"
              variant="solid"
              backgroundcolor="#fff"
              sx={{
                position: "absolute",
                zIndex: 2,
                borderRadius: "50%",
                right: "16px",
                top: "16px",
              }}
            >
              <Favorite />
            </IconButton>
            <Text
              sx={{
                position: "relative",
              }}
            >
              Travel & Adventure
            </Text>
          </CardOverflow>
          <CardContent className="qt-content">
            <Typography className="calender" level="title-md">
              <Link href="#multiple-actions" overlay underline="none">
                <img src={icon} />
                NOV 25 - 26
              </Link>
            </Typography>
            <Typography level="body-sm">
              <Eventname> Lakeside Camping at Pawna</Eventname>
              <Eventadd>
                {" "}
                Adventure Geek - Explore the Unexplored, Mu..
              </Eventadd>

              <Eventtime>8:30 AM - 7:30 PM</Eventtime>
            </Typography>

            <Tickets className="tickets" orientation="horizontal">
              <div className="price">
                <img src={ticket} />
                INR 1,400
              </div>
              <div className="ellipse">
                <img src={ellipse} />
              </div>

              <div className="interested">
                <img src={star} />
                14 interested
              </div>
            </Tickets>
          </CardContent>
        </Card>
      </CardGroup>
    </>
  );
}
