import React from "react";
import { useCallback } from 'react';


import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton
} from "react-share";


import {
  FacebookShareCount,
  HatenaShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount
} from "react-share";


import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";






const ShareToSocial = () => {




  return (
    <>




      <FacebookShareButton
        url={"https://peing.net/ja/"}

        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>


      <TwitterShareButton
        url={"https://peing.net/ja/"}

        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button ml-2"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>


      <WhatsappShareButton
        url={"https://peing.net/ja/"}

        hashtag={"#hashtag"}
        description={"aiueo"}
        className="Demo__some-network__share-button ml-2"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      



    </>
  );
};

export default ShareToSocial;