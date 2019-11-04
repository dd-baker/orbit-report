export class Satellite {
name: string;
orbitType: string;
type: string;
operational: boolean;
launchDate: string;
typeCheck: boolean;

constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
    this.name = name,
    this.orbitType = orbitType,
    this.launchDate = launchDate,
    this.type = type,
    this.operational = operational
};

shouldShowWarning(){
    if(this.type.toLowerCase() == 'space debris'){
   return true;
} else {
    return false;
}};

ngOnInt() {}
}
