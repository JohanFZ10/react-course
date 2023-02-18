// Propiedades de los Inputs Compartidos
export type SharedInputsProps = {
    placeholder: string,
    name: string,
    type: string,
    children?: JSX.Element[] | JSX.Element | string;
    state?: boolean
}
// Propiedades de los Buttons Compartidos
export type SharedButtonsProps = {
    title?: string,
    tipo: string,
    width?: string
}
// Propiedades de los ButtonContainer Compartidos
export type SharedButtonContainerProps = {
    width: string
}