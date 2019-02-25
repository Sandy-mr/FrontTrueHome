import React, { Component } from 'react'
import { api_url } from '../../utils/Url'

export default class Footer extends Component {
  setFormat = price => {
    if (typeof price !== 'undefined') {
      return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
    } else {
      return '0'
    }
  }
  render () {
    const property = this.props.data
    console.log(property.price)
    return (
      <div className='col-sm-4 property-item'>
        <div className='card'>
          <div>
            <img
              className='card-img-top'
              src='//via.placeholder.com/400x180'
              alt='Card cap'
            />
          </div>
          <div className='card-body'>
            <h5 className='card-title'>
              Propietario {property.name} {property.lastname}
            </h5>
            <p className='card-text'>Dirección propiedad: {property.address}</p>
            <a href={'/propertys/' + property._id} className='btn btn-primary'>
              Editar
            </a>
            <h5 className='card-title price'>
              Precio: $ {this.setFormat(property.price)}
            </h5>
          </div>
        </div>
      </div>
    )
  }
}
