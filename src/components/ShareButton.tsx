import { useState } from "react";
import ButtonBlue from "./ButtonBlue";

const ShareButton = () => {
  const [didCopy, setDidCopy] = useState(false);

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'ProxyNow',
          text: 'Help millions access the internet.',
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setDidCopy(true);
        setTimeout(() => setDidCopy(false), 2000);
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  }

  return (
    <ButtonBlue 
      small={true} 
      text={didCopy ? 'Link Copied to Clipboard!' : 'Share With Friends'} 
      onClick={() => handleShare()} 
    />
  )

};

export default ShareButton;