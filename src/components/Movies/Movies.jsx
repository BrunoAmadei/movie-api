import React, {useState} from "react";
import { Link } from "react-router-dom";
import { MovieRow, Cards, Card, Item, BackArrow, ForwardArrow } from "./styles";
import { IoCaretBackCircle, IoCaretForwardCircle } from "react-icons/io5";

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0)

    const handleBackClick = () => {

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
                <Card style={{marginLeft: scrollX}}>
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