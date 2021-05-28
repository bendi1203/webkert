export interface Rekord {
    identifier?: any; //azonosító
    instantiates?: string; //protokoll
    partOf?: string; //egy nagyobb esemény, melynek az adminisztráció a része
    status: string; //állapot: folyamatban, várakozik, kész, hibás, ismeretlen
    statusReason?: string; //állapotindoklás
    category?: string; //kategória
    medication: Medication; //gyógyszer neve
    subject: string; //embercsoport aki kapja a gyógyszert
    context?: string; //beteg hányszor járt orvosnál, javult, nem javult..
    supportInformation?: string; //plusz infók, pl magasság, testsúly stb..
    effective: Effective; //dátum, mettől meddig tartott, nem tartott a kezelés
    performer: Perfomer; //ki az orvos
    reasonCode?: string; //indok, hogy miért lett kiírva a gyógyszer
    reasonReference?: string; //állapot - megfigyelés ami indokolja a gyógyszert
    request?: string; //hivatalos igénylés
    device: string; //igényléshez használt eszköz
    note?: string; //megjegyzés
    dosage: Dosage; //dózis, mikor, mennyit, hogyan
    eventHistory: string; //mikor lett hozzáadva az adminisztráció
}

export interface Medication{
    medicationCodeableConcept?: string;
    medicationReference?: string;
}

export interface Effective {
    effectiveDateTime?: string; //majd át kell írni date-ra
    effectivePeriod?: string; //-tól -ig
}

export interface Perfomer {
    function: string; //feladat
    actor: string; //ki csinálta
}

export interface Dosage {
    text: string; //leírás
    site: string; //pl. bal kéz
    route: string; //hogyan kell bevenni
    method: string; //hogyan kell beadni pl. óvatosan nyomva a kezet
    dose: string; //adag
    rate: Rate;
}

export interface Rate {
    rateRatio?: string;
    rateQuantity?: string;
}