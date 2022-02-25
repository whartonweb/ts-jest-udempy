import { Component }  from "react";

interface SpaceCompoentProps {
    spaceId: string,
    name: string,
    location: string,
    photoUrl?: string,
    reserveSpace: (spaceId:string)=> void
}
 

 
class SpaceComponent extends Component<SpaceCompoentProps> {
private reserveSpace(id: string){
    return true
}

private rederImg(){
    if(this.props.photoUrl){
        return <img src={this.props.photoUrl} alt={this.props.photoUrl} />
    }else{
        let url =`https://picsum.photos/seed/picsum/340?random=1`
        return <img src={url} alt="generic" />
    }

}
    render() { 
        return ( 
        <div className="space">
            {this.rederImg()}
            <label className="ID">{this.props.spaceId}</label>
            <label className="Name">{this.props.name}</label>
            <label className="location">{this.props.location}</label>
            <button className="reserve" onClick={()=> this.props.reserveSpace(this.props.spaceId)}>Reserve</button>
        </div> );
    }
}
 
export default SpaceComponent ;