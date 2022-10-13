import React from 'react';
import styles from './Footer.module.scss';


const Footer = () => {
    return (
        <div className={styles.Footer}>
            <h1>Follow us on</h1>
            <hr/>
            <span className={styles.icons}>
                <a href={"https://twitter.com/IcgirlClan"} target={"_blank"}><img src={"../../../../Images/FooterIcons/FooterTwitter.png"} alt={"Twitter"}/></a>
               <a href={"https://www.instagram.com/mels_vagharshyan/"} target={"_blank"}><img src={"../../../../Images/FooterIcons/FooterInstagram.png"} alt={"Instagram"}/></a>
               <a href={"https://www.youtube.com/channel/UCYuLTexk5OSN2Zyke7BAtew"} target={"_blank"}><img src={"../../../../Images/FooterIcons/FooterYouTube.png"} alt={"YouTube"}/></a>
            </span>
            <span className={styles.copyright}>
               <img src={"../../../../Images/FooterIcons/copyright.png"} alt={"CopyRight"}/>
                <p>2022 Mels Style. All rights reserved.</p>
            </span>
        </div>
    );
};

export default Footer;