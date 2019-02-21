import React, { Component } from 'react';
import { api_url } from "../../utils/Url"

export default class Footer extends Component {
    render() {
        const property = this.props.data;
        return (
            <div className="col-sm-4">
                <div className="card">
                    <div>
                        <img className="card-img-top" src="//via.placeholder.com/400x180" alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Propietario {property.name} {property.lastname}</h5>
                        <p className="card-text">Dirección propiedad: {property.address}</p>
                        <a href={"/propertys/" + property._id} className="btn btn-primary">Editar</a>
                        <h5 className="card-title price">Precio: $ {property.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h5>
                    </div>
                </div>
            </div>
        );
    }
}