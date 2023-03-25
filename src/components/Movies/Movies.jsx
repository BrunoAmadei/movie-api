import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MovieRow, Cards, Card, Item, BackArrow, ForwardArrow } from "./styles";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400)

    const handleBackClick = () => {
        let x = scrollX + Math.round(window.innerWidth / 2)
        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const handleForwardClick = () => {

    }

    return (
        <MovieRow>
            <h2>{title}</h2>
            <BackArrow onClick={handleBackClick}>
                <IoCaretBackCircle />
            </BackArrow>

            <ForwardArrow onClick={handleForwardClick}>
                <IoCaretForwardCircle />
            </ForwardArrow>

            <Cards>
                <Card style={{
                    marginLeft: scrollX,
                    width: items.results.length * 250
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <Link to={`/Movie/${item.id}`} key={key}>
                            <Item>
                                <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} />
                            </Item>
                        </Link>
                    ))}
                </Card>
            </Cards>
        </MovieRow>
    )
}