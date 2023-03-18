import React from "react";
import { MovieRow, Cards, Card } from "./styles";

export default ({ title, items }) => {
    return (
        <MovieRow>
            <h2>{title}</h2>
            <Cards>
                <Card>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </Card>
            </Cards>
        </MovieRow>
    )
}