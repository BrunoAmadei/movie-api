import React from "react";
import { Footer } from "./styles";
import { BsGithub } from "react-icons/bs"

export default () => {
    return (
        <Footer>
            <h2>Bruno Amadei</h2>
            <p>
                Data by:
                <a href="https://www.themoviedb.org/" target={"_blank"}> Themoviedb.org </a>
            </p>
            <span>
                <a href="https://github.com/BrunoAmadei" target={"_blank"}>
                    <BsGithub />
                </a>
            </span>
        </Footer>
    )
}