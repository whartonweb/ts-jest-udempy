import { Component } from "react";
import { Space } from "../../model/Model";
import DataService from "../../services/DataService";
import SpaceComponent from "./SpaceComponent";
import ConfirmModal from './ConfirmModal'
import './Spaces.css'


interface Props {

    dataService: DataService
}

interface State {
    spaces: Space[],
    showModal: boolean,
    modalContent: string
}

class Spaces extends Component<Props, State> {
    spaceId: string;

    constructor(props: Props) {
        super(props)
        this.state = ({
            spaces: [],
            showModal:false,
            modalContent: ''
        })
        this.reserveSpace = this.reserveSpace.bind(this)
        this.closeModal = this.closeModal.bind(this);
    
    }
    private async reserveSpace(spaceId: string) {
        console.log('spaceId', spaceId)
        const reservationResult = await this.props.dataService.reserveSpace(spaceId)
        if(reservationResult){
            this.setState({
                showModal: true,
                modalContent: `You reserved the space with id ${spaceId} with the reservation number: ${reservationResult}`
            }) 
        } else {
            this.setState({
                showModal: true,
                modalContent: `You can't reserve space ${spaceId}`
            }) 
        }
     }
    private rederSpaces() {
        const rows: any[] = []
        for (const space of this.state.spaces) {
            rows.push(
                    <SpaceComponent key={space.spaceId}
                        location={space.location}
                        name={space.name}
                        spaceId={space.spaceId}
                        reserveSpace={this.reserveSpace}
                    />
              
            )
        }
        return rows
    }
    async componentDidMount() {
        const spaces = await this.props.dataService.getSpaces()
        this.setState({
            spaces: spaces
        })
    }
    private closeModal(){
        this.setState({
            showModal:false
        })
    }
    render() {
        return <>
         Welcome to the Space Page
         <div className="space_wrapper">
            {this.rederSpaces()}
           <ConfirmModal show={this.state.showModal} close={this.closeModal} content={this.state.modalContent} />
        </div>
        </>
    }
}

export default Spaces;