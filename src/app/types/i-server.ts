export interface IServer {
    hostname: string;
    description: string;
    ip: string;
    deadline?: number;
    verified: boolean;
}
