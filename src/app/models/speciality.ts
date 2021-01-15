export interface SpecialityResponse{
    id: number;
    nombre_especialidad: string;
}

export interface SubSpecialityResponse{
    id: number;
    especialidad: number;
    nombre_sub_especialidad: string;
}