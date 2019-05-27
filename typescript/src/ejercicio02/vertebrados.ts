import {Animal} from "./animal";

export abstract class Vertebrados extends Animal {

    public respirar(): void {
        console.log("respiro con pulmones");
    }
}
