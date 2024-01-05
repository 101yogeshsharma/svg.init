import React from 'react';
import "./SocialHandles.css";
import GithubIcon from "../../assets/images/github_icon.png";
import GithubClickSoundEffect from "../../assets/audio/github_sound_effect.wav";

export default function Help() {

    const playClickSound = () => {
        const audio = document.getElementById("github-audio");
        audio.play();
    }

    return (
        <div className='social-handles-segment'>
            <div className='social-handle-github-button' onClick={playClickSound}>
                <a href="https://github.com/101yogeshsharma/svg.init">
                    <img src={GithubIcon} style={{ color: 'white' }} width={50} alt="github" />
                    <audio id="github-audio" src={GithubClickSoundEffect}></audio>
                </a>
            </div>
        </div>
    )
}
