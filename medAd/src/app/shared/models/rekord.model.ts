export interface Rekord {
    identifier?: any; //azonosító
    instantiates?: string; //protokoll
    partOf?: string; //egy nagyobb esemény, melynek az adminisztráció a része
    status: string; //állapot: folyamatban, várakozik, kész, hibás, ismeretlen
    statusReason?: string; //állapotindoklás
    category?: string; //kategória
    medication: string; //gyógyszer neve
    subject: string; //embercsoport aki kapja a gyógyszert
    context?: string; //beteg hányszor járt orvosnál, javult, nem javult..
    supportInformation?: string; //plusz infók, pl magasság, testsúly stb..
    effective: string; //dátum, mettől meddig tartott, nem tartott a kezelés
    performer: string; //ki az orvos
    reasonCode?: string; //indok, hogy miért lett kiírva a gyógyszer
    reasonReference?: string; //állapot - megfigyelés ami indokolja a gyógyszert
    request?: string; //hivatalos igénylés
    device: string; //igényléshez használt eszköz
    note?: string; //megjegyzés
    dosage: string; //dózis, mikor, mennyit, hogyan
    eventHistory: string; //mikor lett hozzáadva az adminisztráció
}