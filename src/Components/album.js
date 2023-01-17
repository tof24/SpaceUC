import '../App.css'
import '../bootstrap.min.css'
import React, { useState } from "react";

function Album(props) {
    return (
        <div className={props.class}>
            <div className={"position-relative"}>
            <img className={"album"} src={props.cover}/>
                <div className={"nunito text-white pt-2"}>
                    <p className={"p-0 m-0"}>{props.name}</p>
                    <p className={"p-0 m-0"}>{props.artist}</p>
                </div>

            </div>


        </div>
    );
}

export default Album
