export interface Rekord {
    azonosito?: string; 
    identifier?: Identifier[]; 
    instantiates?: string[]; 
    partOf?: string[]; 
    status: string; 
    statusReason?: CodeableConcept[]; 
    category?: CodeableConcept; 
    medication: Medication; 
    subject: string; 
    context?: string; 
    supportInformation?: string[]; 
    effective: Effective; 
    performer?: Perfomer[]; 
    reasonCode?: CodeableConcept[]; 
    reasonReference?: string[]; 
    request?: string; 
    device: string[]; 
    note?: Annotation[]; 
    dosage?: Dosage; 
    eventHistory: string[]; 
}

export interface Identifier {
    use?: string;
    type?: CodeableConcept;
    system?: string;
    value?: string;
    period?: Period;
    assigner?: string;
}

export interface CodeableConcept {
    coding?: Coding[];
    text?: string;
}

export interface Coding {
    system?: string;
    version?: string;
    code?: string;
    display?: string;
    userSelected?: boolean;
}

export interface Period {
    start: string;
    end: string;
}

export interface Medication {
    medicationCodeableConcept?: string;
    medicationReference?: string;
}

export interface Effective {
    effectiveDateTime?: string; 
    effectivePeriod?: string; 
}

export interface Perfomer {
    function?: CodeableConcept; 
    actor: string; 
}

export interface Dosage {
    text?: string;
    site?: CodeableConcept;
    route?: CodeableConcept;
    method?: CodeableConcept;
    dose?: SimpleQuantity;
    rate?: SimpleQuantity;
}

export interface SimpleQuantity {
    value?: number;
    unit?: string;
    system?: string;
    code?: string;
}

export interface Annotation {
    author?: string;
    time?: string;
    text: string;
}

export interface Ratio {
    numerator: SimpleQuantity;
    denominator: SimpleQuantity;
}

export interface Rate {
    rateRatio?: string;
    rateQuantity?: string;
}