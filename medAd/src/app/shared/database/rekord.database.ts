import { Rekord } from '../models/rekord.model';

export const REKORDS: Rekord[] = [
    {
        id: 1,
        name: 'Első Pista',
        description: 'AlgoPyrin',
        dosage: 'minden nap reggel este 2 db pirula',
        reasonReference: 'Pista bácsinak fáj a feje nagyon',
        device: 'Rendelő 01 laptop'
    },
    {
        id: 2,
        name: 'Második Julianna',
        description: 'Fáj a hasa',
        dosage: 'Kedd reggelente egy szem bevétele',
        reasonReference: 'Szemfájdalom ellen',
        device: 'Orvosi Számíitógép'
    },
    {
        id: 3,
        name: 'Harmadik Gyula',
        description: 'Fáj a füle',
        dosage: 'Vasárnap esténként 6 szem bevétele',
        reasonReference: 'Fülgyulladási fájdalom ellen',
        device: 'Rendelő 02 Laptop'
    },
    {
        id: 4,
        name: 'Negyedik Nándor',
        description: 'Leszakadt a lába',
        dosage: 'Napi 2 doboz, alkohollal',
        reasonReference: 'Lábfájás ellen',
        device: 'Otthon laptop'
    }
];