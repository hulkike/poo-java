export abstract class Animal {
    public abstract comer(): void;

    public abstract desplazarse(): void;

    public abstract reproducirse(): void;

    public abstract respirar(): void;

    public morir(): void {
        console.log("me mori");
    }

    public abstract nacer(): void;


}


