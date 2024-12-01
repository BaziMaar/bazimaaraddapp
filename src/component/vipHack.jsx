import { React, useState, useEffect } from "react";
import { CgProfile, CgYoutube } from "react-icons/cg";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import free from "../assets/free.png";
import freeTag from "../assets/freeTag.png";
import vip from "../assets/vip.png";
import okwin from "../assets/okwin.png";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import UpiCongrats from "../assets/upiCongrats.png";
import congratsLogo from "../assets/congratsLogo-removebg-preview.png";
import vipLogo from "../assets/vipCut.png";
import Lottery from "/public/66Lottery Logo.png";
import Daman from "/public/Daman Game Logo.png";
import DiuWin from "/public/DiuWin Hack New Logo.png";
import Raja from "/public/Raja Luck Logo.png";
import Big from "/public/Bigdaddygame logo.png";
import Lot from "/public/lottery7.png";
import Ok from "/public/okwin logo.png";
import Goa from "/public/goa game.png";
import Eight from "/public/82 Lottery.png";
import Sikkim from "/public/sikkim game logo.png";
import KWG from "/public/kwg logo.png";
import In from "/public/in999 logo.png";
import Five from "/public/55club logo.png";
import One from "/public/51game.png";
import Bharat from "/public/Bharat-Club-new-logo.png";
import Bazimaar from "/public/BaziMaarIcon.png";
import VIP from "../assets/vipLogos.png";

function vipHack() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [paymentUrl, setPaymentUrl] = useState(null);
  const [upiLinks, setUpiLinks] = useState(null);
  const [isCongratsOpen, setIsCongratsOpen] = useState(false);
  const [waLink, setWaLink] = useState("");
  const [tlLink, setTlLink] = useState("");
  const [ytLinks, setYtLink] = useState("");

  useEffect(() => {
    const getLinks = async () => {
      try {
        const response = await axios.get("https://sattajodileak.com/payment/get_links");
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].game_code == 1) {
            setWaLink(response.data[i].wa_link);
            setTlLink(response.data[i].tl_link);
            setYtLink(response.data[i].yt_link);
          }
        }
      } catch (error) {
        console.error("Error fetching links:", error.message);
      }
    };
    getLinks();
  }, []);

  const toggleCongrats = () => {
    setIsCongratsOpen(!isCongratsOpen);
  };

  const games = [
    { name: "Bazimaar Hack", url: "https://bazimaargames.com/login", img: Bazimaar },
    { name: "Tiranga Hack", url: "https://www.tirangagames.top/#/register?invitationCode=87854589447", img: img3 },
    { name: "91 Club Hack", url: "https://91club.bet/#/register?invitationCode=87134963862", img: img4 },
    { name: "TC Lottery Hack", url: "https://www.9987up.co/#/register?invitationCode=2ETva2184281", img: img2 },
    { name: "66 Lottery Hack", url: "https://www.66lottery21.com/#/pages/login/register?invitationCode=0100161148", img: Lottery },
    { name: "Daman Hack", url: "https://damangames.bet/#/register?invitationCode=1824814406257", img: Daman },
    { name: "Diu Win Hack", url: "https://diuwin.club/#/register?invitationCode=573322133054", img: DiuWin },
    { name: "Raja Luck Hack", url: "https://rajaluck.com/#/register?invitationCode=RWVuj62448", img: Raja },
    { name: "Big Daddy Game Hack", url: "https://www.bigdaddygame.org/#/register?invitationCode=5162610746590", img: Big },
    { name: "Lottery 7 Hack", url: "https://www.lottery77appinin.com/#/register?invitationCode=1475713204859", img: Lot },
    { name: "OKWin Hack", url: "https://www.okwinappinin.org//#/register?invitationCode=743786243833", img: Ok },
    { name: "Goa Game Hack", url: "https://goagame.com/#/register?invitationCode=16181495976", img: Goa },
    { name: "82 Lottery Hack", url: "https://india82appinin.org/#/register?invitationCode=666533745649", img: Eight },
    { name: "Sikkim Hack", url: "https://sikkim111.com/#/register?invitationCode=123832167786", img: Sikkim },
    { name: "KWG Hack", url: "https://kwgvip1.com/#/register?invitationCode=1449288C67", img: KWG },
    { name: "IN999 Hack", url: "https://in999.game/#/register?invitationCode=631342504375", img: In },
    { name: "55 Club Hack", url: "https://55wingo.in/#/register?invitationCode=152182688038", img: Five },
    { name: "51 Game Hack", url: "https://51game3.com/#/register?invitationCode=184442747831", img: One },
    { name: "Bharat Club Hack", url: "https://bharatclub.net/#/register?invitationCode=644332372640", img: Bharat },
  ];

  return (
    <>
      <div className="bg-white h-screen flex flex-col p-4 overflow-x-hidden">
        <div className="flex justify-center w-full items-center py-2">
          <img className="w-10" src={VIP} />
          <h1 className="text-md px-2 text-[#B4D7FF] font-bold text-start">You’re on VIP TIER</h1>
        </div>
        <h1 className="text-2xl px-8 text-[#2331DF] font-bold text-center">Colour Trading Hack</h1>

        {games.map((game, index) => (
          <Link
            key={index}
            to={`/result?name=${encodeURIComponent(game.name)}&url=${encodeURIComponent(game.url)}`}
            className="text-2xl bg-[#5271FF] px-1 m-2 mx-6 py-1 text-white font-bold rounded-full flex items-center justify-between"
          >
            <div className="flex items-center">
              <img src={game.img} alt={game.name} className="h-12 w-12" />
              <h1 className="px-4">{game.name}</h1>
            </div>
          </Link>
        ))}

        <div className="items-center">
          <img src={vipLogo} alt="vip Logo" className="mr-6 w-3/5 mx-16 m-2 rounded-lg" />
        </div>

        <div className="w-80% h-16 m-8 flex justify-center items-center">
          <div className="grid grid-cols-3 gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
              <FaWhatsapp className="w-14 h-14 text-green-500" />
            </a>
            <a href={tlLink} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center border-2 border-blue-500 rounded-full">
              <FaTelegramPlane className="w-10 h-10 text-blue-500" />
            </a>
            <a href={ytLinks} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center border-2 border-red-500 rounded-full">
              <CgYoutube className="w-10 h-10 text-red-700" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default vipHack;
