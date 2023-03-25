import React from "react";
import { Link } from "react-router-dom";
import { MovieRow, Cards, Card, Item, BackArrow, ForwardArrow } from "./styles";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";

export default ({ title, items }) => {
    return (
        <MovieRow>
            <h2>{title}</h2>

            <BackArrow>
                <IoCaretBackCircle />
            </BackArrow>
            <ForwardArrow>
                <IoCaretForwardCircle />
            </ForwardArrow>

            <Cards>
                <Card>
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