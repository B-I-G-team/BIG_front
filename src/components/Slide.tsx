import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper , Button } from '@mui/material'

const Example = (props:any) =>
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            img : "https://img.shareit.kr:13443/prod/img/2021-07-06/be0a11cf-0d08-4cd9-8719-88937088cf4b.jpg"
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            img : "https://img.shareit.kr:13443/prod/img/2021-09-02/44a48c68-e605-44ba-9a80-64ef5b7d7eed.jpg"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

const Item = (props:any) =>
{
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <img src ={props.item.img} alt =""></img>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Example;
