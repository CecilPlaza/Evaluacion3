import React, { Component } from 'react';
import IntegranteFragment from './Fragments/IntegranteFragment'
import ImagenPerfil from '../assets/images/Perfil.gif'
export class Home extends Component {
    static displayName = Home.name;



    render() {
        return (

            <div className="row">
                <div className="col-5 flex-shrink-0">
                    <IntegranteFragment
                        imagen={ImagenPerfil}
                        titulo="Imagen de perfil"
                    />

                </div>
                <div className="container col-5">
                    <h1>
                        Cecil Ignacio Plaza Varas
                    </h1>
                    <p className="lead">
                        Fecha de nacimiento: 12 de Enero del 2002
                        <br />
                        Estudiante de Analista programador
                       

                    </p>
                </div>
                <div className="container mt-4">
                    <h1>
                        Habilidades
                    </h1>
                    <p className="lead">
                        Listado de habilidades
                    </p>
                    <ul class="list-group">
                        <li class="list-group-item">Uso de programas de Office</li>
                        <li class="list-group-item">Tocar la bateria</li>
                        <li class="list-group-item">Hacer mantenimiento de computadoras</li>
                        <li class="list-group-item">Main Shang Tsung MK11</li>
                    </ul>

                </div>




            </div>

        );
    }
}
