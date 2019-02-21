import React, { Component } from 'react';
import { api_url } from "../utils/Url";
import hero from "../assets/images/hero.jpg"
export default class Prpperty extends Component {
    render() {
        return (
            <div>
                <div className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,123,255,.5), rgba(40, 167, 69, 0.45)), url(${hero})` }}>
                    <h1 className="title-view-form">Editar propiedad inmobiliaria</h1>
                </div>
                <div className="row">
                    <div className="col-8 wrapper-form">
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="name">Nombre</label>
                                    <input type="text" required class="form-control" name="name" id="name" placeholder="Nombre" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="lastname">Apellido</label>
                                    <input type="text" class="form-control" id="lastname" placeholder="lastname" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="phone">Telefono</label>
                                    <input type="number" class="form-control" name="phone" id="phone" placeholder="Telefono" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="address">Dirección</label>
                                <input type="text" class="form-control" name="addres" id="address" placeholder="Dirección" />
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label for="price">Precio Venta $$</label>
                                    <input type="number" class="form-control" name="price" id="price" placeholder="Precio Venta" />
                                </div>
                            </div>
                            <br></br>
                            <button type="submit" class="btn btn-primary">Guardar Cambios</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
