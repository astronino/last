import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group';
import React, { Component } from 'react';
import './StepperEstimationChar.scss';
import SelectBox from './../../../Elements/select-box';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import InfoIcon from '@material-ui/icons/Info';
import Popover from "react-bootstrap/Popover";
import PopoverTitle from "react-bootstrap/PopoverTitle";
import PopoverContent from "react-bootstrap/PopoverContent";
import { withRouter } from 'react-router-dom';
class StepperEstimationChar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cave: this.props.estimationState.estimation.cave,
            cheminee: this.props.estimationState.estimation.cheminee,
            balcon: this.props.estimationState.estimation.balcon,
            surfacecave: this.props.estimationState.estimation.surfacecave,
            surfacebalcon: this.props.estimationState.estimation.surfacebalcon,
            calme: this.props.estimationState.estimation.calme,
            parking: this.props.estimationState.estimation.parking,
            placesparking: this.props.estimationState.estimation.placesparking,
            chambreservice: this.props.estimationState.estimation.chambreservice,
            climatisation: this.props.estimationState.estimation.climatisation,
            ascenseur: this.props.estimationState.estimation.ascenseur,
            vueexceptionnelle: this.props.estimationState.estimation.vueexceptionnelle,
            duplex: this.props.estimationState.estimation.duplex,
            concierge:this.props.estimationState.estimation.concierge,
            surfaceCaveError: false,
            surfaceBalconError: false,
            paceParkingError: false,

            //Villa

            murmitoyen: this.props.estimationState.estimation.murmitoyen,
            typevilla: this.props.estimationState.estimation.typevilla,
            garage: this.props.estimationState.estimation.garage,
            piscine: this.props.estimationState.estimation.piscine,
            chaufeausolaire: this.props.estimationState.estimation.chaufeausolaire,
            typechauffage: this.props.estimationState.estimation.typechauffage,
            etatgeneral: this.props.estimationState.estimation.etatgeneral,
            anneeconstruction: this.props.estimationState.estimation.anneeconstruction
        }
    }

    handleChange = (event) => {
    }

    handleDropdownChange = (item, id) => {
        this.setState({
            [id]: item.value,
        });
    }

    returnPreviousStep = () => {
        this.props.dispatch({ type: 'SET_ACTIVE_STEP', data: 2});
        // ////console.log("return'= from Caract??ristiques")
        // ////console.log(this.props)
        // ////console.log(this.state)
    }

    onHandleNextChange = () => {
        const errorFound = this.validateFields();
        if (errorFound === true) {
            return;
        }
        this.props.dispatch({ type: 'WRITE_CHARACTERISTICS', data: this.state });
        this.props.dispatch({ type: 'SET_ACTIVE_STEP', data: 4});
    }

    validateFields() {
        this.setState({
            surfaceBalconError: false,
            surfaceCaveError: false,
            paceParkingError: false
        });
        let foundError = false;
        if (this.state.cave === 1 && (this.state.surfacecave === 0 || this.state.surfacecave === null || this.state.surfacecave === '')) {
            this.setState({
                surfaceCaveError: true
            });
            foundError = true;
        }
        if (this.state.balcon === 1 && (this.state.surfacebalcon === 0 || this.state.surfacebalcon === null || this.state.surfacebalcon === '')) {
            this.setState({
                surfaceBalconError: true
            });
            foundError = true;
        }

        if (this.state.parking === 1 && (this.state.placesparking === 0 || this.state.placesparking === null || this.state.placesparking === '')) {
            this.setState({
                paceParkingError: true
            });
            foundError = true;
        }
        return foundError;
    }
    componentDidMount(){
                this.props.history.replace({
            pathname : `/estimation/${this.props.estimationState.estimation.bien}/caracteristiques`,
        search : this.props.history.location.search})  
    }

    render() {
        const popover_balcons = (
            <Popover id="popover-contained">
                <PopoverTitle as="h3">Surfaces annexes</PopoverTitle>
                <PopoverContent>
                Les surfaces des annexes (balcons, boxs, parkings )  sont prises en compte avec une pond??ration dans le calcul de votre estimation
                </PopoverContent>
            </Popover>
        );

        return (
            <div className="row justify-content">
                <div className="col-md-12 col-sm-12 col-lg-8">
                    <div className="sectionTitle desktop">
                        <h5>Caract??ristiques du bien</h5>
                    </div>
                    <div className="step fourth-step">
                        <div className="form-group row customRow">
                        {
                                this.props.estimationState.estimation.bien === 'appartement' ? 
                                (
                                <>
                                    <div className="col-md-6 col-sm-12 checkbox field--with-overlay">
                                        
                                    <input 
                                        type="checkbox"
                                        id="balcon"
                                        onChange={(e) =>{
                                            if (e.target.checked === false) {
                                                this.setState({balcon : 0, surfaceBalconError: false});
                                            } else {
                                                this.setState({balcon : 1});
                                                this.validateFields();
                                            }
                                        }}
                                        value={this.state.balcon}
                                        checked = {this.state.balcon === 1}
                                    /> 
                                    <label for="balcon">Balcon(s) ou Terrasse(s)</label>
                                    <OverlayTrigger trigger="hover" placement="top" overlay={popover_balcons}>
                                                                <span className="info-icon"><InfoIcon/></span>
                                    </OverlayTrigger>
                                    
                                    </div>
                                    <div className="col-md-6 col-sm-12 checkbox checkbox--error">
                                        <CSSTransition appear={true} in timeout={300} classNames="additionalFields">
                                        <input 
                                            disabled={!this.state.balcon}
                                            className={this.state.balcon ? "input-form form-control surfaceBalcon"  : "input-form form-control surfaceBalcon disabled" }
                                            
                                            type="number"
                                            min="0"
                                            id="surfacebalcon"
                                            defaultValue={this.state.surfacebalcon !== 0 ? this.state.surfacebalcon : ''}
                                            onChange={(e) =>{
                                                this.setState({surfacebalcon: e.target.value})
                                            }}
                                            placeholder="m??"
                                            />
                                        </CSSTransition>
                                        <CSSTransition appear={true} unmountOnExit in={this.state.surfaceBalconError === true} out={this.state.surfaceBalconError === false} timeout={300} classNames="additionalFields">
                                            <span className="error-message estimationCharErr">Champs requis</span>
                                        </CSSTransition> 
                                    </div>
                                    <div className="col-md-6 col-sm-12 checkbox">
                                        <input 
                                            type="checkbox"
                                            id="cave"
                                            onChange={(e) => {
                                                if (e.target.checked === false) {
                                                    this.setState({cave : 0, surfaceCaveError: false});
                                                } else {
                                                    this.setState({cave : 1});
                                                    this.validateFields();
                                                }
                                            }}
                                            checked = {this.state.cave === 1}
                                        /> 
                                        <label for="cave">Box titr??</label>

                                    </div>
                                    <div className="col-md-6 col-sm-12 checkbox checkbox--error">
                                        <CSSTransition appear={true}  in timeout={300} classNames="additionalFields">
                                            <input
                                            disabled={this.state.cave === 0}
                                            className={this.state.cave === 1 ? "input-form form-control surfaceCave"  : "input-form form-control surfaceCave disabled" }
                                            type="number"
                                            min="0"
                                            id="surfacecave"
                                            onChange={(e) => {
                                                this.validateFields();
                                                this.setState({ surfacecave: e.target.value })
                                            }}
                                            defaultValue={this.state.surfacecave !== 0 ? this.state.surfacecave : ''}
                                            placeholder="m??"
                                            />
                                        </CSSTransition>
                                        <CSSTransition appear={true} unmountOnExit in={this.state.surfaceCaveError === true} out={this.state.surfaceCaveError === false} timeout={300} classNames="additionalFields">
                                            <span className="error-message estimationCharErr">Champs requis</span>
                                        </CSSTransition>
                                        
                                    </div>
                                    
                                    
                                    <div className="col-md-6 col-sm-12 checkbox">
                                        <input 
                                            type="checkbox"
                                            id="paking"
                                            onChange={(e) =>{
                                                if (e.target.checked === false) {
                                                    this.setState({parking : 0, paceParkingError: false});
                                                } else {
                                                    this.setState({parking : 1});
                                                    this.validateFields();
                                                }
                                            }}

                                            checked = {this.state.parking === 1}
                                        /> 
                                        <label for="paking">Place(s) de parking titr??e(s)</label>

                                    </div>
                                    <div className={this.state.parking ? "col-md-6 col-sm-12 checkbox"  : "col-md-6 col-sm-12 checkbox disabled" }>
                                        <CSSTransition appear={true} in timeout={300} classNames="additionalFields">
                                            <div className="placeParking">
                                                <div className="input-group">
                                                    <input type="number" min = "1" value = {this.state.placesparking}  className="quantity-field" />
                                                    <input type="button"
                                                    value="-" 
                                                    className="button-minus" 
                                                    onClick={() =>{
                                                        if (this.state.placesparking === 1) {
                                                            return;
                                                        } else {
                                                            this.setState({ placesparking : this.state.placesparking - 1 });
                                                        }
                                                    }}
                                                    />
                                                    
                                                    <input 
                                                    type="button" 
                                                    value="+" 
                                                    className="button-plus" 
                                                    onClick={() =>{this.setState({placesparking : this.state.placesparking + 1})}}/>
                                                </div>
                                                                                
                                            </div>
                                        </CSSTransition>
                                        <CSSTransition appear={true} unmountOnExit in={this.state.paceParkingError === true} out={this.state.parking === false} timeout={300} classNames="additionalFields">
                                            <span className="error-message estimationCharErr">Veuillez designer le nombre de place</span>
                                        </CSSTransition>
                                    </div>
                                    
                                </>
                                ): ''
                        }

                        {this.props.estimationState.estimation.bien === 'villa' ? 
                                (
                                <>
                                 

                                <div className="col-md-6 col-sm-12 checkbox">
                                    <input 
                                    type="checkbox"
                                    id="murmitoyen"
                                    value="0"
                                    onChange={(e) =>{
                                        this.setState({murmitoyen: e.target.checked === false ? 0 : 1})
                                    }}
                                    checked = {this.state.murmitoyen === 1}
                                    /> 
                                    <label for="murmitoyen">Mur mitoyen </label>
                                </div>
                                
                                <div className="col-md-6 col-sm-12" style={{marginBottom:"15px"}}>
                                    <CSSTransition appear={true} unmountOnExit in={this.state.murmitoyen === 1} timeout={300} classNames="errorField">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label className="form-title">Type de villa</label>
                                                    </div>
                                                    <div className="col-12">
                                                        <SelectBox
                                                            id="typevilla"
                                                            defaultValue={this.state.typevilla}
                                                            items={[
                                                                { value: 'villajumelee', id: 'Villa jumel??e' },
                                                                { value: 'villaenbande', id: 'Villa en bande' },
                                                            ]}
                                                            zIndex="5"
                                                            onSelectChange={this.handleDropdownChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CSSTransition>
                                </div>
                                
                                <div className="col-md-6 col-sm-12 checkbox">
                                <input 
                                    type="checkbox"
                                    id="garage"
                                    value="0"
                                    onChange={(e) =>{
                                        this.setState({garage: e.target.checked === false ? 0 : 1})
                                    }}
                                    checked = {this.state.garage === 1}
                                    /> 
                                    <label for="garage">Garage</label>
                                </div>
                                <div className="col-md-6 col-sm-12 checkbox">
                                <input 
                                    type="checkbox"
                                    id="piscine"
                                    value="1"
                                    onChange={(e) =>{
                                        this.setState({piscine: e.target.checked === false ? 0 : 1})
                                    }}
                                    checked = {this.state.piscine === 1}
                                    /> 
                                    <label for="piscine">Piscine</label>
                                </div>
                                
                                <div className="col-md-6 col-sm-12 checkbox">
                                    <input 
                                        type="checkbox"
                                        id="chaufeausolaire"
                                        value="1"
                                        onChange={(e) =>{
                                            this.setState({chaufeausolaire: e.target.checked === false ? 0 : 1})
                                        }}
                                        checked = {this.state.chaufeausolaire === 1}
                                        /> 
                                        <label for="chaufeausolaire">Chauffe eau solaire</label>
                                </div>

                               
                                
                                </>
                                ): ''
                            }
                           
                            <div className="col-md-6 col-sm-12 checkbox">
                                <input 
                                    type="checkbox"
                                    id="cheminee"
                                    value={this.state.cheminee}
                                    onChange={(e) =>{
                                        this.validateFields();
                                        this.setState({cheminee: e.target.checked === false ? 0 : 1})
                                    }}

                                    checked = {this.state.cheminee === 1}
                                />  
                                 <label for="cheminee">Chemin??e</label>
                            </div>
                            <div className="col-md-6 col-sm-12 checkbox">
                                <input 
                                type="checkbox"
                                id="calme"
                                value="0"
                                onChange={(e) =>{
                                    this.setState({calme: e.target.checked === false ? 0 : 1})
                                }}
                                checked = {this.state.calme === 1}
                                />  
                                <label for="calme">Calme</label>
                            </div>
                            <div className="col-md-6 col-sm-12 checkbox">
                            <input 
                                type="checkbox"
                                id="vueexceptionnelle"
                                value="1"
                                onChange={(e) =>{
                                    this.setState({vueexceptionnelle: e.target.checked === false ? 0 : 1})
                                }}
                                checked = {this.state.vueexceptionnelle === 1}
                                /> 
                                <label for="vueexceptionnelle">Sans vis-??-vis</label>
                            </div>
                            
                            
                            {this.props.estimationState.estimation.bien === 'appartement' ? 
                                (
                                <>
                                 <div className="col-md-6 col-sm-12 checkbox">
                                    <input 
                                    type="checkbox"
                                    id="chambreservice"
                                    value="0"
                                    onChange={(e) =>{
                                        this.setState({chambreservice: e.target.checked === false ? 0 : 1})
                                    }}
                                    checked = {this.state.chambreservice === 1}
                                    /> 
                                    <label for="chambreservice">Chambre de service </label>
                                </div>
                                <div className="col-md-6 col-sm-12 checkbox">
                                <input 
                                    type="checkbox"
                                    id="climatisation"
                                    value="0"
                                    onChange={(e) =>{
                                        this.setState({climatisation: e.target.checked === false ? 0 : 1})
                                    }}
                                    checked = {this.state.climatisation === 1}
                                    /> 
                                    <label for="climatisation">Climatisation centralis??e</label>
                                </div>
                                <div className="col-md-6 col-sm-12 checkbox">
                                <input 
                                    type="checkbox"
                                    id="ascenseur"
                                    value="1"
                                    onChange={(e) =>{
                                        this.setState({ascenseur: e.target.checked === false ? 0 : 1})
                                    }}
                                    checked = {this.state.ascenseur === 1}
                                    /> 
                                    <label for="ascenseur">Ascenseur</label>
                                </div>
                                
                                <div className="col-md-6 col-sm-12 checkbox">
                                    <input 
                                        type="checkbox"
                                        id="duplex"
                                        value="1"
                                        onChange={(e) =>{
                                            this.setState({duplex: e.target.checked === false ? 0 : 1})
                                        }}
                                        checked = {this.state.duplex === 1}
                                        /> 
                                        <label for="duplex">Duplex</label>
                                </div>

                                <div className="col-md-6 col-sm-12 checkbox">
                                    <input 
                                        type="checkbox"
                                        id="concierge"
                                        value="1"
                                        onChange={(e) =>{
                                            this.setState({concierge: e.target.checked === false ? 0 : 1})
                                        }}
                                        checked = {this.state.concierge === 1}
                                        /> 
                                        <label for="concierge">R??sidence ferm??e</label>
                                </div>
                                </>
                                ): ''
                            }

                            {this.props.estimationState.estimation.bien === 'villa' ? 
                                (
                                <>
                                {/* <div className="col-md-6 col-sm-12" style={{marginBottom:"15px"}}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-12">
                                                    <label className="form-title">Ann??e de construction</label>
                                                </div>
                                                <div className="col-12">
                                                    <SelectBox
                                                        id="anneeconstruction"
                                                        defaultValue={this.state.anneeconstruction}
                                                        items={[
                                                            { value: -1, id: 'Je ne sais pas' },
                                                            { value: 0, id: 'Neuve' },
                                                            { value: 1, id: 'Entre 1 et 5 ans' },
                                                            { value: 2, id: 'Entre 5 et 10 ans' },
                                                            { value: 3, id: 'Plus de 10 ans' },
                                                            { value: 4, id: 'Plus de 20 ans' }
                                                        ]}
                                                        zIndex="5"
                                                        onSelectChange={this.handleDropdownChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="col-md-6 col-sm-12" >
                                    <CSSTransition appear={true} unmountOnExit in={this.state.anneeconstruction !== 0} timeout={300} classNames="errorField">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <label className="form-title">Etat g??n??ral de la maison</label>
                                                    </div>
                                                    <div className="col-12">
                                                        <SelectBox
                                                            id="finition"
                                                            defaultValue={this.state.etatgeneral}
                                                            items={[
                                                                { value: 'travauxaprevoir', id: 'Travaux ?? pr??voir' },
                                                                { value: 'correct', id: 'Correct' },
                                                                { value: 'etatneuf', id: 'Etat neuf' },
                                                            ]}
                                                            zIndex="2"
                                                            onSelectChange={this.handleDropdownChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CSSTransition>
                                    
                                </div>
                              */}
                                  <div className="col-md-12 col-sm-12" style={{marginBottom:"15px"}}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row">
                                                <div className="col-12">
                                                    <label className="form-title">Type de chauffage</label>
                                                </div>
                                                <div className="col-12">
                                                    <SelectBox
                                                        id="typechauffage"
                                                        defaultValue={this.state.typechauffage}
                                                        items={[
                                                            { value: -1, id: 'Je ne sais pas' },
                                                            { value: 0, id: 'Electrique' },
                                                            { value: 1, id: 'Chaudi??re centrale au fuel' },
                                                            { value: 2, id: 'Chaudi??re centrale au gaz' },
                                                            { value: 3, id: 'Pompe ?? chaleur' }
                                                        ]}
                                                        zIndex="2"
                                                        onSelectChange={this.handleDropdownChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                </>
                                ): ''
                            }
                           
                        </div>
                    </div>
                </div>
               
                
                    <div className="third-button high--index">
                        <button className="button button-secondary secondaryCustom" type="button" onClick={this.returnPreviousStep}>Retour</button>
                        <button className="button button-primary primaryyCustom" type="button" onClick={this.onHandleNextChange}>Valider</button>
                    </div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const uid = state.auth.uid;
    const loader = state.loading.loading;
    const estimation = state.estimationState;
    const user = state.auth.user
    return {
      uid: uid,
      loader: loader,
      estimationState: estimation,
      user : user
    };
};

export default connect(mapStateToProps)(withRouter(StepperEstimationChar));