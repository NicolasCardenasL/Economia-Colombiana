import axios from "axios";

export type dataChart = dataNominalExchangeRate;

interface nominalExchangeRate {
    valor: number
    vigenciadesde: string,
    vigenciahasta: string
}; export type dataNominalExchangeRate = nominalExchangeRate[];
const maxElements: number = 30;
export async function getNominalExchangeData(): Promise<dataNominalExchangeRate> {
    const url: string = 'https://www.datos.gov.co/resource/ceyp-9c7c.json';
    const conditions: string = "$where=vigenciadesde >= '2000-02-01' AND vigenciadesde <= '2024-01-01'";
    let response = await axios.get(`${url}?${conditions}&$limit=${maxElements}`);
    
    response.data.map((point: nominalExchangeRate) => {
        let newPoint:nominalExchangeRate = point;
        let vigenciadesde:string = newPoint.vigenciadesde;
        let vigenciahasta:string = newPoint.vigenciahasta;
        console.log('map', Number(vigenciadesde.substring(5,7))%2===0)
        
        //2023-11-14T00:00:00.000        
        if (Number(vigenciadesde.substring(5,7))%2===0) {
            newPoint.vigenciadesde=vigenciadesde.substring(0,10);
            newPoint.vigenciahasta=vigenciahasta.substring(0,10);
            return newPoint
        } else { return }
    })
    console.log('response', response.data)
    return response.data;
}