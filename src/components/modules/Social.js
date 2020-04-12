import React from "react";
import {
  faGithubSquare,
  faTwitch,
  faInstagramSquare,
  faTwitterSquare,
  faYoutubeSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TwitchIcon = ({ IconSize }) => {
  return (
    <a href="https://twitch.tv/seekaplayer" target="_blank">
      <FontAwesomeIcon size={IconSize} icon={faTwitch} />
    </a>
  );
};

export const GitHubIcon = ({ IconSize }) => {
  return (
    <a href="https://github.com/seekaplayer" target="_blank">
      <FontAwesomeIcon size={IconSize} icon={faGithubSquare} />
    </a>
  );
};

export const TwitterIcon = ({ IconSize }) => {
  return (
    <a href="https://twitter.com/seekaplayer" target="_blank">
      <FontAwesomeIcon size={IconSize} icon={faTwitterSquare} />
    </a>
  );
};

export const InstagramIcon = ({ IconSize }) => {
  return (
    <a href="https://instagram.com/seekaplayer_" target="_blank">
      <FontAwesomeIcon size={IconSize} icon={faInstagramSquare} />
    </a>
  );
};

export const YouTubeIcon = ({ IconSize }) => {
  return (
    <a href="https://youtube.com/seekaplayer" target="_blank">
      <FontAwesomeIcon size={IconSize} icon={faYoutubeSquare} />
    </a>
  );
};

export const FacebookIcon = ({ IconSize }) => {
  return (
    <a href="https://facebook.com/seekaplayer" target="_blank">
      <FontAwesomeIcon size={IconSize} icon={faFacebookSquare} />
    </a>
  );
};
