import React from "react";

function Pricecards(props){
    return(
        <div>
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.type}</h5>
                    <h6 className="card-price text-center">{props.amount}<span className="period">/{props.period}</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.type === "PLUS" ? <strong>{props.user}</strong> : props.type === "PRO" ? <strong>{props.user}</strong> : props.user} </li>

                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.storage}</li>

                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.projects}</li>
                        
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.access}</li>

                        <li className={props.type === "FREE" && "text-muted"}><span className="fa-li"><i className={props.type === "FREE" ? "fas fa-times": "fas fa-check"}></i></span>{props.private}</li>

                        <li className={props.type === "FREE" && "text-muted"}><span className="fa-li"><i className={props.type === "FREE" ? "fas fa-times": "fas fa-check"}></i></span>{props.support}</li>

                        <li className={props.type === "FREE" && "text-muted"}><span className="fa-li"><i className={props.type === "FREE" ? "fas fa-times": "fas fa-check"}></i></span>{props.type === "PRO" ? <span><strong>Unlimited </strong>{props.domain}</span> : props.domain}</li>

                        <li className={props.type === "FREE" ? "text-muted" : props.type === "PLUS" && "text-muted"}><span className="fa-li"><i className={props.type === "FREE" ? "fas fa-times": props.type === "PLUS" ? "fas fa-times": "fas fa-check"}></i></span>{props.status}</li>
                    </ul>
                    <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                </div>
            </div>
               
        </div>
    );

}

export default Pricecards;