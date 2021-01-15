export interface ConsultationResponse {
    id: number;
    paciente: string;
    doctor: string;
    titulo: string;
    descripcion: string;
    fecha: Date;
    archivo: string;
}

export interface ConsultationRequest {
    paciente: number;
    titulo: string;
    descripcion: string;
    fecha: string;
    archivo: string;
    doctor: number;
}