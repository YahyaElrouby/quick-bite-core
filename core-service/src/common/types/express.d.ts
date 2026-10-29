declare namespace Express {
  export interface Request {
    correlationId?: string;
    user?: {
      id: number;
      email: string;
      system_role: string;
    };
  }
}