import { Component } from "react";
import { Space } from "../model/Model";


class DataService extends Component {
    public async reserveSpace(spaceId: string):Promise<string| undefined>{
        if(spaceId === '123')
        {return '5555'}
        else{
            return undefined
        }
    }
    public async getSpaces(): Promise<Space[]> {
        const result: Space[] = []
        result.push(
            {
                location: 'Paris',
                name: "Paris location",
                spaceId: '123'
            }
        )
        result.push(
            {
                location: 'New york',
                name: "NY location",
                spaceId: '456'
            }
        )
        result.push(
            {
                location: 'LA',
                name: "LA location",
                spaceId: '789'
            }
        )
        console.log('result', result)
        return result
    }
}

export default DataService;