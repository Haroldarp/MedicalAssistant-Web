export interface PatientResponse{
    id?: number;
    tipo_usuario?: number;
    nombre?: string;
    apellidos?: string;
    username?: string;
    sexo?: string;
    fecha_nacimiento?: string;
    cedula?: string;
    nombre_tutor?: string;
    cedula_tutor?: string;
    enfermedades?: any[];
}

export interface PatientResponseSearch {
    id: number;
    usuario: string;
    tipo_usuario: number;
    nombre: string;
    apellidos: string;
    sexo: string;
    fecha_nacimiento: string;
    cedula: string;
}

export interface PatientRequest{
    nombre: string;
    apellidos: string;
    sexo: string;
    fecha_nacimiento: string;
    cedula: string;
    nombre_tutor: string;
    cedula_tutor: string;
    username: string;
    password: string;
    enfermedades: any[];
}