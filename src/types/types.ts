import { RowDataPacket } from "mysql2/promise";

export type DataUserRowData = RowDataPacket & {
    usuId: number;
    usuUsername: string;
    usuAppPat: string;
    usuAppMat: string;
    usuEmail: string;
    usuRole: string;
    usuTicket: number;
}

export interface DataUser {
    usuId: number;
    usuUsername: string;
    usuAppPat: string;
    usuAppMat: string;
    usuEmail: string;
    usuRole: string;
    usuTicket: number;
}