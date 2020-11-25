import React from 'react';
import {Accordion, Card} from 'react-bootstrap'

function Project(props){
    return(      

        <div class="card">
            <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target={props.project.id} aria-expanded="true" aria-controls="collapseOne">
                {props.project.name} - {props.project.deadline}
                </button>
                </h2>
            </div>

            <div id={props.project.id} class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
            </div>
        </div>

    );

}

export default Project