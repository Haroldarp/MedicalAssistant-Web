export interface DoctorResponse {
    id: number;
    tipo_usuario: number;
    nombre: string;
    apellidos: string;
    username: string;
    sexo: string;
    fecha_nacimiento: string;
    cedula: string;
    especialidad: number;
    sub_especialidad: number;
}

export interface DoctorRequest {
    nombre: string;
    apellidos: string;
    sexo: string;
    fecha_nacimiento: string;
    cedula: string;
    username: string;
    password: string;
    especialidad: number;
    sub_especialidad: number;
}